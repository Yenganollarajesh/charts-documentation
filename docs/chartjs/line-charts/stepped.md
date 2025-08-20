---
title: Stepped Line Chart
description: Learn how to create stepped line charts with Chart.js
---

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import SteppedChartExample from '../components/SteppedChartExample.vue'
</script>

# Stepped Line Chart

A stepped line chart connects data points with horizontal and vertical lines, creating a step-like appearance. This is perfect for showing discrete changes over time, such as inventory levels, process states, or cumulative data.

## Basic Stepped Line Chart

<ChartCodeToggle 
  chart-name="line"
  :chart-data="{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Inventory',
        data: [100, 85, 120, 95, 110],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        stepped: true,
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
        text: 'Stepped Line Chart Example'
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
    <SteppedChartExample />
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
    label: 'Inventory',
    data: [100, 85, 120, 95, 110],
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    stepped: true,
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
      text: 'Stepped Line Chart Example'
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

- **`stepped: true`** - Enables step-wise line connections
- **`fill: true`** - Fills the area under the stepped line
- **`borderWidth`** - Controls line thickness
- **`backgroundColor`** - Sets fill color with transparency

## Use Cases

- Inventory level tracking
- Process state changes
- Cumulative data visualization
- Discrete event timelines
- Step function representations

---

*[← Back to Line Charts](/chartjs/line-charts)*
