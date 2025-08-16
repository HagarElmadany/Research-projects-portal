<template>
  <v-container fluid>
    <!-- Title -->
    <h2 class="mb-6 font-weight-bold">Overview Metrics</h2>

    <!-- Stats Cards -->
   <v-row>
      <v-col cols="12" md="3" v-for="card in statsCards" :key="card.title">
        <v-card class="stat-card pa-4 gradient-border" outlined>
          <div class="d-flex align-center justify-space-between">
            <div>
              <h3 class="text-h6">{{ card.title }}</h3>
              <h2 class="number-text">{{ card.value }}</h2>
            </div>
            <v-icon size="40" class="gradient-icon">{{ card.icon }}</v-icon>
          </div>
        </v-card>
      </v-col>
    </v-row>


    <!-- Charts & Extra Cards -->
    <v-row class="mt-6">
      <!-- Left Column -->
      <v-col cols="12" md="6">
       <!-- Pie Chart -->
      <v-card class="pa-4 chart-card-tall d-flex flex-column" outlined>
        <h3 class="text-h6 font-weight-bold mb-4">Project Status Overview</h3>
        <div class=" flex-grow-1 d-flex align-center justify-center pb-4">
          <Chart type="pie" :data="pieData" :options="pieOptions" />
        </div>
      </v-card>


        <!-- Faculties (Map/Image) -->
        <v-card class="pa-4 chart-card-small mt-4" outlined>
          <h3 class="text-h6 font-weight-bold mb-2">Faculties</h3>
          <v-img
            src="https://www.mans.edu.eg/images/2020/11/24/map0.jpg"
            class="rounded-lg"
            height="160"
            cover
          />
        </v-card>
      </v-col>

     <!-- Bar Chart -->
      <v-col cols="12" md="6">
        <v-card class="pa-4 chart-card-large" outlined>
          <h3 class="text-h6 font-weight-bold mb-2">Funding Distribution by Category</h3>
          <p class="text-caption mb-4">Allocation of research funds across major academic categories.</p>
          <div class="chart-wrapper">
            <Chart type="bar" :data="barData" :options="barOptions" />
          </div>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Chart } from "vue-chartjs";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);

export default {
  name: "Dashboard",
  components: { Chart },
  data() {
    return {
      statsCards: [
        { title: "Total Projects", value: "1,245", icon: "mdi-clipboard-text" },
        { title: "Publication counts", value: "67", icon: "mdi-book-open-page-variant" },
        { title: "Total Funding", value: "$125M", icon: "mdi-currency-usd" },
        { title: "Total Faculties", value: "35", icon: "mdi-home-city" },
      ],

      // Pie Chart Data
      pieData: {
        labels: ["Ongoing", "Completed", "Suspended"],
        datasets: [
          {
            data: [56, 24, 8],
            backgroundColor: ["#37c8b2", "#396FC8", "#FFD166"],
          },
        ],
      },
      pieOptions: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { 
              position: "bottom", 
              labels: {
                boxWidth: 15,
                padding: 15
              }
            },
          },
        }
        ,

      // Bar Chart Data
      barData: {
        labels: ["Biotechnology", "Social Sciences", "Pure Sciences", "Engineering"],
        datasets: [
          {
            label: "Funding ($M)",
            data: [30, 18, 22, 15],
            backgroundColor: ["#396FC8", "#37c8b2", "#FFD166", "#FF6F61"],
          },
        ],
      },
     barOptions: {
        responsive: true,
        maintainAspectRatio: false,   
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            ticks: { autoSkip: false, maxRotation: 0, minRotation: 0 } 
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.stat-card {
  border-radius: 12px;
  transition: 0.3s;
  position: relative;
  overflow: hidden;
}

.stat-card:hover {
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}
.gradient-border {
  position: relative;
  border-radius: 12px; 
  overflow: hidden;
}

.gradient-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 6px; 
  height: 100%;
  background: linear-gradient(180deg, #396FC8, #37c8b2);
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}


.number-text {
  font-size: 2rem; 
  font-weight: bold;
  color: #396FC8; 
  margin: 0;
}

.gradient-icon {
  background: linear-gradient(135deg, #396FC8, #37c8b2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


/* Pie */
.chart-card-tall {
  height: 360px; 
  margin-bottom: 10px;
  padding-bottom: 10px;
}

/* Map */
.chart-card-small {
  height: 225px; 
}
/* Bar */
.chart-card-large {
  height: 600px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.chart-wrapper {
  flex-grow: 1;
  padding-bottom: 40px; 
}


</style>
