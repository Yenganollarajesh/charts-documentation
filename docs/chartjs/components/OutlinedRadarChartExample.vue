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
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'Outline',
      data: [45, 38, 40, 25, 15, 28, 35],
      borderColor: 'rgb(255, 165, 0)', // Orange color like in the image
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderDash: [5, 5], // Dashed line like in the image
      pointBackgroundColor: 'rgb(255, 165, 0)',
      pointBorderColor: '#fff',
      pointBorderWidth: 1,
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: false // No fill - outlined only
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
          text: 'Outline Radar',
          font: {
            size: 16,
            weight: 'bold'
          },
          padding: 20,
          color: '#333'
        },
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: '#333'
          }
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 70,
          min: 0,
          ticks: {
            stepSize: 10,
            font: {
              size: 12
            },
            color: '#666'
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)',
            lineWidth: 1
          },
          pointLabels: {
            font: {
              size: 13,
              weight: '500'
            },
            color: '#333'
          },
          angleLines: {
            color: 'rgba(0, 0, 0, 0.1)',
            lineWidth: 1
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
