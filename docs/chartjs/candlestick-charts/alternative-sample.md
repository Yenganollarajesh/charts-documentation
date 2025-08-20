---
title: Alternative Sample Candlestick Chart
description: Alternative sample data candlestick chart with 12 days of price data
---

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import CandlestickChartExample from '../components/CandlestickChartExample.vue'
</script>

# Alternative Sample Candlestick Chart

This chart demonstrates an alternative dataset with 12 days of sample candlestick data, showing a different price range and trend pattern.

## Alternative Sample Chart

<ChartCodeToggle 
  chart-name="CandlestickChartAlt"
  :chart-data="[
    { x: new Date('2023-02-01').getTime(), y: [42.5, 45.2, 41.8, 44.1] },
    { x: new Date('2023-02-02').getTime(), y: [44.1, 46.8, 43.2, 45.9] },
    { x: new Date('2023-02-03').getTime(), y: [45.9, 47.5, 44.6, 46.2] },
    { x: new Date('2023-02-04').getTime(), y: [46.2, 48.1, 45.1, 47.8] },
    { x: new Date('2023-02-05').getTime(), y: [47.8, 49.3, 46.9, 48.5] },
    { x: new Date('2023-02-06').getTime(), y: [48.5, 50.2, 47.2, 49.1] },
    { x: new Date('2023-02-07').getTime(), y: [49.1, 51.8, 48.5, 50.9] },
    { x: new Date('2023-02-08').getTime(), y: [50.9, 52.4, 49.8, 51.2] },
    { x: new Date('2023-02-09').getTime(), y: [51.2, 53.1, 50.1, 52.8] },
    { x: new Date('2023-02-10').getTime(), y: [52.8, 54.3, 51.9, 53.5] },
    { x: new Date('2023-02-11').getTime(), y: [53.5, 55.2, 52.2, 54.1] },
    { x: new Date('2023-02-12').getTime(), y: [54.1, 56.8, 53.5, 55.9] }
  ]"
  :chart-options="{
    chart: { 
      type: 'candlestick', 
      height: '100%', 
      animations: { enabled: true },
      toolbar: { show: false }
    },
    title: { 
      text: 'Alternative Sample Data - 12 Days', 
      align: 'left',
      style: { fontSize: '16px', fontWeight: 'bold' }
    },
    xaxis: {
      type: 'datetime',
      labels: {
        formatter: (val, timestamp) => {
          const t = typeof timestamp === 'number' ? timestamp : Number(val)
          const d = new Date(t)
          const day = String(d.getDate()).padStart(2, '0')
          const month = d.toLocaleString('en-GB', { month: 'short' })
          return `${day} ${month}`
        }
      }
    },
    yaxis: { 
      tooltip: { enabled: true },
      title: { text: 'Price ($)' }
    },
    theme: { mode: 'light' },
    grid: {
      borderColor: '#e5e7eb',
      strokeDashArray: 5
    }
  }"
>
  <template #chart>
    <CandlestickChartExample 
      :chart-data="[
        { x: new Date('2023-02-01').getTime(), y: [42.5, 45.2, 41.8, 44.1] },
        { x: new Date('2023-02-02').getTime(), y: [44.1, 46.8, 43.2, 45.9] },
        { x: new Date('2023-02-03').getTime(), y: [45.9, 47.5, 44.6, 46.2] },
        { x: new Date('2023-02-04').getTime(), y: [46.2, 48.1, 45.1, 47.8] },
        { x: new Date('2023-02-05').getTime(), y: [47.8, 49.3, 46.9, 48.5] },
        { x: new Date('2023-02-06').getTime(), y: [48.5, 50.2, 47.2, 49.1] },
        { x: new Date('2023-02-07').getTime(), y: [49.1, 51.8, 48.5, 50.9] },
        { x: new Date('2023-02-08').getTime(), y: [50.9, 52.4, 49.8, 51.2] },
        { x: new Date('2023-02-09').getTime(), y: [51.2, 53.1, 50.1, 52.8] },
        { x: new Date('2023-02-10').getTime(), y: [52.8, 54.3, 51.9, 53.5] },
        { x: new Date('2023-02-11').getTime(), y: [53.5, 55.2, 52.2, 54.1] },
        { x: new Date('2023-02-12').getTime(), y: [54.1, 56.8, 53.5, 55.9] }
      ]"
      :chart-options="{
        chart: { 
          type: 'candlestick', 
          height: '100%', 
          animations: { enabled: true },
          toolbar: { show: false }
        },
        title: { 
          text: 'Alternative Sample Data - 12 Days', 
          align: 'left',
          style: { fontSize: '16px', fontWeight: 'bold' }
        },
        xaxis: {
          type: 'datetime',
          labels: {
            formatter: (val, timestamp) => {
              const t = typeof timestamp === 'number' ? timestamp : Number(val)
              const d = new Date(t)
              const day = String(d.getDate()).padStart(2, '0')
              const month = d.toLocaleString('en-GB', { month: 'short' })
              return `${day} ${month}`
            }
          }
        },
        yaxis: { 
          tooltip: { enabled: true },
          title: { text: 'Price ($)' }
        },
        theme: { mode: 'light' },
        grid: {
          borderColor: '#e5e7eb',
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
  { x: new Date('2023-02-01').getTime(), y: [42.5, 45.2, 41.8, 44.1] },
  { x: new Date('2023-02-02').getTime(), y: [44.1, 46.8, 43.2, 45.9] },
  { x: new Date('2023-02-03').getTime(), y: [45.9, 47.5, 44.6, 46.2] },
  { x: new Date('2023-02-04').getTime(), y: [46.2, 48.1, 45.1, 47.8] },
  { x: new Date('2023-02-05').getTime(), y: [47.8, 49.3, 46.9, 48.5] },
  { x: new Date('2023-02-06').getTime(), y: [48.5, 50.2, 47.2, 49.1] },
  { x: new Date('2023-02-07').getTime(), y: [49.1, 51.8, 48.5, 50.9] },
  { x: new Date('2023-02-08').getTime(), y: [50.9, 52.4, 49.8, 51.2] },
  { x: new Date('2023-02-09').getTime(), y: [51.2, 53.1, 50.1, 52.8] },
  { x: new Date('2023-02-10').getTime(), y: [52.8, 54.3, 51.9, 53.5] },
  { x: new Date('2023-02-11').getTime(), y: [53.5, 55.2, 52.2, 54.1] },
  { x: new Date('2023-02-12').getTime(), y: [54.1, 56.8, 53.5, 55.9] }
]

const chartOptions = {
  chart: { 
    type: 'candlestick', 
    height: '100%', 
    animations: { enabled: true },
    toolbar: { show: false }
  },
  title: { 
    text: 'Alternative Sample Data - 12 Days', 
    align: 'left',
    style: { fontSize: '16px', fontWeight: 'bold' }
  },
  xaxis: {
    type: 'datetime',
    labels: {
      formatter: (val, timestamp) => {
        const t = typeof timestamp === 'number' ? timestamp : Number(val)
        const d = new Date(t)
        const day = String(d.getDate()).padStart(2, '0')
        const month = d.toLocaleString('en-GB', { month: 'short' })
        return `${day} ${month}`
      }
    }
  },
  yaxis: { 
    tooltip: { enabled: true },
    title: { text: 'Price ($)' }
  },
  theme: { mode: 'light' },
  grid: {
    borderColor: '#e5e7eb',
    strokeDashArray: 5
  }
}
</script>

## Key Features

- **12 Days of Data** - Extended dataset showing longer trends
- **Price Range** - $41.80 to $56.80 (wider range than basic chart)
- **Upward Trend** - Shows consistent price appreciation
- **Datetime X-axis** - Proper date formatting with custom formatter

## Use Cases

- Extended market analysis
- Trend pattern recognition
- Multi-week price tracking
- Volatility assessment over longer periods

---

*[← Back to Candlestick Charts](/chartjs/candlestick-charts)*
