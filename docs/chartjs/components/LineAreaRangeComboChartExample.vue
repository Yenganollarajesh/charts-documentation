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
      label: 'Upper Range (Area)',
      data: [85, 95, 105, 115, 125, 135],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 0.5)',
      borderWidth: 1,
      fill: true,
      tension: 0.4,
      type: 'line',
      pointRadius: 0
    },
    {
      label: 'Lower Range (Area)',
      data: [45, 55, 65, 75, 85, 95],
      backgroundColor: 'rgba(255, 99, 132, 0.1)',
      borderColor: 'rgba(255, 99, 132, 0.3)',
      borderWidth: 1,
      fill: true,
      tension: 0.4,
      type: 'line',
      pointRadius: 0
    },
    {
      label: 'Average (Line)',
      data: [65, 75, 85, 95, 105, 115],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.1)',
      borderWidth: 3,
      fill: false,
      tension: 0.4,
      type: 'line',
      pointRadius: 6,
      pointHoverRadius: 8
    }
  ]
}

const createChart = () => {
  if (chart.value) {
    chart.value.destroy()
  }

  const ctx = chartCanvas.value.getContext('2d')
  
  chart.value = new Chart(ctx, {
    type: 'line',
    data: sampleData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Line + Area Range Combo Chart',
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
          title: {
            display: true,
            text: 'Values',
            font: {
              size: 14,
              weight: '600'
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
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
