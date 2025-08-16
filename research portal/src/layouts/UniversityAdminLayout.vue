<template>
  <v-app>
    <!-- Sidebar -->
    <v-navigation-drawer app v-model="drawer" width="260">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />

       <v-divider></v-divider>

      <v-list nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.route"
          link
        >
          <div class="menu-item">
            <v-icon class="me-3">{{ item.icon }}</v-icon>
            <span>{{ item.title }}</span>
          </div>
        </v-list-item>
      </v-list>

      <template #append>
        <div class="pa-4">
          <v-btn
            prepend-icon="mdi-logout"
            block
            color="error"
            @click="handleLogout"
          >
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>


    <!-- Top Bar -->
    <v-app-bar app color="#396FC8" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon class="profileimage">mdi-account-circle</v-icon>
      </v-btn>
      <div class="flex flex-column ml-2  mr-4">
      <h4>Name</h4>
      <p>University Admin</p>
      </div>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>


  </v-app>
</template>

   

<script setup>
import { ref } from 'vue'

const drawer = ref(true)
const pageTitle = ref("")

const menuItems = [
  { title: "Dashboard", icon: "mdi-view-dashboard", route: "/dashboard" },
  { title: "Faculties", icon: "mdi-office-building", route: "/faculty" },
  { title: "Projects", icon: "mdi-clipboard-list", route: "/projects" },
  { title: "Funding overview", icon: "mdi-cash", route: "/Funding" },
]

const handleLogout = () => {
  console.log("Logging out...");
};

</script>

<style scoped>
  .logo {
    width: 200px;
    height: auto;
    margin: 20px auto 40px auto; 
    display: block;
  }


.menu-item {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}

.v-list-item--active {
  background-color: #e3fcff !important;
  font-weight: bold;
}
.v-list-item--active .menu-item {
  color: #396FC8; 
}

.v-navigation-drawer {
  display: flex;
  flex-direction: column;
  height: 100vh;     
  position: fixed; 
  top: 0;
  left: 0;
}


.v-navigation-drawer .v-list-item:hover {
  background-color: #def0f2; 
  font-weight: bold;
  color: #396FC8;
}

.v-navigation-drawer .v-list-item .menu-item :hover {
  color: #396FC8; 
}

.v-app-bar {
  background-color: #396FC8; 
}



.profileimage{
  font-size: 40px;
}

.v-main {
  background-color: #f5f5f5; 
  min-height: 100vh; 
}



</style>
