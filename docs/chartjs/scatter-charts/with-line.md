---
title: Scatter with Line
description: Scatter chart with connecting lines between data points
---

# Scatter Chart with Line

A scatter chart that connects data points with lines, perfect for showing trends and patterns while maintaining the precision of individual data points.

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import ScatterWithLineExample from '../components/ScatterWithLineExample.vue'
</script>

## Scatter Chart with Line

<ChartCodeToggle 
  chart-name="scatter"
  :chart-data="{
    datasets: [
      {
        label: 'Data with Line',
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 25 },
          { x: 20, y: 30 },
          { x: 25, y: 35 },
          { x: 30, y: 40 },
          { x: 35, y: 45 },
          { x: 40, y: 50 },
          { x: 45, y: 55 },
          { x: 50, y: 60 },
          { x: 55, y: 65 }
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
        showLine: true,
        tension: 0.4,
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
        text: 'Scatter Chart with Line',
        font: {
          size: 16,
          weight: 'bold'
        },
        padding: 20
      },
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'X Axis',
          font: {
            size: 14,
            weight: '600'
          }
        },
        ticks: {
          font: {
            size: 12
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Y Axis',
          font: {
            size: 14,
            weight: '600'
          }
        },
        ticks: {
          font: {
            size: 12
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  }"
>
  <template #chart>
    <ScatterWithLineExample />
  </template>
</ChartCodeToggle>

### Chart Configuration

```vue
<template>
  <ChartComponent 
    chartName="scatter"
    :chartData="chartData"
    :chartOptions="chartOptions"
  />
</template>

<script setup>
import ChartComponent from './ChartComponent.vue'

const chartData = {
  datasets: [
    {
      label: 'Data with Line',
      data: [
        { x: 10, y: 20 },
        { x: 15, y: 25 },
        { x: 20, y: 30 },
        { x: 25, y: 35 },
        { x: 30, y: 40 },
        { x: 35, y: 45 },
        { x: 40, y: 50 },
        { x: 45, y: 55 },
        { x: 50, y: 60 },
        { x: 55, y: 65 }
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.8)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 3,
      pointRadius: 6,
      pointHoverRadius: 8,
      showLine: true,
      tension: 0.4,
      fill: false
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Scatter Chart with Line',
      font: {
        size: 16,
        weight: 'bold'
      },
      padding: 20
    },
    legend: {
      display: true,
      position: 'top'
    }
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      title: {
        display: true,
        text: 'X Axis',
        font: {
          size: 14,
          weight: '600'
        }
      },
      ticks: {
        font: {
          size: 12
        }
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)'
      }
    },
    y: {
      type: 'linear',
      position: 'left',
      title: {
        display: true,
        text: 'Y Axis',
        font: {
          size: 14,
          weight: '600'
        }
      },
      ticks: {
        font: {
          size: 12
        }
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)'
      }
    }
  }
}
</script>
```

## Key Features

### **Line Connection**
- **`showLine: true`** - Enables lines between data points
- **`tension: 0.4`** - Creates smooth, curved connections
- **`fill: false`** - Keeps areas under lines transparent
- **Trend visualization** - Shows data progression clearly

### **Point Styling**
- **Visible markers** - Each data point clearly marked
- **Hover effects** - Interactive point highlighting
- **Consistent sizing** - Uniform point appearance
- **Color coordination** - Matching line and point colors

### **Data Structure**
- **Coordinate pairs** - `{ x: value, y: value }` format
- **Sequential data** - Points connected in order
- **Flexible spacing** - No requirement for equal intervals
- **Mixed scales** - Independent X and Y ranges

## Use Cases

### **Trend Analysis**
- **Time series data** - Show progression over time
- **Performance tracking** - Monitor changes in metrics
- **Growth patterns** - Visualize development trends
- **Correlation studies** - Identify relationships

### **Process Monitoring**
- **Quality control** - Track process variables
- **Production metrics** - Monitor efficiency changes
- **Resource utilization** - Show usage patterns
- **Performance benchmarks** - Compare against targets

## Configuration Options

### **Line Styling**
```javascript
{
  showLine: true,        // Enable/disable lines
  tension: 0.4,          // Line smoothness (0-1)
  fill: false,           // Fill under lines
  borderWidth: 3,        // Line thickness
  borderColor: 'rgb(54, 162, 235)'
}
```

### **Point Customization**
```javascript
{
  pointRadius: 6,        // Normal point size
  pointHoverRadius: 8,   // Hover point size
  pointBackgroundColor: 'rgba(54, 162, 235, 0.8)',
  pointBorderColor: 'rgb(54, 162, 235)',
  pointBorderWidth: 2
}
```

## Next Steps

- [Basic Scatter Chart](/chartjs/scatter-charts)
- [Multi-Dataset Scatter](/chartjs/scatter-charts/multi-dataset)
- [Bubble Chart](/chartjs/scatter-charts/bubble)
- [Multi-Dataset Bubble](/chartjs/scatter-charts/multi-bubble)
