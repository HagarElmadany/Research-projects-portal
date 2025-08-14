<template>
    <v-container>
      <h1>University Admin Dashboard</h1>
      <v-row>
        <v-col cols="12" sm="4">
          <v-card class="pa-4" outlined>
            <h3>Total Projects</h3>
            <p>{{ stats.totalProjects }}</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="pa-4" outlined>
            <h3>Total Funding</h3>
            <p>{{ stats.totalFunding }} EGP</p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="pa-4" outlined>
            <h3>Publications</h3>
            <p>{{ stats.publications }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import UniversityAdminLayout from '@/layouts/UniversityAdminLayout.vue'

export default {
  name: 'UniversityAdminDashboard',
  components: { UniversityAdminLayout },
  data() {
    return {
      stats: {
        totalProjects: 15,
        totalFunding: "1,200,000",
        publications: 42
      }
    }
  }
}
</script>
