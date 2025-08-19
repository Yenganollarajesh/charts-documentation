<template>
  <div class="bar-chart-example">
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

// Sample data for bar chart
const sampleData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    label: 'Sales',
    data: [65, 59, 80, 81, 56, 55],
    backgroundColor: [
      'rgba(255, 99, 132, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(255, 205, 86, 0.8)',
      'rgba(75, 192, 192, 0.8)',
      'rgba(153, 102, 255, 0.8)',
      'rgba(255, 159, 64, 0.8)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(153, 102, 255)',
      'rgb(255, 159, 64)'
    ],
    borderWidth: 2,
    borderRadius: 4,
    borderSkipped: false
  }]
}

const chartConfig = computed(() => {
  return JSON.stringify({
    type: 'bar',
    data: sampleData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Monthly Sales Performance',
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
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Month',
            font: {
              size: 14,
              weight: 'bold'
            }
          },
          ticks: {
            font: {
              size: 12
            },
            padding: 10
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Sales Amount ($)',
            font: {
              size: 14,
              weight: 'bold'
            }
          },
          ticks: {
            font: {
              size: 12
            },
            padding: 10,
            callback: function(value) {
              return '$' + value + 'K'
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        }
      },
      layout: {
        padding: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
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
    type: 'bar',
    data: sampleData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Monthly Sales Performance',
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
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Month',
            font: {
              size: 14,
              weight: 'bold'
            }
          },
          ticks: {
            font: {
              size: 12
            },
            padding: 10
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Sales Amount ($)',
            font: {
              size: 14,
              weight: 'bold'
            }
          },
          ticks: {
            font: {
              size: 12
            },
            padding: 10,
            callback: function(value) {
              return '$' + value + 'K'
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        }
      },
      layout: {
        padding: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
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
