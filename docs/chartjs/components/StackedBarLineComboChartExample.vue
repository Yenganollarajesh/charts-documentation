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
      label: 'Product A (Stacked)',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
      type: 'bar',
      stack: 'stack1'
    },
    {
      label: 'Product B (Stacked)',
      data: [8, 15, 7, 12, 9, 11],
      backgroundColor: 'rgba(54, 162, 235, 0.8)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 1,
      type: 'bar',
      stack: 'stack1'
    },
    {
      label: 'Total Revenue (Line)',
      data: [20, 34, 10, 17, 11, 14],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.1)',
      borderWidth: 3,
      fill: true,
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
    type: 'bar',
    data: sampleData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Stacked Bar + Line Combo Chart',
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
            text: 'Sales Units',
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
