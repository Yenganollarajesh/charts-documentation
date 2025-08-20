---
title: Multi-Dataset Bar Chart
description: Learn how to create multi-dataset bar charts with Chart.js
---

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import MultiDatasetBarChartExample from '../components/MultiDatasetBarChartExample.vue'
</script>

# Multi-Dataset Bar Chart

A multi-dataset bar chart combines different chart types in a single visualization, allowing you to show relationships between different types of data.

## Basic Multi-Dataset Bar Chart

<ChartCodeToggle 
  chart-name="bar"
  :chart-data="{
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        type: 'bar',
        label: 'Actual Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
        borderRadius: 4,
        order: 2
      },
      {
        type: 'line',
        label: 'Sales Target',
        data: [70, 65, 75, 80, 70, 75],
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 3,
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        order: 1
      },
      {
        type: 'bar',
        label: 'Previous Year',
        data: [45, 52, 65, 70, 48, 50],
        backgroundColor: 'rgba(255, 205, 86, 0.6)',
        borderColor: 'rgb(255, 205, 86)',
        borderWidth: 2,
        borderRadius: 4,
        order: 3
      }
    ]
  }"
  :chart-options="{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Sales Performance: Actual vs Target vs Previous Year',
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
        intersect: false
      }
    },
    scales: {
      x: {
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
          text: 'Sales Amount ($K)',
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
    },
    interaction: {
      mode: 'index',
      intersect: false
    }
  }"
>
  <template #chart>
    <MultiDatasetBarChartExample />
  </template>
</ChartCodeToggle>

### Chart Configuration

<!-- #### Using the Component -->

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
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      type: 'bar',
      label: 'Actual Sales',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: 'rgba(75, 192, 192, 0.8)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 2,
      borderRadius: 4,
      order: 2
    },
    {
      type: 'line',
      label: 'Sales Target',
      data: [70, 65, 75, 80, 70, 75],
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 3,
      backgroundColor: 'rgba(255, 99, 132, 0.1)',
      fill: true,
      tension: 0.4,
      pointRadius: 6,
      pointHoverRadius: 8,
      order: 1
    },
    {
      type: 'bar',
      label: 'Previous Year',
      data: [45, 52, 65, 70, 48, 50],
      backgroundColor: 'rgba(255, 205, 86, 0.6)',
      borderColor: 'rgb(255, 205, 86)',
      borderWidth: 2,
      borderRadius: 4,
      order: 3
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Sales Performance: Actual vs Target vs Previous Year',
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
      intersect: false
    }
  },
  scales: {
    x: {
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
        text: 'Sales Amount ($K)',
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
  },
  interaction: {
    mode: 'index',
    intersect: false
  }
}
</script>
```

## Key Properties

- **Mixed chart types** - Combine bars, lines, and other types
- **`order` property** - Controls rendering order (1 = first, 3 = last)
- **Different visualizations** - Bars for actual data, lines for targets
- **`type` property** - Specifies chart type for each dataset
- **`interaction.mode: 'index'`** - Enhanced tooltip behavior

## Use Cases

- Actual vs target comparisons
- Performance tracking
- Budget vs actual spending
- Sales forecasting

---

*[← Back to Bar Charts](/chartjs/bar-charts)*
