<template>
  <div class="chart-container">
    <canvas ref="chartCanvas" width="500" height="300"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartCanvas = ref(null)
const chart = ref(null)

const sampleData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales Volume (Bar)',
      data: [120, 150, 180, 200, 220, 250],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      type: 'bar',
      yAxisID: 'y'
    },
    {
      label: 'Revenue % (Line)',
      data: [15, 25, 35, 45, 55, 65],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      type: 'line',
      yAxisID: 'y1'
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
          text: 'Dual Y-Axis Combo Chart',
          font: {
            size: 16,
            weight: 'bold'
          },
          padding: 20
        },
        legend: {
          display: true,
          position: 'top'
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Month',
            font: {
              size: 14,
              weight: '600'
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Sales Volume',
            font: {
              size: 14,
              weight: '600'
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Revenue %',
            font: {
              size: 14,
              weight: '600'
            }
          },
          grid: {
            drawOnChartArea: false
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
