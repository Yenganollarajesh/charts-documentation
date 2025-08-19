<template>
  <div class="grouped-bar-chart-example">
    <div class="chart-container">
      <canvas ref="chartCanvas" width="600" height="350"></canvas>
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

// Sample data for grouped bar chart
const sampleData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'North Region',
      data: [65, 59, 80, 81],
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      borderRadius: 4
    },
    {
      label: 'South Region',
      data: [28, 48, 40, 19],
      backgroundColor: 'rgba(54, 162, 235, 0.8)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      borderRadius: 4
    },
    {
      label: 'East Region',
      data: [45, 25, 16, 36],
      backgroundColor: 'rgba(255, 205, 86, 0.8)',
      borderColor: 'rgb(255, 205, 86)',
      borderWidth: 2,
      borderRadius: 4
    }
  ]
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
          text: 'Quarterly Sales by Region',
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
            text: 'Quarter',
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
            text: 'Sales ($K)',
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
          text: 'Quarterly Sales by Region',
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
            text: 'Quarter',
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
            text: 'Sales ($K)',
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
