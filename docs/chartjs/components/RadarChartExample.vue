<template>
  <div class="radar-chart-example">
    <div class="chart-container">
      <canvas ref="chartCanvas" width="600" height="350"></canvas>
    </div>
    <hr class="chart-separator">
    <div class="chart-info">
      <h4>Chart Configuration</h4>
      <pre><code>{{ chartConfig }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Chart, registerables } from 'chart.js'

// Register Chart.js components
Chart.register(...registerables)

const chartCanvas = ref(null)
const chart = ref(null)

// Sample data for radar chart
const sampleData = {
  labels: ['Speed', 'Handling', 'Safety', 'Comfort', 'Efficiency', 'Reliability'],
  datasets: [
    {
      label: 'Car A',
      data: [80, 75, 90, 85, 70, 88],
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
      label: 'Car B',
      data: [70, 85, 75, 80, 90, 82],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
      pointRadius: 5,
      pointHoverRadius: 7
    }
  ]
}

const chartConfig = computed(() => {
  return JSON.stringify({
    type: 'radar',
    data: sampleData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Car Performance Comparison',
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
  }, null, 2)
})

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
          text: 'Car Performance Comparison',
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
