---
title: Multi-Type Combo Chart
description: Learn how to create multi-type combo charts with Chart.js
---

# Multi-Type Combo Chart

A multi-type combo chart combines three or more different chart types in a single visualization, allowing you to display complex data relationships with multiple scales and chart types.

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import MultiTypeComboChartExample from '../components/MultiTypeComboChartExample.vue'
</script>

## Multi-Type Combo Chart

<ChartCodeToggle 
  chart-name="bar"
  :chart-data="{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        type: 'bar',
        label: 'Volume',
        data: [100, 150, 200, 250, 300],
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        yAxisID: 'y'
      },
      {
        type: 'line',
        label: 'Trend',
        data: [50, 75, 100, 125, 150],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        yAxisID: 'y1'
      },
      {
        type: 'scatter',
        label: 'Outliers',
        data: [{x: 2, y: 180}, {x: 4, y: 320}],
        backgroundColor: 'rgba(255, 205, 86, 0.8)',
        borderColor: 'rgb(255, 205, 86)',
        borderWidth: 2,
        pointRadius: 8,
        pointHoverRadius: 10
      }
    ]
  }"
  :chart-options="{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Multi-Type Data Analysis',
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
            return `${label}: ${value}`
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
          text: 'Volume',
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
      y1: {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'Trend',
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
          drawOnChartArea: false
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  }"
>
  <template #chart>
    <MultiTypeComboChartExample />
  </template>
</ChartCodeToggle>

### Chart Configuration

```vue
<template>
  <ChartComponent 
    chartName="bar"
    :chartData="chartData"
    :chartOptions="chartOptions"
  />
</template>

<script setup>
import ChartComponent from './ChartComponent.vue'

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      type: 'bar',
      label: 'Volume',
      data: [100, 150, 200, 250, 300],
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      yAxisID: 'y'
    },
    {
      type: 'line',
      label: 'Trend',
      data: [50, 75, 100, 125, 150],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      yAxisID: 'y1'
    },
    {
      type: 'scatter',
      label: 'Outliers',
      data: [{x: 2, y: 180}, {x: 4, y: 320}],
      backgroundColor: 'rgba(255, 205, 86, 0.8)',
      borderColor: 'rgb(255, 205, 86)',
      borderWidth: 2,
      pointRadius: 8,
      pointHoverRadius: 10
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Multi-Type Data Analysis',
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
          return `${label}: ${value}`
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
        text: 'Volume',
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
    y1: {
      type: 'linear',
      position: 'right',
      title: {
        display: true,
        text: 'Trend',
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
        drawOnChartArea: false
      }
    }
  },
  interaction: {
    mode: 'nearest',
    axis: 'x',
    intersect: false
  }
}
</script>
```

## Key Properties

- **Multiple chart types** - Bar, line, scatter, etc.
- **Multiple Y-axes** - Different scales for different data
- **`yAxisID`** - Links datasets to specific axes
- **Mixed data types** - Volume, trends, and outliers

## Use Cases

- Complex financial analysis
- Multi-metric performance tracking
- Scientific data visualization
- Business intelligence dashboards
- Research data analysis

---

*[← Back to Combo Charts](/chartjs/combo-charts)*
