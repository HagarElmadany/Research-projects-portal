<template>
  <canvas ref="chart"></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(PieController, ArcElement, Tooltip, Legend)

const props = defineProps({ data: Array })
const chart = ref(null)

onMounted(() => {
  new Chart(chart.value, {
    type: 'pie',
    data: {
      labels: props.data.map(d => d.category),
      datasets: [{
        data: props.data.map(d => d.value),
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
      }]
    }
  })
})
</script>
