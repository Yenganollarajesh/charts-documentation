---
title: Candlestick Charts
description: Interactive candlestick charts using ApexCharts with Chart/Code toggle functionality
---

# Candlestick Charts

Candlestick charts are essential for financial analysis, displaying the open, high, low, and close (OHLC) values of financial instruments over time. They provide valuable insights into market trends, volatility, and price action patterns.

## About ApexCharts

**ApexCharts** is a modern JavaScript charting library that provides interactive charts for web applications. Unlike Chart.js, ApexCharts is specifically designed for financial and business charts, offering superior support for candlestick charts, OHLC data, and financial time series.

### Key Features
- **Financial Chart Specialization** - Built specifically for financial data visualization
- **Rich Interactivity** - Advanced zoom, pan, and tooltip capabilities
- **Responsive Design** - Automatically adapts to container size
- **Theme Support** - Light and dark mode with customizable colors
- **Export Options** - PNG, SVG, and CSV export capabilities
- **Real-time Updates** - Efficient data streaming and updates

### Installation

```bash
# Install ApexCharts core library
npm install apexcharts

# Install Vue 3 wrapper (optional but recommended)
npm install vue3-apexcharts
```

### Basic Setup

```javascript
// Import ApexCharts
import ApexCharts from 'apexcharts'

// Import CSS (in your main entry file)
import 'apexcharts/dist/apexcharts.css'
```

### Vue 3 Integration

```javascript
// In your Vue component
import { onMounted, onUnmounted } from 'vue'
import ApexCharts from 'apexcharts'

let chart = null

onMounted(() => {
  const options = {
    chart: { type: 'candlestick' },
    series: [{ data: chartData }]
  }
  
  chart = new ApexCharts(document.querySelector('#chart'), options)
  chart.render()
})

onUnmounted(() => {
  chart?.destroy()
})
```

### Why ApexCharts for Candlestick Charts?

**ApexCharts** is the preferred choice for financial charts because:

- **Native OHLC Support** - Built-in candlestick chart type with proper OHLC data handling
- **Financial Data Format** - Optimized for time-series financial data
- **Advanced Features** - Volume bars, technical indicators, and financial tooltips
- **Performance** - Efficient rendering of large financial datasets
- **Professional Look** - Industry-standard financial chart appearance

**Chart.js** is excellent for general-purpose charts but lacks:
- Native candlestick chart support
- OHLC data structure handling
- Financial-specific tooltips and formatting
- Volume and technical indicator integration

<script setup>
import ChartCodeToggle from './components/ChartCodeToggle.vue'
import CandlestickChartExample from './components/CandlestickChartExample.vue'
</script>

## Data Format & Structure

### OHLC Data Format
ApexCharts candlestick charts expect data in the following format:

```javascript
const chartData = [
  {
    x: new Date('2023-01-01').getTime(), // Timestamp
    y: [51.98, 56.29, 51.59, 53.85]     // [Open, High, Low, Close]
  },
  {
    x: new Date('2023-01-02').getTime(),
    y: [53.66, 54.99, 51.35, 52.95]
  }
  // ... more data points
]
```

### Data Structure Explanation
- **`x`** - Timestamp (Unix timestamp in milliseconds)
- **`y`** - Array containing [Open, High, Low, Close] values
- **Open** - Opening price for the period
- **High** - Highest price during the period  
- **Low** - Lowest price during the period
- **Close** - Closing price for the period

### Converting from Different Formats

```javascript
// From array of objects with separate properties
const rawData = [
  { date: '2023-01-01', open: 51.98, high: 56.29, low: 51.59, close: 53.85 },
  { date: '2023-01-02', open: 53.66, high: 54.99, low: 51.35, close: 52.95 }
]

const chartData = rawData.map(item => ({
  x: new Date(item.date).getTime(),
  y: [item.open, item.high, item.low, item.close]
}))
```

## Using ChartCodeToggle Component

The `ChartCodeToggle` component automatically detects whether you're using Chart.js or ApexCharts and generates the appropriate code snippet. For candlestick charts, it will generate ApexCharts code.

### Component Usage
```vue
<ChartCodeToggle 
  chart-name="CandlestickChart"
  :chart-data="chartData"
  :chart-options="chartOptions"
>
  <template #chart>
    <CandlestickChartExample 
      :chart-data="chartData"
      :chart-options="chartOptions"
    />
  </template>
</ChartCodeToggle>
```

### Automatic Code Generation
The component automatically detects the chart type from `chartOptions.chart.type`:
- **`'candlestick'`** → Generates ApexCharts code
- **Other types** → Generates Chart.js code

## Basic Candlestick Chart

<ChartCodeToggle 
  chart-name="CandlestickChart"
  :chart-data="[
    { x: new Date('2023-01-01').getTime(), y: [51.98, 56.29, 51.59, 53.85] },
    { x: new Date('2023-01-02').getTime(), y: [53.66, 54.99, 51.35, 52.95] },
    { x: new Date('2023-01-03').getTime(), y: [52.96, 53.78, 51.54, 52.48] },
    { x: new Date('2023-01-04').getTime(), y: [52.54, 52.79, 47.88, 49.24] },
    { x: new Date('2023-01-05').getTime(), y: [49.1, 52.86, 47.7, 52.78] },
    { x: new Date('2023-01-06').getTime(), y: [52.83, 53.48, 50.32, 52.29] },
    { x: new Date('2023-01-07').getTime(), y: [52.2, 54.48, 51.64, 52.97] },
    { x: new Date('2023-01-08').getTime(), y: [52.89, 54.1, 52.65, 53.45] }
  ]"
  :chart-options="{
    chart: { 
      type: 'candlestick', 
      height: '100%', 
      animations: { enabled: true },
      toolbar: { show: false }
    },
    title: { 
      text: 'Stock Price Candlestick Chart', 
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
        { x: new Date('2023-01-01').getTime(), y: [51.98, 56.29, 51.59, 53.85] },
        { x: new Date('2023-01-02').getTime(), y: [53.66, 54.99, 51.35, 52.95] },
        { x: new Date('2023-01-03').getTime(), y: [52.96, 53.78, 51.54, 52.48] },
        { x: new Date('2023-01-04').getTime(), y: [52.54, 52.79, 47.88, 49.24] },
        { x: new Date('2023-01-05').getTime(), y: [49.1, 52.86, 47.7, 52.78] },
        { x: new Date('2023-01-06').getTime(), y: [52.83, 53.48, 50.32, 52.29] },
        { x: new Date('2023-01-07').getTime(), y: [52.2, 54.48, 51.64, 52.97] },
        { x: new Date('2023-01-08').getTime(), y: [52.89, 54.1, 52.65, 53.45] }
      ]"
      :chart-options="{
        chart: { 
          type: 'candlestick', 
          height: '100%', 
          animations: { enabled: true },
          toolbar: { show: false }
        },
        title: { 
          text: 'Stock Price Candlestick Chart', 
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
import CandlestickChartExample from './components/CandlestickChartExample.vue'

const chartData = [
  { x: new Date('2023-01-01').getTime(), y: [51.98, 56.29, 51.59, 53.85] },
  { x: new Date('2023-01-02').getTime(), y: [53.66, 54.99, 51.35, 52.95] },
  { x: new Date('2023-01-03').getTime(), y: [52.96, 53.78, 51.54, 52.48] },
  { x: new Date('2023-01-04').getTime(), y: [52.54, 52.79, 47.88, 49.24] },
  { x: new Date('2023-01-05').getTime(), y: [49.1, 52.86, 47.7, 52.78] },
  { x: new Date('2023-01-06').getTime(), y: [52.83, 53.48, 50.32, 52.29] },
  { x: new Date('2023-01-07').getTime(), y: [52.2, 54.48, 51.64, 52.97] },
  { x: new Date('2023-01-08').getTime(), y: [52.89, 54.1, 52.65, 53.45] }
]

const chartOptions = {
  chart: { 
    type: 'candlestick', 
    height: '100%', 
    animations: { enabled: true },
    toolbar: { show: false }
  },
  title: { 
    text: 'Stock Price Candlestick Chart', 
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
```

## Candlestick Chart Features

### **OHLC Data Structure**
Each candlestick represents:
- **Open (O)** - Opening price for the period
- **High (H)** - Highest price during the period
- **Low (L)** - Lowest price during the period
- **Close (C)** - Closing price for the period

### **Visual Interpretation**
- **Green/White Candles** - Close > Open (bullish)
- **Red/Black Candles** - Close < Open (bearish)
- **Wicks/Shadows** - Show price range (high to low)
- **Body** - Shows open to close range

### **Interactive Elements**
- **Hover Tooltips** - Display exact OHLC values
- **Zoom & Pan** - Navigate through time periods
- **Responsive Design** - Adapts to container size
- **Theme Support** - Light and dark mode options

## Configuration Options

### **Chart Type & Animation**
```javascript
chart: {
  type: 'candlestick',        // Chart type
  height: '100%',             // Chart height
  animations: { enabled: true }, // Enable/disable animations
  toolbar: { show: false },   // Show/hide toolbar
  background: '#ffffff',      // Chart background color
  fontFamily: 'Arial, sans-serif' // Font family
}
```

### **Series Configuration**
```javascript
series: [{
  name: 'Stock Price',
  data: chartData,           // OHLC data array
  color: '#00E396',          // Up candle color (green)
  downColor: '#FF4560'       // Down candle color (red)
}]
```

### **X-Axis Configuration**
```javascript
xaxis: {
  type: 'datetime',          // X-axis type
  labels: {
    formatter: (val, timestamp) => {
      const d = new Date(timestamp)
      return `${d.getDate()} ${d.toLocaleString('en-GB', { month: 'short' })}`
    }
  },
  tickAmount: 8,             // Number of ticks
  min: new Date('2023-01-01').getTime(), // Minimum date
  max: new Date('2023-01-31').getTime()  // Maximum date
}
```

### **X-Axis Configuration**
```javascript
xaxis: {
  type: 'datetime',
  labels: {
    formatter: (val, timestamp) => {
      const d = new Date(timestamp)
      return `${d.getDate()} ${d.toLocaleString('en-GB', { month: 'short' })}`
    }
  }
}
```

### **Y-Axis Configuration**
```javascript
yaxis: {
  tooltip: { enabled: true },    // Enable tooltip
  title: { text: 'Price ($)' }, // Y-axis title
  min: 40,                       // Minimum value
  max: 60,                       // Maximum value
  tickAmount: 5,                 // Number of ticks
  decimalsInFloat: 2,            // Decimal places
  opposite: false,               // Position (left/right)
  labels: {
    formatter: (value) => `$${value.toFixed(2)}` // Custom formatting
  }
}
```

### **Tooltip Configuration**
```javascript
tooltip: {
  enabled: true,                 // Enable tooltips
  theme: 'light',                // Tooltip theme
  x: {
    format: 'dd MMM yyyy'        // Date format
  },
  y: {
    formatter: (value) => `$${value.toFixed(2)}` // Price format
  },
  custom: function({ series, seriesIndex, dataPointIndex, w }) {
    const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex]
    return `
      <div class="custom-tooltip">
        <div>Date: ${new Date(data.x).toLocaleDateString()}</div>
        <div>Open: $${data.y[0]}</div>
        <div>High: $${data.y[1]}</div>
        <div>Low: $${data.y[2]}</div>
        <div>Close: $${data.y[3]}</div>
      </div>
    `
  }
}
```

### **Theme & Styling**
```javascript
theme: { 
  mode: 'light',                    // 'light' or 'dark'
  palette: 'palette1',              // Color palette
  monochrome: {                     // Monochrome theme
    enabled: false,
    color: '#255aee',
    shadeTo: 'light',
    shadeIntensity: 0.65
  }
},
grid: {
  borderColor: '#e5e7eb',           // Grid border color
  strokeDashArray: 5,               // Grid line style
  row: {                            // Row grid
    colors: ['#f3f4f6', 'transparent'],
    opacity: 0.5
  },
  column: {                          // Column grid
    colors: ['#f3f4f6', 'transparent'],
    opacity: 0.5
  }
}
```

### **Responsive Configuration**
```javascript
responsive: [{
  breakpoint: 768,                  // Mobile breakpoint
  options: {
    chart: {
      height: 250                    // Smaller height on mobile
    },
    xaxis: {
      labels: {
        rotate: -45,                 // Rotate labels on mobile
        maxHeight: 60
      }
    }
  }
}]
```

### **Animation & Performance**
```javascript
chart: {
  animations: {
    enabled: true,                   // Enable animations
    easing: 'easeinout',            // Animation easing
    speed: 800,                     // Animation speed
    dynamicAnimation: {
      enabled: true,
      speed: 350
    }
  },
  redrawOnWindowResize: true,       // Redraw on resize
  redrawOnParentResize: true        // Redraw on parent resize
}
```

## Advanced Features

### **Volume Integration**
```javascript
// Add volume bars below candlesticks
series: [
  {
    name: 'Price',
    type: 'candlestick',
    data: priceData
  },
  {
    name: 'Volume',
    type: 'column',
    data: volumeData,
    yAxisIndex: 1
  }
],
yaxis: [
  {
    title: { text: 'Price ($)' },
    position: 'left'
  },
  {
    title: { text: 'Volume' },
    position: 'right',
    opposite: true
  }
]
```

### **Technical Indicators**
```javascript
// Add moving averages
annotations: {
  yaxis: [
    {
      y: 50,
      borderColor: '#00E396',
      label: {
        borderColor: '#00E396',
        style: {
          color: '#fff',
          background: '#00E396'
        },
        text: '50 SMA'
      }
    }
  ]
}
```

### **Zoom & Pan Controls**
```javascript
chart: {
  zoom: {
    enabled: true,                   // Enable zoom
    type: 'x',                       // Zoom type (x, y, xy)
    autoScaleYaxis: true,            // Auto-scale Y-axis
    zoomedArea: {                    // Zoom area styling
      fill: {
        color: '#90CAF9',
        opacity: 0.4
      },
      stroke: {
        color: '#0D47A1',
        opacity: 0.4,
        width: 1
      }
    }
  },
  pan: {
    enabled: true,                    // Enable pan
    type: 'x'                        // Pan type
  }
}
```

## Use Cases

### **Financial Analysis**
- **Stock Trading** - Analyze price movements and trends
- **Forex Markets** - Currency pair price action
- **Cryptocurrency** - Digital asset price analysis
- **Commodities** - Raw material price tracking

### **Technical Analysis**
- **Pattern Recognition** - Identify chart patterns
- **Support/Resistance** - Find key price levels
- **Trend Analysis** - Determine market direction
- **Volatility Assessment** - Measure price fluctuations

### **Risk Management**
- **Stop Loss Placement** - Set exit points
- **Position Sizing** - Calculate trade sizes
- **Risk-Reward Ratios** - Evaluate trade potential
- **Portfolio Management** - Monitor multiple assets

## Troubleshooting & Common Issues

### **Chart Not Rendering**
```javascript
// Common causes and solutions:

// 1. Check if element exists
onMounted(() => {
  nextTick(() => {
    if (!chartEl.value) {
      console.error('Chart element not found')
      return
    }
    renderChart()
  })
})

// 2. Verify data format
const validateData = (data) => {
  return data.every(item => 
    item.x && 
    Array.isArray(item.y) && 
    item.y.length === 4 &&
    item.y.every(val => typeof val === 'number')
  )
}

// 3. Check console for errors
// Look for: "ApexCharts is not defined" or import errors
```

### **Performance Issues**
```javascript
// Optimize for large datasets
chart: {
  animations: {
    enabled: false,                   // Disable for large datasets
    dynamicAnimation: { enabled: false }
  },
  redrawOnWindowResize: false,        // Disable if not needed
  redrawOnParentResize: false
}

// Use data sampling for very large datasets
const sampleData = (data, maxPoints = 1000) => {
  if (data.length <= maxPoints) return data
  const step = Math.ceil(data.length / maxPoints)
  return data.filter((_, index) => index % step === 0)
}
```

### **SSR/SSG Issues**
```javascript
// Use dynamic imports to avoid SSR issues
const renderChart = async () => {
  try {
    const ApexCharts = await import('apexcharts')
    // ... chart creation
  } catch (error) {
    console.error('Failed to load ApexCharts:', error)
  }
}

// Or use client-only wrapper
import { ClientOnly } from 'vitepress/client'
```

## Best Practices

### **Data Quality**
- **Accurate OHLC** - Ensure data precision
- **Time Alignment** - Proper period boundaries
- **Data Validation** - Check for anomalies
- **Update Frequency** - Real-time vs. delayed data

### **Visual Design**
- **Color Consistency** - Standard bullish/bearish colors
- **Clear Labels** - Readable axis and title text
- **Appropriate Scaling** - Optimize Y-axis range
- **Grid Lines** - Subtle background reference

### **Performance Optimization**
- **Data Limits** - Reasonable number of candles
- **Animation Control** - Disable for large datasets
- **Responsive Updates** - Efficient re-rendering
- **Memory Management** - Proper cleanup

## ApexCharts vs Chart.js

| Feature | ApexCharts | Chart.js |
|---------|------------|----------|
| **Candlestick Support** | ✅ Native | ❌ Requires plugin |
| **OHLC Data** | ✅ Built-in | ❌ Custom implementation |
| **Financial Tooltips** | ✅ Advanced | ❌ Basic |
| **Volume Integration** | ✅ Easy | ❌ Complex |
| **Technical Indicators** | ✅ Built-in | ❌ Requires plugins |
| **Performance** | ✅ Optimized | ✅ Good |
| **Bundle Size** | ⚠️ Larger | ✅ Smaller |
| **General Charts** | ✅ Good | ✅ Excellent |
| **Learning Curve** | ⚠️ Steeper | ✅ Easier |

### When to Use Each

**Use ApexCharts when:**
- Building financial applications
- Need candlestick/OHLC charts
- Require advanced financial features
- Working with large financial datasets

**Use Chart.js when:**
- Building general-purpose dashboards
- Need simple line/bar/pie charts
- Want smaller bundle size
- Prefer simpler API

## Next Steps

- Explore [Alternative Sample Chart](/chartjs/candlestick-charts/alternative-sample) - 12 days of data with upward trend
- Check out [Provided Sample Chart](/chartjs/candlestick-charts/provided-sample) - Dark theme with category x-axis
- Learn about [Line Charts](/chartjs/line-charts) (Chart.js)
- Explore [Bar Charts](/chartjs/bar-charts) (Chart.js)
- See [Pie Charts](/chartjs/pie-charts) (Chart.js)
- Discover [Scatter Charts](/chartjs/scatter-charts) (Chart.js)
- Check out [Radar Charts](/chartjs/radar-charts) (Chart.js)
- Explore [Combo Charts](/chartjs/combo-charts) (Chart.js)

---

*Ready to create your own candlestick chart? Use the interactive example above and copy the code to get started!*
