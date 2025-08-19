<template>
  <div class="tick-control-example">
    <div class="example-header">
      <h3>Interactive Example: Tick Control</h3>
      <p>See the difference between automatic tick calculation and custom tick control</p>
    </div>
    
    <!-- Automatic Tick Section -->
    <div class="chart-section">
      <div class="section-header">
        <h4>🔄 Automatic Tick Calculation</h4>
        <span class="section-subtitle">Chart.js decides automatically</span>
      </div>
      <div class="chart-container">
        <canvas ref="autoChartCanvas" width="500" height="300"></canvas>
      </div>
      <div class="section-info">
        <div class="info-box">
          <strong>Tick Values:</strong> 0, 10, 20, 30, 40, 50
        </div>
      </div>
      
      <!-- Code for Automatic Chart -->
      <div class="code-block">
        <div class="code-header">
          <span class="code-label">Automatic (Default) Configuration</span>
        </div>
        <pre><code>{{ autoConfig }}</code></pre>
      </div>
    </div>
    
    <!-- Custom Tick Section -->
    <div class="chart-section">
      <div class="section-header">
        <h4>⚙️ Custom Tick Control</h4>
        <span class="section-subtitle">You control the ticks</span>
      </div>
      <div class="chart-container">
        <canvas ref="customChartCanvas" width="500" height="300"></canvas>
      </div>
      <div class="section-info">
        <div class="info-box">
          <strong>Tick Values:</strong> $0K, $25K, $50K, $75K, $100K
        </div>
      </div>
      
      <!-- Code for Custom Chart -->
      <div class="code-block">
        <div class="code-header">
          <span class="code-label">Custom Control Configuration</span>
        </div>
        <pre><code>{{ customConfig }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Chart, registerables } from 'chart.js'

// Register Chart.js components
Chart.register(...registerables)

const autoChartCanvas = ref(null)
const customChartCanvas = ref(null)
const autoChart = ref(null)
const customChart = ref(null)

// Sample data
const sampleData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'Sales',
    data: [25, 45, 65, 35, 85],
    backgroundColor: 'rgba(255, 99, 132, 0.8)',
    borderColor: 'rgb(255, 99, 132)',
    borderWidth: 2
  }]
}

const autoConfig = computed(() => {
  return JSON.stringify({
    type: 'bar',
    data: sampleData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Automatic Tick Calculation'
        }
      },
      scales: {
        y: {
          // No custom tick control - Chart.js decides
          title: {
            display: true,
            text: 'Sales Value'
          }
        }
      }
    }
  }, null, 2)
})

const customConfig = computed(() => {
  return JSON.stringify({
    type: 'bar',
    data: sampleData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Custom Tick Control'
        }
      },
      scales: {
        y: {
          min: 0,           // Start from 0
          max: 100,         // End at 100
          ticks: {
            stepSize: 25,   // Show every 25 units
            callback: function(value) {
              return '$' + value + 'K';  // Custom formatting
            }
          },
          title: {
            display: true,
            text: 'Sales Value ($K)'
          }
        }
      }
    }
  }, null, 2)
})

const createAutoChart = () => {
  if (autoChart.value) {
    autoChart.value.destroy()
  }

  const ctx = autoChartCanvas.value.getContext('2d')
  
  autoChart.value = new Chart(ctx, {
    type: 'bar',
    data: sampleData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Automatic Tick Calculation',
          font: {
            size: 16,
            weight: 'bold'
          },
          padding: 20
        },
        legend: {
          display: false
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
            text: 'Sales Value',
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

const createCustomChart = () => {
  if (customChart.value) {
    customChart.value.destroy()
  }

  const ctx = customChartCanvas.value.getContext('2d')
  
  customChart.value = new Chart(ctx, {
    type: 'bar',
    data: sampleData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Custom Tick Control',
          font: {
            size: 16,
            weight: 'bold'
          },
          padding: 20
        },
        legend: {
          display: false
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
          min: 0,           // Start from 0
          max: 100,         // End at 100
          title: {
            display: true,
            text: 'Sales Value ($K)',
            font: {
              size: 14,
              weight: '600'
            }
          },
          ticks: {
            stepSize: 25,   // Show every 25 units
            font: {
              size: 13
            },
            callback: function(value) {
              return '$' + value + 'K';  // Custom formatting
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
  createAutoChart()
  createCustomChart()
})

onUnmounted(() => {
  if (autoChart.value) {
    autoChart.value.destroy()
  }
  if (customChart.value) {
    customChart.value.destroy()
  }
})
</script>

<style scoped>
.tick-control-example {
  margin: 40px 0;
  padding: 30px;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}

.example-header {
  text-align: center;
  margin-bottom: 30px;
}

.example-header h3 {
  margin: 0 0 10px 0;
  color: var(--vp-c-text-1);
  font-size: 20px;
  font-weight: 600;
}

.example-header p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.chart-section {
  margin-bottom: 40px;
}

.section-header {
  text-align: center;
  margin-bottom: 25px;
}

.section-header h4 {
  margin: 0 0 8px 0;
  color: var(--vp-c-text-1);
  font-size: 17px;
  font-weight: 600;
}

.section-subtitle {
  font-size: 13px;
  color: var(--vp-c-text-3);
  font-style: italic;
  opacity: 0.8;
}

.chart-container {
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
}

.section-info {
  text-align: center;
}

.info-box {
  font-size: 13px;
  color: var(--vp-c-text-2);
  background: linear-gradient(135deg, var(--vp-c-bg-soft) 0%, var(--vp-c-bg) 100%);
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  font-weight: 500;
  margin-bottom: 20px;
}

/* Code Block Styling */
.code-block {
  margin-top: 25px;
  background: var(--vp-c-bg);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.code-header {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 12px 20px;
  text-align: center;
  border-bottom: 1px solid var(--vp-c-divider);
}

.code-label {
  color: var(--vp-c-text-1);
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.code-block pre {
  background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
  border: none;
  border-radius: 0;
  padding: 25px;
  overflow-x: auto;
  font-size: 12px;
  line-height: 1.6;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
  color: #d4d4d4;
  margin: 0;
  transition: all 0.3s ease;
}

.code-block pre:hover {
  background: linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 100%);
}

.code-block pre code {
  background: transparent;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  border-radius: 0;
}

/* Remove old code section styles */
.code-section {
  display: none;
}

.code-example {
  display: none;
}

.code-comparison {
  display: none;
}

/* Responsive design */
@media (max-width: 768px) {
  .tick-control-example {
    padding: 20px;
    margin: 30px 0;
  }
  
  .chart-section {
    margin-bottom: 30px;
  }
  
  .chart-container {
    height: 280px;
  }
  
  .chart-container canvas {
    height: 250px !important;
    width: 100% !important;
  }
}
</style>
