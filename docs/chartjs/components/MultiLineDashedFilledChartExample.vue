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
      label: 'Revenue',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.1)',
      borderWidth: 3,
      borderDash: [5, 5], // Dashed line
      fill: true, // Filled area
      tension: 0.4
    },
    {
      label: 'Profit',
      data: [28, 48, 40, 19, 86, 27],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.1)',
      borderWidth: 3,
    //   borderDash: [10, 5], // Different dash pattern
      fill: false, // Filled area
      tension: 0.4
    },
    {
      label: 'Expenses',
      data: [45, 25, 16, 36, 67, 18],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.1)',
      borderWidth: 3,
      borderDash: [15, 3], // Another dash pattern
      fill: true, // Filled area
      tension: 0.4
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
          text: 'Multi-Line Dashed & Filled Chart',
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
          ticks: {
            font: {
              size: 13
            }
          }
        },
        y: {
          title: {
            display: true,
            text: 'Value ($K)',
            font: {
              size: 14,
              weight: '600'
            }
          },
          ticks: {
            font: {
              size: 13
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

<style scoped>
/* .chart-container {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  background: linear-gradient(135deg, var(--vp-c-bg) 0%, var(--vp-c-bg-soft) 100%);
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.chart-container:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.chart-container canvas {
  max-width: 100%;
  height: 280px !important;
  width: 500px !important;
  border-radius: 8px;
} */
</style>
