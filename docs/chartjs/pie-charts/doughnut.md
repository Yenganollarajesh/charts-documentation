---
title: Doughnut Chart
description: Learn how to create doughnut charts with Chart.js
---

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import DoughnutChartExample from '../components/DoughnutChartExample.vue'
</script>

# Doughnut Chart

A doughnut chart is a pie chart with a hollow center, allowing you to display additional information in the center or create a more modern visual appearance.

## Basic Doughnut Chart

<ChartCodeToggle 
  chart-name="doughnut"
  :chart-data="{
    labels: ['Desktop', 'Mobile', 'Tablet', 'Other'],
    datasets: [{
      label: 'Device Usage',
      data: [65, 25, 8, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 205, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)'
      ],
      borderWidth: 3,
      hoverOffset: 10
    }]
  }"
  :chart-options="{
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      title: {
        display: true,
        text: 'Device Usage Distribution',
        font: {
          size: 18,
          weight: 'bold'
        },
        padding: 20
      },
      legend: {
        display: true,
        position: 'right',
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
            const label = context.label || ''
            const value = context.parsed
            const total = context.dataset.data.reduce((a, b) => a + b, 0)
            const percentage = ((value / total) * 100).toFixed(1)
            return `${label}: ${value} (${percentage}%)`
          }
        }
      }
    }
  }"
>
  <template #chart>
    <DoughnutChartExample />
  </template>
</ChartCodeToggle>

### Chart Configuration

<!-- #### Using the Component -->

```vue
<template>
  <ChartComponent 
    chartName="doughnut"
    :chartData="chartData"
    :chartOptions="chartOptions"
  />
</template>

<script setup>
import ChartComponent from './ChartComponent.vue'

const chartData = {
  labels: ['Desktop', 'Mobile', 'Tablet', 'Other'],
  datasets: [{
    label: 'Device Usage',
    data: [65, 25, 8, 2],
    backgroundColor: [
      'rgba(255, 99, 132, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(255, 205, 86, 0.8)',
      'rgba(75, 192, 192, 0.8)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)'
    ],
    borderWidth: 3,
    hoverOffset: 10
  }]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '60%',
  plugins: {
    title: {
      display: true,
      text: 'Device Usage Distribution',
      font: {
        size: 18,
        weight: 'bold'
      },
      padding: 20
    },
    legend: {
      display: true,
      position: 'right',
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
          const label = context.label || ''
          const value = context.parsed
          const total = context.dataset.data.reduce((a, b) => a + b, 0)
          const percentage = ((value / total) * 100).toFixed(1)
          return `${label}: ${value} (${percentage}%)`
        }
      }
    }
  }
}
</script>
```

## Key Properties

- **`type: 'doughnut'`** - Creates the doughnut chart
- **`cutout: '60%'`** - Controls the size of the center hole
- **`borderWidth`** - Sets the thickness of slice borders
- **`hoverOffset`** - Controls slice separation on hover
- **Enhanced tooltips** - Shows values and percentages
- **Right-side legend** - Clean legend positioning

## Use Cases

- Budget allocation visualization
- Survey response breakdowns
- Market share analysis
- Resource distribution
- Progress tracking with center metrics

---

*[← Back to Pie Charts](/chartjs/pie-charts)*
