<template>
  <div class="multi-type-combo-chart-example">
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

// Sample data for multi-type combo chart
const sampleData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      type: 'bar',
      label: 'Website Traffic',
      data: [1200, 1400, 1600, 1800, 2000, 2200],
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      yAxisID: 'y'
    },
    {
      type: 'line',
      label: 'Conversion Rate (%)',
      data: [2.5, 3.0, 3.5, 4.0, 4.5, 5.0],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 3,
      fill: false,
      tension: 0.4,
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
      pointRadius: 6,
      pointHoverRadius: 8,
      yAxisID: 'y1'
    },
    {
      type: 'scatter',
      label: 'Peak Events',
      data: [
        {x: 1, y: 1500},
        {x: 3, y: 1900},
        {x: 5, y: 2300}
      ],
      backgroundColor: 'rgba(255, 205, 86, 0.8)',
      borderColor: 'rgb(255, 205, 86)',
      pointRadius: 8,
      pointHoverRadius: 10,
      yAxisID: 'y'
    }
  ]
}

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
          text: 'Website Analytics - Traffic, Conversion & Events',
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
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function(context) {
              const label = context.dataset.label || ''
              const value = context.parsed.y
              if (context.dataset.type === 'line') {
                return `${label}: ${value}%`
              } else if (context.dataset.type === 'scatter') {
                return `${label}: ${value} visitors`
              }
              return `${label}: ${value.toLocaleString()} visitors`
            }
          }
        }
      },
      scales: {
        x: {
          type: 'category',
          position: 'bottom',
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
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        },
        y: {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Website Traffic (visitors)',
            font: {
              size: 14,
              weight: 'bold'
            }
          },
          ticks: {
            font: {
              size: 12
            },
            callback: function(value) {
              return value.toLocaleString()
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        },
        y1: {
          type: 'linear',
          position: 'right',
          title: {
            display: true,
            text: 'Conversion Rate (%)',
            font: {
              size: 14,
              weight: 'bold'
            }
          },
          ticks: {
            font: {
              size: 12
            },
            callback: function(value) {
              return value + '%'
            }
          },
          grid: {
            drawOnChartArea: false
          },
          min: 0,
          max: 6
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
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
