---
title: Bubble Chart
description: Scatter chart with varying point sizes representing a third dimension
---

# Bubble Chart

A bubble chart extends the scatter chart concept by adding a third dimension through varying point sizes. Each bubble represents three values: X position, Y position, and radius (size), making it perfect for multi-dimensional data visualization.

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import BubbleChartExample from '../components/BubbleChartExample.vue'
</script>

## Bubble Chart

<ChartCodeToggle 
  chart-name="bubble"
  :chart-data="{
    datasets: [
      {
        label: 'Bubble Data',
        data: [
          { x: 20, y: 30, r: 15 },
          { x: 40, y: 50, r: 5 },
          { x: 60, y: 70, r: 10 },
          { x: 80, y: 90, r: 15 },
          { x: 100, y: 110, r: 20 }
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2
      }
    ]
  }"
  :chart-options="{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Basic Bubble Chart',
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
    <BubbleChartExample />
  </template>
</ChartCodeToggle>

### Chart Configuration

```vue
<template>
  <ChartComponent 
    chartName="bubble"
    :chartData="chartData"
    :chartOptions="chartOptions"
  />
</template>

<script setup>
import ChartComponent from './ChartComponent.vue'

const chartData = {
  datasets: [
    {
      label: 'Bubble Data',
      data: [
        { x: 20, y: 30, r: 15 },
        { x: 40, y: 50, r: 5 },
        { x: 60, y: 70, r: 10 },
        { x: 80, y: 90, r: 15 },
        { x: 100, y: 110, r: 20 }
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Basic Bubble Chart',
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

### **Three-Dimensional Data**
- **X coordinate** - Horizontal position on the chart
- **Y coordinate** - Vertical position on the chart
- **Radius (r)** - Bubble size representing third dimension
- **Visual impact** - Larger bubbles draw more attention

### **Bubble Styling**
- **Size variation** - Each bubble can have different sizes
- **Transparency** - Semi-transparent fills for overlap visibility
- **Border definition** - Clear boundaries for each bubble
- **Color consistency** - Unified color scheme for the dataset

### **Data Structure**
- **Object format** - `{ x: value, y: value, r: value }`
- **Flexible scales** - Independent ranges for X, Y, and radius
- **Size normalization** - Automatic scaling of bubble sizes
- **Interactive elements** - Hover effects and tooltips

## Use Cases

### **Market Analysis**
- **Product positioning** - Price vs. quality vs. market share
- **Customer segments** - Age vs. income vs. spending
- **Competitive analysis** - Performance vs. cost vs. size
- **Portfolio management** - Risk vs. return vs. volume

### **Scientific Research**
- **Population studies** - Age vs. weight vs. height
- **Environmental data** - Temperature vs. humidity vs. pressure
- **Biological metrics** - Length vs. weight vs. age
- **Chemical analysis** - Concentration vs. pH vs. temperature

## Configuration Options

### **Bubble Styling**
```javascript
{
  backgroundColor: 'rgba(255, 99, 132, 0.6)',  // Fill color with transparency
  borderColor: 'rgb(255, 99, 132)',            // Border color
  borderWidth: 2,                              // Border thickness
  hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',  // Hover fill color
  hoverBorderColor: 'rgb(255, 99, 132)'              // Hover border color
}
```

### **Size Configuration**
```javascript
{
  // Individual bubble sizes in data
  data: [
    { x: 20, y: 30, r: 15 },    // Small bubble
    { x: 40, y: 50, r: 25 },    // Medium bubble
    { x: 60, y: 70, r: 35 }     // Large bubble
  ]
}
```

### **Scale Configuration**
```javascript
scales: {
  x: {
    type: 'linear',
    min: 0,                      // Minimum X value
    max: 120                     // Maximum X value
  },
  y: {
    type: 'linear',
    min: 0,                      // Minimum Y value
    max: 120                     // Maximum Y value
  }
}
```

## Best Practices

### **Size Scaling**
- **Appropriate ranges** - Ensure radius values make sense for your data
- **Visual balance** - Avoid extremely large or small bubbles
- **Consistent units** - Use same units for radius across all data points
- **Clear legend** - Explain what the bubble sizes represent

### **Color and Transparency**
- **Semi-transparent fills** - Allow overlapping bubbles to be visible
- **Border definition** - Clear boundaries for each bubble
- **Hover effects** - Enhanced visibility on interaction
- **Accessibility** - Ensure sufficient contrast for visibility

### **Data Organization**
- **Logical grouping** - Organize related bubbles together
- **Clear labeling** - Descriptive dataset names
- **Appropriate scales** - Set ranges that accommodate all data
- **Outlier handling** - Consider how to display extreme values

## Next Steps

- [Basic Scatter Chart](/chartjs/scatter-charts)
- [Scatter with Line](/chartjs/scatter-charts/with-line)
- [Multi-Dataset Scatter](/chartjs/scatter-charts/multi-dataset)
- [Multi-Dataset Bubble](/chartjs/scatter-charts/multi-bubble)
