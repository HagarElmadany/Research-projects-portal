<template>
  <v-app-bar app color="white" elevation="2">
    <v-container class="d-flex align-center justify-space-between">
      <!-- Logo -->
      <div class="d-flex align-center">
        <img src="@/assets/logo.png" alt="logo" height="50" class="mr-3" />
        <h3 class="text-primary font-weight-bold">Research Project Portal</h3>
      </div>

      <!-- Links -->
      <v-row class="d-none d-md-flex" dense>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/projects">Projects</v-btn>
        <v-btn text to="/news">News</v-btn>
        <v-btn text>About</v-btn>
        <v-btn text>Contact</v-btn>
      </v-row>

      <!-- Right side -->
      <div class="d-flex align-center">
        <v-btn outlined color="primary" class="mr-3">Login</v-btn>
        <v-select
          :items="['English', 'عربي']"
          density="compact"
          variant="outlined"
          hide-details
          style="max-width: 120px"
        />
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup>
</script>
