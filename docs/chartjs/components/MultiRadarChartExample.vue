<template>
  <div class="multi-radar-chart-example">
    <div class="chart-container">
      <canvas ref="chartCanvas" width="600" height="350"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Chart, registerables } from 'chart.js'

// Register Chart.js components
Chart.register(...registerables)

const chartCanvas = ref(null)
const chart = ref(null)

// Sample data for multi-radar chart
const sampleData = {
  labels: ['Design', 'Usability', 'Performance', 'Security', 'Scalability', 'Support'],
  datasets: [
    {
      label: 'Product A',
      data: [90, 85, 80, 95, 75, 88],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
      pointRadius: 5,
      pointHoverRadius: 7
    },
    {
      label: 'Product B',
      data: [75, 90, 85, 80, 90, 82],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
      pointRadius: 5,
      pointHoverRadius: 7
    },
    {
      label: 'Product C',
      data: [85, 80, 90, 85, 80, 85],
      backgroundColor: 'rgba(255, 205, 86, 0.2)',
      borderColor: 'rgb(255, 205, 86)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(255, 205, 86)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 205, 86)',
      pointRadius: 5,
      pointHoverRadius: 7
    }
  ]
}

const createChart = () => {
  if (chart.value) {
    chart.value.destroy()
  }

  const ctx = chartCanvas.value.getContext('2d')
  
  chart.value = new Chart(ctx, {
    type: 'radar',
    data: sampleData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Product Comparison',
          font: {
            size: 18,
            weight: 'bold'
          },
          padding: 20
        },
        legend: {
          display: true,
          position: 'top',
          labels: {
            padding: 15,
            font: {
              size: 14
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.dataset.label || ''
              const value = context.parsed.r
              return `${label}: ${value}`
            }
          }
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
            font: {
              size: 12
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          },
          pointLabels: {
            font: {
              size: 14,
              weight: 'bold'
            }
          }
        }
      }
    }
  })
}

onMounted(() => {
  createChart()
})

onUnmounted(() => {
  if (chart.value) {
    chart.value.destroy()
  }
})
</script>

<style scoped>
/* No custom styling - using global CSS */
</style>
