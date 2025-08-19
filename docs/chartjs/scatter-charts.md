---
title: Scatter Charts
description: Data visualization with scatter plots and bubble charts
---

# Scatter Charts

Scatter charts are excellent for showing the relationship between two variables. Each data point represents a single observation with X and Y coordinates, making them perfect for correlation analysis, trend identification, and outlier detection.

<script setup>
import BasicScatterChartExample from './components/BasicScatterChartExample.vue'
</script>

<BasicScatterChartExample />

## Chart Configuration

```javascript
const data = {
  datasets: [
    {
      label: 'Data Points',
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
    }
  ]
}
```

## Scatter Chart Features

### **Coordinate-Based Visualization**
- **X and Y coordinates** - Each point represents (x, y) values
- **No categorical labels** - Uses numerical scales on both axes
- **Flexible data structure** - Points can be anywhere on the plane
- **Outlier detection** - Easy to spot unusual data points

### **Customization Options**
- **Point styling** - Size, color, border, and hover effects
- **Axis configuration** - Linear scales with customizable ranges
- **Grid lines** - Background reference lines for readability
- **Interactive features** - Hover effects and tooltips

### **Data Format**
- **Object format** - `{ x: value, y: value }` for each point
- **Array format** - `[x, y]` pairs also supported
- **Mixed data** - Can combine with other chart types

## Configuration Options

### **Basic Configuration**
```javascript
{
  type: 'scatter',
  data: sampleData,
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
}
```

### **Point Styling**
```javascript
{
  pointRadius: 6,           // Normal point size
  pointHoverRadius: 8,      // Hover point size
  pointBackgroundColor: 'rgba(255, 99, 132, 0.8)',
  pointBorderColor: 'rgb(255, 99, 132)',
  pointBorderWidth: 2
}
```

### **Axis Configuration**
```javascript
scales: {
  x: {
    type: 'linear',         // Linear scale for X
    position: 'bottom',     // X-axis position
    title: { display: true, text: 'X Axis' }
  },
  y: {
    type: 'linear',         // Linear scale for Y
    position: 'left',       // Y-axis position
    title: { display: true, text: 'Y Axis' }
  }
}
```

## Scatter Chart Variants

Chart.js offers several scatter chart variations to suit different data visualization needs:

- **[Scatter with Line](/chartjs/scatter-charts/with-line)** - Scatter points connected by lines
- **[Multi-Dataset Scatter](/chartjs/scatter-charts/multi-dataset)** - Multiple datasets for comparison
- **[Bubble Chart](/chartjs/scatter-charts/bubble)** - Scatter points with varying sizes
- **[Multi-Dataset Bubble](/chartjs/scatter-charts/multi-bubble)** - Multiple bubble datasets

## Best Practices

### **Data Preparation**
- **Clean coordinates** - Ensure X and Y values are valid numbers
- **Appropriate scales** - Set min/max values that fit your data
- **Consistent units** - Use same units for similar variables
- **Remove outliers** - Consider filtering extreme values

### **Visual Design**
- **Point size** - Make points large enough to be visible
- **Color contrast** - Ensure points stand out from background
- **Grid lines** - Use subtle grid lines for reference
- **Axis labels** - Clear, descriptive axis titles

### **Interactivity**
- **Hover effects** - Show additional data on hover
- **Tooltips** - Display exact coordinate values
- **Click events** - Allow interaction with data points
- **Zoom/pan** - Enable chart navigation for large datasets

## Common Use Cases

### **Correlation Analysis**
- **Relationship studies** - Show how two variables relate
- **Trend identification** - Visualize patterns in data
- **Outlier detection** - Find unusual data points
- **Statistical analysis** - Support regression analysis

### **Scientific Research**
- **Experimental data** - Plot measurement results
- **Survey responses** - Show response patterns
- **Time series** - Track changes over time
- **Comparative studies** - Compare different groups

### **Business Analytics**
- **Performance metrics** - Employee vs. productivity
- **Market analysis** - Price vs. demand
- **Quality control** - Defects vs. production
- **Customer behavior** - Age vs. spending

## Next Steps

- [Scatter with Line](/chartjs/scatter-charts/with-line)
- [Multi-Dataset Scatter](/chartjs/scatter-charts/multi-dataset)
- [Bubble Chart](/chartjs/scatter-charts/bubble)
- [Multi-Dataset Bubble](/chartjs/scatter-charts/multi-bubble)
