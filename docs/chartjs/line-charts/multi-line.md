---
title: Multi-Line Chart
description: Learn how to create multi-line charts with multiple datasets using Chart.js
---

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import MultiLineChartExample from '../components/MultiLineChartExample.vue'
</script>

# Multi-Line Chart

A multi-line chart displays multiple datasets on the same chart, making it easy to compare different metrics or categories over time.

## Basic Multi-Line Chart

<ChartCodeToggle 
  chart-name="line"
  :chart-data="{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.4
      },
      {
        label: 'Expenses',
        data: [8, 15, 7, 12, 9],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        tension: 0.4
      }
    ]
  }"
  :chart-options="{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Multi-Line Chart Example'
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
    <MultiLineChartExample />
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
  datasets: [
    {
      label: 'Sales',
      data: [12, 19, 3, 5, 2],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 2,
      tension: 0.4
    },
    {
      label: 'Expenses',
      data: [8, 15, 7, 12, 9],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderWidth: 2,
      tension: 0.4
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Multi-Line Chart Example'
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

- **Multiple datasets** - Each with its own label, color, and data
- **Different colors** - Ensure datasets are visually distinct
- **Legend** - Automatically generated for all datasets
- **Interactive** - Hover over any line to see its data

## Use Cases

- Revenue vs. Expenses comparison
- Multiple product performance
- Regional data comparison
- Before/after analysis

---

*[← Back to Line Charts](/chartjs/line-charts)*
