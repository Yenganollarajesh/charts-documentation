---
title: Dashed Line Chart
description: Learn how to create dashed and dotted line charts with Chart.js
---

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import DashedChartExample from '../components/DashedChartExample.vue'
</script>

# Dashed Line Chart

A dashed line chart uses dashed or dotted lines instead of solid lines. This is great for showing targets, goals, or reference lines that should be visually distinct from actual data.

## Basic Dashed Line Chart

<ChartCodeToggle 
  chart-name="line"
  :chart-data="{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Target',
        data: [15, 18, 20, 22, 25],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderDash: [5, 5],
        borderDashOffset: 0,
        borderWidth: 2,
        fill: false
      }
    ]
  }"
  :chart-options="{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Dashed Line Chart Example'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }"
>
  <template #chart>
    <DashedChartExample />
  </template>
</ChartCodeToggle>

### Chart Configuration

<!-- #### Using the Component -->

```vue
<template>
  <ChartComponent 
    chartName="line"
    :chartData="chartData"
    :chartOptions="chartOptions"
  />
</template>

<script setup>
import ChartComponent from './ChartComponent.vue'

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'Target',
    data: [15, 18, 20, 22, 25],
    borderColor: 'rgb(54, 162, 235)',
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderDash: [5, 5],
    borderDashOffset: 0,
    borderWidth: 2,
    fill: false
  }]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Dashed Line Chart Example'
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
</script>
```
## Key Properties

- **`borderDash: [5, 5]`** - Creates 5px dash, 5px gap pattern
- **`borderDash: [10, 5, 2, 5]`** - Creates complex dash pattern
- **`borderDashOffset: 0`** - Controls where the dash pattern starts
- **`borderDashOffset: 5`** - Shifts the dash pattern

## Use Cases

- Target/goal lines
- Reference lines
- Forecast data
- Threshold indicators

---

*[← Back to Line Charts](/chartjs/line-charts)*
