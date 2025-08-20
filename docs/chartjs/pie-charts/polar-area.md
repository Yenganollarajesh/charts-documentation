---
title: Polar Area Chart
description: Learn how to create polar area charts with Chart.js
---

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import PolarAreaChartExample from '../components/PolarAreaChartExample.vue'
</script>

# Polar Area Chart

A polar area chart combines the features of pie charts and area charts, displaying data as sectors with areas proportional to the values. This chart type is excellent for showing multiple variables with different scales.

## Basic Polar Area Chart

<ChartCodeToggle 
  chart-name="polarArea"
  :chart-data="{
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [{
      label: 'Dataset 1',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(255, 205, 86, 0.8)',
        'rgba(201, 203, 207, 0.8)',
        'rgba(54, 162, 235, 0.8)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ],
      borderWidth: 2
    }]
  }"
  :chart-options="{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Polar Area Chart Example',
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
            return `${label}: ${value}`
          }
        }
      }
    }
  }"
>
  <template #chart>
    <PolarAreaChartExample />
  </template>
</ChartCodeToggle>

### Chart Configuration

<!-- #### Using the Component -->

```vue
<template>
  <ChartComponent 
    chartName="polarArea"
    :chartData="chartData"
    :chartOptions="chartOptions"
  />
</template>

<script setup>
import ChartComponent from './ChartComponent.vue'

const chartData = {
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
  datasets: [{
    label: 'Dataset 1',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      'rgba(255, 99, 132, 0.8)',
      'rgba(75, 192, 192, 0.8)',
      'rgba(255, 205, 86, 0.8)',
      'rgba(201, 203, 207, 0.8)',
      'rgba(54, 162, 235, 0.8)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ],
    borderWidth: 2
  }]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Polar Area Chart Example',
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
          return `${label}: ${value}`
        }
      }
    }
  }
}
</script>
```

## Key Properties

- **`type: 'polarArea'`** - Creates the polar area chart
- **`data`** - Values determine the area of each sector
- **`backgroundColor`** - Sets the fill color of sectors
- **`borderColor`** - Sets the border color of sectors
- **`borderWidth`** - Controls border thickness
- **`legend.position: 'right'`** - Legend positioned on the right side
- **Custom tooltip callbacks** - Enhanced label display

## Use Cases

- Performance metrics across multiple dimensions
- Survey results with multiple variables
- Resource allocation visualization
- Multi-factor analysis
- Comparative data representation

---

*[← Back to Pie Charts](/chartjs/pie-charts)*
