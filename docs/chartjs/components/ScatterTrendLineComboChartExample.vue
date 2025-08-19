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
  datasets: [
    {
      label: 'Data Points (Scatter)',
      data: [
        { x: 10, y: 20 },
        { x: 15, y: 25 },
        { x: 20, y: 30 },
        { x: 25, y: 35 },
        { x: 30, y: 40 },
        { x: 35, y: 45 },
        { x: 40, y: 50 },
        { x: 45, y: 55 },
        { x: 50, y: 60 },
        { x: 55, y: 65 }
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 8,
      type: 'scatter'
    },
    {
      label: 'Trend Line',
      data: [
        { x: 10, y: 20 },
        { x: 15, y: 25 },
        { x: 20, y: 30 },
        { x: 25, y: 35 },
        { x: 30, y: 40 },
        { x: 35, y: 45 },
        { x: 40, y: 50 },
        { x: 45, y: 55 },
        { x: 50, y: 60 },
        { x: 55, y: 65 }
      ],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.1)',
      borderWidth: 3,
      fill: false,
      tension: 0.1,
      type: 'line',
      pointRadius: 0,
      showLine: true
    }
  ]
}

const createChart = () => {
  if (chart.value) {
    chart.value.destroy()
  }

  const ctx = chartCanvas.value.getContext('2d')
  
  chart.value = new Chart(ctx, {
    type: 'scatter',
    data: sampleData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Scatter + Trend Line Combo Chart',
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
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text: 'X Axis',
            font: {
              size: 14,
              weight: '600'
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
            text: 'Y Axis',
            font: {
              size: 14,
              weight: '600'
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
