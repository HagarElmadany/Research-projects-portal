<template>
  <v-container fluid>
    <!-- Page Header -->
    <v-row class="mb-6">
      <v-col>
        <h1 class="text-h4 font-weight-bold">
          {{ universityName }} Dashboard
        </h1>
        <p class="text-subtitle-1">
          Welcome back, {{ adminName }} 👋
        </p>
      </v-col>
    </v-row>

    <!-- Stats Cards -->
    <v-row>
      <v-col cols="12" md="4" v-for="(stat, i) in stats" :key="i">
        <v-card outlined>
          <v-card-title class="d-flex align-center">
            <v-icon color="primary" class="mr-2">{{ stat.icon }}</v-icon>
            {{ stat.label }}
          </v-card-title>
          <v-card-text class="text-h5 font-weight-bold">
            {{ stat.value }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Charts Section -->
    <v-row class="mt-6">
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title>Funding Distribution by Category</v-card-title>
          <v-card-text>
            <funding-chart :data="fundingData" />
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title>Projects by Status</v-card-title>
          <v-card-text>
            <projects-status-chart :data="projectStatusData" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Quick Actions -->
    <v-row class="mt-6">
      <v-col cols="12">
        <v-card outlined>
          <v-card-title>Quick Actions</v-card-title>
          <v-card-text>
            <v-btn color="primary" class="mr-3" @click="goTo('projects')">
              Add New Project
            </v-btn>
            <v-btn color="secondary" class="mr-3" @click="goTo('researchers')">
              Add Researcher
            </v-btn>
            <v-btn color="success" @click="goTo('departments')">
              Add Faculty / Department
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import FundingChart from '@/components/charts/FundingChart.vue'
import ProjectsStatusChart from '@/components/charts/ProjectsStatusChart.vue'

const universityName = "Cairo University"
const adminName = "Dr. Ahmed"

const stats = [
  { label: "Total Projects", value: 124, icon: "mdi-clipboard-list" },
  { label: "Total Funding", value: "15M EGP", icon: "mdi-cash" },
  { label: "Published Papers", value: 342, icon: "mdi-file-document" },
]

const fundingData = [
  { category: "Medical", value: 5_000_000 },
  { category: "Engineering", value: 4_000_000 },
  { category: "Science", value: 3_500_000 },
]

const projectStatusData = [
  { status: "Ongoing", value: 70 },
  { status: "Completed", value: 40 },
  { status: "Suspended", value: 14 },
]

const goTo = (routeName) => {
  console.log("Navigate to:", routeName)
}
</script>
