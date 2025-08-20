---
title: Line Charts
---

<script setup>
import ChartCodeToggle from './components/ChartCodeToggle.vue'
import LineChartExample from './components/LineChartExample.vue'
</script>

# Line Charts

Line charts are one of the most fundamental and versatile chart types in Chart.js. They excel at showing trends over time, comparing multiple datasets, and visualizing continuous data relationships.

## Basic Line Chart

<ChartCodeToggle 
  chart-name="line"
  :chart-data="{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1
      }
    ]
  }"
  :chart-options="{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Interactive Line Chart Example',
        font: {
          size: 18,
          weight: 'bold'
        },
        padding: 20
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          padding: 15,
          font: {
            size: 14
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12
          },
          padding: 10
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12
          },
          padding: 10
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    },
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }
    }
  }"
>
  <template #chart>
    <LineChartExample />
  </template>
</ChartCodeToggle>

### Chart Configuration

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
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Sales',
    data: [12, 19, 3, 5, 2, 3],
    borderColor: 'rgb(75, 192, 192)',
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    tension: 0.1
  }]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Interactive Line Chart Example',
      font: {
        size: 18,
        weight: 'bold'
      },
      padding: 20
    },
    legend: {
      display: true,
      position: 'top',
      labels: {
        padding: 15,
        font: {
          size: 14
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 12
        },
        padding: 10
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)'
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          size: 12
        },
        padding: 10
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)'
      }
    }
  },
  layout: {
    padding: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }
  }
}
</script>
```



## Line Chart Features

### **Core Capabilities**
- **Trend visualization** - Perfect for time-series data
- **Multiple datasets** - Compare different metrics simultaneously
- **Smooth curves** - Configurable line tension for elegant appearance
- **Fill areas** - Optional background fills for enhanced visual appeal
- **Interactive elements** - Hover effects and click events
- **Responsive design** - Automatically adapts to container size

### **Data Structure**
- **Labels array** - X-axis categories (e.g., months, dates)
- **Datasets array** - Each dataset represents a line series
- **Flexible data** - Supports numeric, date, and categorical values
- **Missing data** - Handles null/undefined values gracefully

### **Styling Options**
- **Line properties** - Color, width, dash patterns, tension
- **Point markers** - Size, color, hover effects
- **Fill areas** - Background colors with transparency
- **Grid customization** - Line styles, colors, and visibility

## Configuration Options

### **Basic Configuration**
```javascript
const options = {
  responsive: true,           // Adapt to container size
  maintainAspectRatio: false, // Allow custom dimensions
  plugins: {
    title: { display: true }, // Show chart title
    legend: { display: true } // Show dataset legend
  }
}
```

### **Scale Configuration**
```javascript
scales: {
  x: {
    title: { display: true, text: 'Month' },
    grid: { color: 'rgba(0, 0, 0, 0.1)' }
  },
  y: {
    title: { display: true, text: 'Sales ($)' },
    ticks: {
      callback: function(value) {
        return '$' + value + 'K';
      }
    }
  }
}
```

### **Dataset Styling**
```javascript
{
  label: 'Sales',
  data: [65, 59, 80, 81, 56, 55],
  borderColor: 'rgb(75, 192, 192)',
  backgroundColor: 'rgba(75, 192, 192, 0.2)',
  borderWidth: 3,
  fill: true,
  tension: 0.4,
  pointRadius: 6,
  pointHoverRadius: 8
}
```

## Line Chart Variants

Chart.js offers several line chart variations to suit different data visualization needs:

- **[Area Chart](/chartjs/line-charts/area)** - Filled areas under lines
- **[Stepped Line Chart](/chartjs/line-charts/stepped)** - Step-wise connections
- **[Dashed Line Chart](/chartjs/line-charts/dashed)** - Custom line patterns
- **[Multi-Line Chart](/chartjs/line-charts/multi-line)** - Multiple datasets
- **[Multi-Line Dashed & Filled Chart](/chartjs/line-charts/multi-line-dashed-filled)** - Advanced styling combinations

## Best Practices

### **Data Organization**
- **Consistent intervals** - Use regular time intervals when possible
- **Clear labeling** - Descriptive dataset names and axis labels
- **Appropriate scales** - Set ranges that highlight data patterns
- **Data validation** - Ensure data quality and handle outliers

### **Visual Design**
- **Color selection** - Use distinct, accessible colors for datasets
- **Line thickness** - Balance visibility with elegance
- **Point sizing** - Appropriate marker sizes for data density
- **Grid styling** - Subtle background lines for reference

### **Performance Optimization**
- **Data limits** - Avoid extremely large datasets
- **Update efficiency** - Use Chart.js update methods for real-time data
- **Memory management** - Properly destroy charts when unmounting
- **Responsive handling** - Optimize for different screen sizes

## Common Use Cases

### **Business Analytics**
- **Sales tracking** - Monthly/quarterly revenue trends
- **Performance metrics** - KPI monitoring over time
- **Customer behavior** - Usage patterns and engagement
- **Market analysis** - Price trends and demand patterns

### **Scientific Research**
- **Time series data** - Experimental results over time
- **Trend analysis** - Statistical pattern identification
- **Comparative studies** - Multiple variable relationships
- **Forecasting** - Predictive modeling visualization

### **Financial Applications**
- **Stock prices** - Market performance tracking
- **Portfolio analysis** - Investment performance over time
- **Budget tracking** - Expense and revenue monitoring
- **Economic indicators** - GDP, inflation, employment trends

## Next Steps

- **[Area Chart](/chartjs/line-charts/area)** - Learn about filled line charts
- **[Stepped Line Chart](/chartjs/line-charts/stepped)** - Explore step-wise connections
- **[Multi-Line Chart](/chartjs/line-charts/multi-line)** - Compare multiple datasets
- **[Bar Charts](/chartjs/bar-charts)** - Discover categorical data visualization
- **[Pie Charts](/chartjs/pie-charts)** - Explore proportional data representation
