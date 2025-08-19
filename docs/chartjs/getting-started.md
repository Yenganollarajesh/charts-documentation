---
title: Getting Started with Chart.js
description: Learn how to install and set up Chart.js in your project
---

# Getting Started with Chart.js

This guide will walk you through setting up Chart.js in your project and creating your first chart.

## Installation

### Using npm (Recommended)

```bash
npm install chart.js
```

### Using CDN

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

### Using yarn

```bash
yarn add chart.js
```

## Basic Setup

### 1. HTML Structure

Create a canvas element where your chart will be rendered:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Chart.js Example</title>
</head>
<body>
    <div style="width: 400px; height: 300px;">
        <canvas id="myChart"></canvas>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="app.js"></script>
</body>
</html>
```

### 2. JavaScript Implementation

```javascript
// Get the canvas element
const ctx = document.getElementById('myChart').getContext('2d');

// Create the chart
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Sales',
            data: [12, 19, 3, 5, 2],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Sales'
            }
        }
    }
});
```

## Vue.js Integration

### 1. Install Dependencies

```bash
npm install chart.js vue-chartjs
```

### 2. Create a Chart Component

```vue
<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Chart, registerables } from 'chart.js'

// Register Chart.js components
Chart.register(...registerables)

const chartCanvas = ref(null)
const chart = ref(null)

onMounted(() => {
  const ctx = chartCanvas.value.getContext('2d')
  
  chart.value = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Revenue',
        data: [65, 59, 80, 81, 56],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  })
})

onUnmounted(() => {
  if (chart.value) {
    chart.value.destroy()
  }
})
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 300px;
}
</style>
```

## Chart Configuration

### Basic Chart Structure

```javascript
const config = {
  type: 'line',           // Chart type
  data: {                 // Data configuration
    labels: [...],        // X-axis labels
    datasets: [...]       // Data series
  },
  options: {              // Chart options
    responsive: true,     // Responsive behavior
    plugins: {...},       // Plugin configurations
    scales: {...}         // Axis configurations
  }
}
```

### Dataset Configuration

```javascript
datasets: [{
  label: 'Dataset Label',           // Legend label
  data: [1, 2, 3, 4, 5],          // Data values
  borderColor: 'rgb(75, 192, 192)', // Line color
  backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill color
  borderWidth: 2,                   // Line thickness
  tension: 0.4,                     // Line smoothness
  fill: false                       // Area fill
}]
```

## Common Options

### Responsiveness

```javascript
options: {
  responsive: true,              // Enable responsive behavior
  maintainAspectRatio: false,    // Allow custom dimensions
  plugins: {
    legend: {
      display: true,             // Show/hide legend
      position: 'top'            // Legend position
    },
    title: {
      display: true,             // Show/hide title
      text: 'Chart Title'        // Title text
    }
  }
}
```

### Scales Configuration

```javascript
options: {
  scales: {
    x: {
      display: true,              // Show/hide X axis
      title: {
        display: true,
        text: 'X Axis Label'
      }
    },
    y: {
      display: true,              // Show/hide Y axis
      beginAtZero: true,          // Start Y axis at 0
      title: {
        display: true,
        text: 'Y Axis Label'
      }
    }
  }
}
```

## Best Practices

### 1. **Performance**
- Destroy charts when components unmount
- Use `responsive: true` for mobile compatibility
- Limit the number of data points for large datasets

### 2. **Accessibility**
- Provide meaningful labels and titles
- Use appropriate color contrasts
- Include alternative text for screen readers

### 3. **Data Handling**
- Validate data before rendering
- Handle empty or null values gracefully
- Use appropriate data types for different chart types

## Next Steps

- Explore [Line Charts](/chartjs/line-charts) for detailed examples
- Learn about [Chart Configuration](/chartjs/getting-started#chart-configuration)
- See [Interactive Example: Tick Control](/chartjs/line-charts#interactive-example-tick-control)

---

*Ready to create your first chart? Start with the examples above and experiment with different configurations!*
