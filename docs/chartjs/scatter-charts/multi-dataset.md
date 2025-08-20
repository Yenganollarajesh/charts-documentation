---
title: Multi-Dataset Scatter Chart
description: Scatter chart with multiple datasets for comparison
---

# Multi-Dataset Scatter Chart

A scatter chart that displays multiple datasets simultaneously, allowing for easy comparison and analysis of different groups or categories of data.

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import MultiScatterChartExample from '../components/MultiScatterChartExample.vue'
</script>

## Multi-Dataset Scatter Chart

<ChartCodeToggle 
  chart-name="scatter"
  :chart-data="{
    datasets: [
      {
        label: 'Dataset A',
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 25 },
          { x: 20, y: 30 },
          { x: 25, y: 35 },
          { x: 30, y: 40 }
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8
      },
      {
        label: 'Dataset B',
        data: [
          { x: 12, y: 18 },
          { x: 17, y: 23 },
          { x: 22, y: 28 },
          { x: 27, y: 33 },
          { x: 32, y: 38 }
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8
      },
      {
        label: 'Dataset C',
        data: [
          { x: 8, y: 22 },
          { x: 13, y: 27 },
          { x: 18, y: 32 },
          { x: 23, y: 37 },
          { x: 28, y: 42 }
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8
      }
    ]
  }"
  :chart-options="{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Multi-Dataset Scatter Chart',
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
    <MultiScatterChartExample />
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
      label: 'Dataset A',
      data: [
        { x: 10, y: 20 },
        { x: 15, y: 25 },
        { x: 20, y: 30 },
        { x: 25, y: 35 },
        { x: 30, y: 40 }
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 8
    },
    {
      label: 'Dataset B',
      data: [
        { x: 12, y: 18 },
        { x: 17, y: 23 },
        { x: 22, y: 28 },
        { x: 27, y: 33 },
        { x: 32, y: 38 }
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.8)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 8
    },
    {
      label: 'Dataset C',
      data: [
        { x: 8, y: 22 },
        { x: 13, y: 27 },
        { x: 18, y: 32 },
        { x: 23, y: 37 },
        { x: 28, y: 42 }
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.8)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 8
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Multi-Dataset Scatter Chart',
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

### **Multiple Datasets**
- **Independent data** - Each dataset can have different values
- **Color coding** - Distinct colors for easy identification
- **Legend display** - Clear labeling of all datasets
- **Comparison ready** - Easy to spot differences and patterns

### **Visual Distinction**
- **Unique colors** - Each dataset has its own color scheme
- **Consistent styling** - Uniform point sizes and borders
- **Hover effects** - Interactive highlighting for each dataset
- **Grid reference** - Background lines for coordinate reading

### **Data Organization**
- **Structured format** - Clear separation between datasets
- **Flexible content** - Different numbers of points per dataset
- **Coordinate system** - Shared X and Y scales for comparison
- **Interactive legend** - Click to show/hide individual datasets

## Use Cases

### **Comparative Analysis**
- **Group comparisons** - Compare different populations
- **Category analysis** - Show data by classification
- **Time periods** - Compare data from different dates
- **Location data** - Compare data from different regions

### **Research Applications**
- **Experimental groups** - Control vs. treatment comparisons
- **Survey responses** - Different demographic groups
- **Performance metrics** - Various performance indicators
- **Quality measures** - Different quality parameters

## Configuration Options

### **Dataset Styling**
```javascript
{
  label: 'Dataset Name',           // Legend label
  backgroundColor: 'rgba(255, 99, 132, 0.8)',  // Point fill color
  borderColor: 'rgb(255, 99, 132)',            // Point border color
  borderWidth: 2,                              // Border thickness
  pointRadius: 6,                               // Point size
  pointHoverRadius: 8                           // Hover point size
}
```

### **Legend Configuration**
```javascript
plugins: {
  legend: {
    display: true,                 // Show legend
    position: 'top',               // Legend position
    labels: {
      usePointStyle: true,         // Use point style in legend
      padding: 20                  // Spacing between items
    }
  }
}
```

## Best Practices

### **Color Selection**
- **Distinct colors** - Ensure datasets are easily distinguishable
- **Accessibility** - Consider colorblind-friendly palettes
- **Consistency** - Use consistent colors across related charts
- **Contrast** - Ensure good contrast with background

### **Data Organization**
- **Logical grouping** - Group related datasets together
- **Clear labeling** - Use descriptive dataset names
- **Consistent structure** - Maintain similar data formats
- **Appropriate scale** - Set scales that accommodate all datasets

## Next Steps

- [Basic Scatter Chart](/chartjs/scatter-charts)
- [Scatter with Line](/chartjs/scatter-charts/with-line)
- [Bubble Chart](/chartjs/scatter-charts/bubble)
- [Multi-Dataset Bubble](/chartjs/scatter-charts/multi-bubble)
