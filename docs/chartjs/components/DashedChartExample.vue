<template>
  <div class="dashed-chart-example">
    <div class="chart-container">
      <canvas ref="chartCanvas" width="600" height="350"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartCanvas = ref(null)
const chart = ref(null)

onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d')
  
  chart.value = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Target',
        data: [15, 18, 20, 22, 25],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderDash: [5, 5],
        borderDashOffset: 0,
        borderWidth: 2,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Dashed Line Chart Example'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
})

onUnmounted(() => {
  if (chart.value) {
    chart.value.destroy()
  }
})
</script>

<style scoped>
.dashed-chart-example {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #e1e5e9;
  border-radius: 6px;
  background: white;
}

.chart-container {
  position: relative;
  height: 350px;
}
</style>
