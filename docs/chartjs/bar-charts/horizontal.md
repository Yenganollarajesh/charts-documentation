---
title: Horizontal Bar Chart
description: Learn how to create horizontal bar charts with Chart.js
---

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import HorizontalBarChartExample from '../components/HorizontalBarChartExample.vue'
</script>

# Horizontal Bar Chart

A horizontal bar chart displays data horizontally, making it easier to read long labels and compare values across categories.

## Basic Horizontal Bar Chart

<ChartCodeToggle 
  chart-name="bar"
  :chart-data="{
    labels: ['Marketing', 'Sales', 'Development', 'Support', 'Design', 'Operations'],
    datasets: [
      {
        label: 'Team Performance',
        data: [85, 92, 78, 88, 95, 82],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)'
        ],
        borderWidth: 2,
        borderRadius: 4
      }
    ]
  }"
  :chart-options="{
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Team Performance Scores',
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
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Performance Score',
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
        title: {
          display: true,
          text: 'Department',
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
    <HorizontalBarChartExample />
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
  labels: ['Marketing', 'Sales', 'Development', 'Support', 'Design', 'Operations'],
  datasets: [
    {
      label: 'Team Performance',
      data: [85, 92, 78, 88, 95, 82],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 205, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)'
      ],
      borderWidth: 2,
      borderRadius: 4
    }
  ]
}

const chartOptions = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Team Performance Scores',
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
      beginAtZero: true,
      max: 100,
      title: {
        display: true,
        text: 'Performance Score',
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
      title: {
        display: true,
        text: 'Department',
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

- **`indexAxis: 'y'`** - Makes the chart horizontal
- **`responsive: true`** - Enables responsive behavior
- **`maintainAspectRatio: false`** - Allows custom sizing
- **`beginAtZero: true`** - X-axis starts from 0
- **`max: 100`** - X-axis ends at 100

## Use Cases

- Team performance comparisons
- Survey results
- Product rankings
- Category comparisons

---

*[← Back to Bar Charts](/chartjs/bar-charts)*
