---
title: Grouped Bar Chart
description: Learn how to create grouped bar charts with Chart.js
---

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import GroupedBarChartExample from '../components/GroupedBarChartExample.vue'
</script>

# Grouped Bar Chart

A grouped bar chart displays multiple datasets side by side, making it easy to compare values across different categories and groups.

## Basic Grouped Bar Chart

<ChartCodeToggle 
  chart-name="bar"
  :chart-data="{
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'North Region',
        data: [65, 59, 80, 81],
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        borderRadius: 4
      },
      {
        label: 'South Region',
        data: [28, 48, 40, 19],
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        borderRadius: 4
      },
      {
        label: 'East Region',
        data: [45, 25, 16, 36],
        backgroundColor: 'rgba(255, 205, 86, 0.8)',
        borderColor: 'rgb(255, 205, 86)',
        borderWidth: 2,
        borderRadius: 4
      }
    ]
  }"
  :chart-options="{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Quarterly Sales by Region',
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
      }
    },
    scales: {
      x: {
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
        beginAtZero: true,
        title: {
          display: true,
          text: 'Sales ($K)',
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
    <GroupedBarChartExample />
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
      label: 'North Region',
      data: [65, 59, 80, 81],
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      borderRadius: 4
    },
    {
      label: 'South Region',
      data: [28, 48, 40, 19],
      backgroundColor: 'rgba(54, 162, 235, 0.8)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      borderRadius: 4
    },
    {
      label: 'East Region',
      data: [45, 25, 16, 36],
      backgroundColor: 'rgba(255, 205, 86, 0.8)',
      borderColor: 'rgb(255, 205, 86)',
      borderWidth: 2,
      borderRadius: 4
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Quarterly Sales by Region',
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
    }
  },
  scales: {
    x: {
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
      beginAtZero: true,
      title: {
        display: true,
        text: 'Sales ($K)',
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

- **Multiple datasets** - Each dataset creates a group of bars
- **Different colors** - Each group has distinct colors
- **Side-by-side display** - Bars are grouped by category
- **`borderRadius`** - Rounded corners for modern look
- **`borderWidth`** - Consistent border thickness

## Use Cases

- Regional performance comparison
- Product category analysis
- Department budget comparison
- Time period comparisons

---

*[← Back to Bar Charts](/chartjs/bar-charts)*
