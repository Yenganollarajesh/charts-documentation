---
title: Multi-Radar Chart
description: Learn how to create multi-radar charts with Chart.js
---

# Multi-Radar Chart

A multi-radar chart displays multiple datasets on the same radar chart, allowing you to compare different entities across the same set of variables.

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import MultiRadarChartExample from '../components/MultiRadarChartExample.vue'
</script>

## Multi-Radar Chart

<ChartCodeToggle 
  chart-name="radar"
  :chart-data="{
    labels: ['Design', 'Usability', 'Performance', 'Security', 'Scalability', 'Support'],
    datasets: [
      {
        label: 'Product A',
        data: [90, 85, 80, 95, 75, 88],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
        pointRadius: 5,
        pointHoverRadius: 7
      },
      {
        label: 'Product B',
        data: [75, 90, 85, 80, 90, 82],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
        pointRadius: 5,
        pointHoverRadius: 7
      },
      {
        label: 'Product C',
        data: [85, 80, 90, 85, 80, 85],
        backgroundColor: 'rgba(255, 205, 86, 0.2)',
        borderColor: 'rgb(255, 205, 86)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(255, 205, 86)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 205, 86)',
        pointRadius: 5,
        pointHoverRadius: 7
      }
    ]
  }"
  :chart-options="{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Product Comparison',
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
          label: function(context) {
            const label = context.dataset.label || ''
            const value = context.parsed.r
            return `${label}: ${value}`
          }
        }
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          font: {
            size: 12
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        pointLabels: {
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      }
    }
  }"
>
  <template #chart>
    <MultiRadarChartExample />
  </template>
</ChartCodeToggle>

### Chart Configuration

```vue
<template>
  <ChartComponent 
    chartName="radar"
    :chartData="chartData"
    :chartOptions="chartOptions"
  />
</template>

<script setup>
import ChartComponent from './ChartComponent.vue'

const chartData = {
  labels: ['Design', 'Usability', 'Performance', 'Security', 'Scalability', 'Support'],
  datasets: [
    {
      label: 'Product A',
      data: [90, 85, 80, 95, 75, 88],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
      pointRadius: 5,
      pointHoverRadius: 7
    },
    {
      label: 'Product B',
      data: [75, 90, 85, 80, 90, 82],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
      pointRadius: 5,
      pointHoverRadius: 7
    },
    {
      label: 'Product C',
      data: [85, 80, 90, 85, 80, 85],
      backgroundColor: 'rgba(255, 205, 86, 0.2)',
      borderColor: 'rgb(255, 205, 86)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(255, 205, 86)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 205, 86)',
      pointRadius: 5,
      pointHoverRadius: 7
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Product Comparison',
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
        label: function(context) {
          const label = context.dataset.label || ''
          const value = context.parsed.r
          return `${label}: ${value}`
        }
      }
    }
  },
  scales: {
    r: {
      beginAtZero: true,
      max: 100,
      ticks: {
        stepSize: 20,
        font: {
          size: 12
        }
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)'
      },
      pointLabels: {
        font: {
          size: 14,
          weight: 'bold'
        }
      }
    }
  }
}
</script>
```

## Key Properties

- **Multiple datasets** - Each dataset represents a different entity
- **Different colors** - Each entity has distinct colors
- **Overlapping areas** - Shows comparison clearly
- **Legend support** - Clear identification of entities

## Use Cases

- Product comparison across features
- Team performance evaluation
- Competitor analysis
- Before/after comparisons
- Multi-location performance

---

*[← Back to Radar Charts](/chartjs/radar-charts)*
