---
title: Stacked Bar Chart
description: Learn how to create stacked bar charts with Chart.js
---

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import StackedBarChartExample from '../components/StackedBarChartExample.vue'
</script>

# Stacked Bar Chart

A stacked bar chart shows multiple datasets stacked on top of each other, making it easy to see both individual values and totals.

## Basic Stacked Bar Chart

<ChartCodeToggle 
  chart-name="bar"
  :chart-data="{
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Product A',
        data: [45, 52, 38, 47],
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        stack: 'Stack 0'
      },
      {
        label: 'Product B',
        data: [32, 28, 45, 39],
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        stack: 'Stack 0'
      },
      {
        label: 'Product C',
        data: [23, 35, 27, 31],
        backgroundColor: 'rgba(255, 205, 86, 0.8)',
        borderColor: 'rgb(255, 205, 86)',
        borderWidth: 1,
        stack: 'Stack 0'
      }
    ]
  }"
  :chart-options="{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Quarterly Revenue by Product',
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
        callbacks: {
          afterBody: function(context) {
            const total = context.reduce((sum, item) => sum + item.parsed.y, 0)
            return `Total: $${total}K`
          }
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Quarter',
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
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Revenue ($K)',
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
    }
  }"
>
  <template #chart>
    <StackedBarChartExample />
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
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Product A',
      data: [45, 52, 38, 47],
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
      stack: 'Stack 0'
    },
    {
      label: 'Product B',
      data: [32, 28, 45, 39],
      backgroundColor: 'rgba(54, 162, 235, 0.8)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 1,
      stack: 'Stack 0'
    },
    {
      label: 'Product C',
      data: [23, 35, 27, 31],
      backgroundColor: 'rgba(255, 205, 86, 0.8)',
      borderColor: 'rgb(255, 205, 86)',
      borderWidth: 1,
      stack: 'Stack 0'
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Quarterly Revenue by Product',
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
      callbacks: {
        afterBody: function(context) {
          const total = context.reduce((sum, item) => sum + item.parsed.y, 0)
          return `Total: $${total}K`
        }
      }
    }
  },
  scales: {
    x: {
      stacked: true,
      title: {
        display: true,
        text: 'Quarter',
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
      stacked: true,
      beginAtZero: true,
      title: {
        display: true,
        text: 'Revenue ($K)',
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
  }
}
</script>
```
## Key Properties

- **`stack: 'Stack 0'`** - Groups bars into the same stack
- **`x: { stacked: true }`** - Enables horizontal stacking
- **`y: { stacked: true }`** - Enables vertical stacking
- **`tooltip.callbacks.afterBody`** - Shows total for each stack

## Use Cases

- Revenue breakdown by product
- Time allocation by activity
- Budget allocation by department
- Resource usage by category

---

*[← Back to Bar Charts](/chartjs/bar-charts)*
