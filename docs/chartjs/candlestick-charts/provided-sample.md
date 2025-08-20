---
title: Provided Sample Candlestick Chart
description: Provided sample data candlestick chart with dark theme and category x-axis
---

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import CandlestickChartExample from '../components/CandlestickChartExample.vue'
</script>

# Provided Sample Candlestick Chart

This chart demonstrates the provided sample dataset with a dark theme, category x-axis, and higher price volatility over 12 days.

## Provided Sample Chart

<ChartCodeToggle 
  chart-name="CandlestickChartProvided"
  :chart-data="[
    { x: '01 Jan', y: [45, 48.91, 41.88, 42.95] },
    { x: '02 Jan', y: [48.95, 49.11, 45.78, 46.7] },
    { x: '03 Jan', y: [41.26, 43.8, 38.93, 39.72] },
    { x: '04 Jan', y: [52.39, 55.83, 48.5, 54.94] },
    { x: '05 Jan', y: [59.9, 59.98, 55.01, 58.19] },
    { x: '06 Jan', y: [48.23, 49.51, 44.66, 49.18] },
    { x: '07 Jan', y: [54.91, 55.49, 50.38, 53.88] },
    { x: '08 Jan', y: [44.71, 49.08, 43.26, 47.9] },
    { x: '09 Jan', y: [48.99, 50.75, 46.61, 48.99] },
    { x: '10 Jan', y: [57.12, 57.98, 55.68, 57.56] },
    { x: '11 Jan', y: [48.94, 50.02, 44.17, 44.95] },
    { x: '12 Jan', y: [40.62, 41.13, 39.79, 40.43] }
  ]"
  :chart-options="{
    chart: { 
      type: 'candlestick', 
      height: '100%', 
      animations: { enabled: true },
      foreColor: '#f6f7f8'
    },
    title: { 
      text: 'Provided Sample Data - Dark Theme', 
      align: 'left',
      style: { fontSize: '16px', fontWeight: 'bold' }
    },
    xaxis: { 
      type: 'category' 
    },
    yaxis: { 
      tooltip: { enabled: true },
      min: 35,
      max: 65,
      tickAmount: 6,
      decimalsInFloat: 2
    },
    theme: { 
      mode: 'dark', 
      palette: 'palette4' 
    },
    grid: {
      borderColor: '#374151',
      strokeDashArray: 5
    }
  }"
>
  <template #chart>
    <CandlestickChartExample 
      :chart-data="[
        { x: '01 Jan', y: [45, 48.91, 41.88, 42.95] },
        { x: '02 Jan', y: [48.95, 49.11, 45.78, 46.7] },
        { x: '03 Jan', y: [41.26, 43.8, 38.93, 39.72] },
        { x: '04 Jan', y: [52.39, 55.83, 48.5, 54.94] },
        { x: '05 Jan', y: [59.9, 59.98, 55.01, 58.19] },
        { x: '06 Jan', y: [48.23, 49.51, 44.66, 49.18] },
        { x: '07 Jan', y: [54.91, 55.49, 50.38, 53.88] },
        { x: '08 Jan', y: [44.71, 49.08, 43.26, 47.9] },
        { x: '09 Jan', y: [48.99, 50.75, 46.61, 48.99] },
        { x: '10 Jan', y: [57.12, 57.98, 55.68, 57.56] },
        { x: '11 Jan', y: [48.94, 50.02, 44.17, 44.95] },
        { x: '12 Jan', y: [40.62, 41.13, 39.79, 40.43] }
      ]"
      :chart-options="{
        chart: { 
          type: 'candlestick', 
          height: '100%', 
          animations: { enabled: true },
          foreColor: '#f6f7f8'
        },
        title: { 
          text: 'Provided Sample Data - Dark Theme', 
          align: 'left',
          style: { fontSize: '16px', fontWeight: 'bold' }
        },
        xaxis: { 
          type: 'category' 
        },
        yaxis: { 
          tooltip: { enabled: true },
          min: 35,
          max: 65,
          tickAmount: 6,
          decimalsInFloat: 2
        },
        theme: { 
          mode: 'dark', 
          palette: 'palette4' 
        },
        grid: {
          borderColor: '#374151',
          strokeDashArray: 5
        }
      }"
    />
  </template>
</ChartCodeToggle>

### Chart Configuration

```vue
<template>
  <CandlestickChartExample 
    :chartData="chartData"
    :chartOptions="chartOptions"
  />
</template>

<script setup>
import CandlestickChartExample from '../components/CandlestickChartExample.vue'

const chartData = [
  { x: '01 Jan', y: [45, 48.91, 41.88, 42.95] },
  { x: '02 Jan', y: [48.95, 49.11, 45.78, 46.7] },
  { x: '03 Jan', y: [41.26, 43.8, 38.93, 39.72] },
  { x: '04 Jan', y: [52.39, 55.83, 48.5, 54.94] },
  { x: '05 Jan', y: [59.9, 59.98, 55.01, 58.19] },
  { x: '06 Jan', y: [48.23, 49.51, 44.66, 49.18] },
  { x: '07 Jan', y: [54.91, 55.49, 50.38, 53.88] },
  { x: '08 Jan', y: [44.71, 49.08, 43.26, 47.9] },
  { x: '09 Jan', y: [48.99, 50.75, 46.61, 48.99] },
  { x: '10 Jan', y: [57.12, 57.98, 55.68, 57.56] },
  { x: '11 Jan', y: [48.94, 50.02, 44.17, 44.95] },
  { x: '12 Jan', y: [40.62, 41.13, 39.79, 40.43] }
]

const chartOptions = {
  chart: { 
    type: 'candlestick', 
    height: '100%', 
    animations: { enabled: true },
    foreColor: '#f6f7f8'
  },
  title: { 
    text: 'Provided Sample Data - Dark Theme', 
    align: 'left',
    style: { fontSize: '16px', fontWeight: 'bold' }
  },
  xaxis: { 
    type: 'category' 
  },
  yaxis: { 
    tooltip: { enabled: true },
    min: 35,
    max: 65,
    tickAmount: 6,
    decimalsInFloat: 2
  },
  theme: { 
    mode: 'dark', 
    palette: 'palette4' 
  },
  grid: {
    borderColor: '#374151',
    strokeDashArray: 5
  }
}
</script>

## Key Features

- **Dark Theme** - Uses `
