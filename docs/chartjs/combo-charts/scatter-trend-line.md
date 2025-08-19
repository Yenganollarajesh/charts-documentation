---
title: Scatter + Trend Line Combo Chart
description: Combo chart combining scatter points with a trend line
---

# Scatter + Trend Line Combo Chart

A combo chart that combines scatter points with a trend line, perfect for showing individual data points alongside their overall trend or regression line. Ideal for correlation analysis, trend identification, and statistical modeling.

<script setup>
import ScatterTrendLineComboChartExample from '../components/ScatterTrendLineComboChartExample.vue'
</script>

<ScatterTrendLineComboChartExample />

## Chart Configuration

```javascript
const data = {
  datasets: [
    {
      label: 'Data Points (Scatter)',
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
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 8,
      type: 'scatter'
    },
    {
      label: 'Trend Line',
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
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.1)',
      borderWidth: 3,
      fill: false,
      tension: 0.1,
      type: 'line',
      pointRadius: 0,        // No visible points for trend line
      showLine: true         // Ensure line is visible
    }
  ]
}
```

## Key Features

### **Scatter Data Points**
- **Individual observations** - Each point represents a specific data value
- **Visual impact** - Clear, visible points with hover effects
- **Data distribution** - Shows spread and clustering of data
- **Interactive elements** - Hover effects for detailed information

### **Trend Line Overlay**
- **Regression line** - Shows overall trend or relationship
- **Smooth curve** - Uses minimal tension for straight trend lines
- **No points** - Clean line without distracting point markers
- **Pattern identification** - Easy to see overall direction

### **Data Analysis**
- **Correlation visualization** - Shows relationship between variables
- **Trend identification** - Clear upward/downward patterns
- **Outlier detection** - Points that deviate from trend
- **Statistical modeling** - Foundation for regression analysis

## Use Cases

### **Statistical Analysis**
- **Correlation studies** - Relationship between two variables
- **Regression analysis** - Predictive modeling preparation
- **Data quality assessment** - Identify outliers and patterns
- **Hypothesis testing** - Visual data exploration

### **Business Intelligence**
- **Sales analysis** - Revenue vs. marketing spend
- **Performance metrics** - Employee performance vs. experience
- **Customer behavior** - Purchase frequency vs. customer value
- **Market research** - Price vs. demand relationships

### **Scientific Research**
- **Experimental data** - Variable relationships in experiments
- **Survey analysis** - Response patterns and correlations
- **Quality control** - Process parameters vs. output quality
- **Environmental studies** - Climate factors vs. outcomes

## Configuration Options

### **Scatter Point Styling**
```javascript
{
  type: 'scatter',
  backgroundColor: 'rgba(255, 99, 132, 0.8)',
  borderColor: 'rgb(255, 99, 132)',
  borderWidth: 2,
  pointRadius: 6,              // Normal point size
  pointHoverRadius: 8          // Hover point size
}
```

### **Trend Line Styling**
```javascript
{
  type: 'line',
  borderColor: 'rgb(54, 162, 235)',
  borderWidth: 3,              // Bold line
  fill: false,                 // No fill under line
  tension: 0.1,                // Minimal curve (straight line)
  pointRadius: 0,              // No visible points
  showLine: true               // Ensure line visibility
}
```

### **Chart Options**
```javascript
options: {
  scales: {
    x: {
      type: 'linear',           // Numeric x-axis
      position: 'bottom',
      title: {
        display: true,
        text: 'X Axis'
      }
    },
    y: {
      type: 'linear',           // Numeric y-axis
      position: 'left',
      title: {
        display: true,
        text: 'Y Axis'
      }
    }
  }
}
```

## Best Practices

### **Data Point Design**
- **Appropriate sizing** - Points should be visible but not overwhelming
- **Color contrast** - Ensure points stand out from background
- **Hover effects** - Interactive elements for user engagement
- **Border definition** - Clear boundaries for each point

### **Trend Line Integration**
- **Line prominence** - Make trend line clearly visible
- **Minimal tension** - Use low tension for straight trend lines
- **Point hiding** - Remove points from trend line to reduce clutter
- **Color distinction** - Different color from scatter points

### **Data Organization**
- **Coordinate consistency** - Ensure x,y pairs are properly aligned
- **Scale optimization** - Set appropriate ranges for both axes
- **Update synchronization** - Keep scatter and trend data aligned
- **Performance monitoring** - Monitor rendering for large datasets

## Next Steps

- [Basic Combo Chart](/chartjs/combo-charts)
- [Dual Y-Axis Combo Chart](/chartjs/combo-charts/dual-y-axis)
- [Stacked Bar + Line](/chartjs/combo-charts/stacked-bar-line)
- [Line + Area Range](/chartjs/combo-charts/line-area-range)
