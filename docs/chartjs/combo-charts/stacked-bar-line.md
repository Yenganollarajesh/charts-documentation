---
title: Stacked Bar + Line Combo Chart
description: Combo chart combining stacked bars with a line overlay
---

# Stacked Bar + Line Combo Chart

A combo chart that combines stacked bars with a line chart overlay, allowing you to show both individual components and their combined total. Perfect for displaying detailed breakdowns alongside overall trends.

<script setup>
import StackedBarLineComboChartExample from '../components/StackedBarLineComboChartExample.vue'
</script>

<StackedBarLineComboChartExample />

## Chart Configuration

```javascript
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Product A (Stacked)',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
      type: 'bar',
      stack: 'stack1'  // Groups bars together
    },
    {
      label: 'Product B (Stacked)',
      data: [8, 15, 7, 12, 9, 11],
      backgroundColor: 'rgba(54, 162, 235, 0.8)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 1,
      type: 'bar',
      stack: 'stack1'  // Same stack group
    },
    {
      label: 'Total Revenue (Line)',
      data: [20, 34, 10, 17, 11, 14],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      type: 'line',
      pointRadius: 6,
      pointHoverRadius: 8
    }
  ]
}
```

## Key Features

### **Stacked Bar Chart**
- **Component breakdown** - Shows individual product contributions
- **Visual stacking** - Bars are stacked on top of each other
- **Color coding** - Each product has a distinct color
- **Stack grouping** - Uses `stack: 'stack1'` to group bars together

### **Line Chart Overlay**
- **Total trend** - Shows combined performance over time
- **Smooth curves** - Uses `tension: 0.4` for smooth lines
- **Point markers** - Clear data point indicators
- **Fill area** - Subtle background fill for visual appeal

### **Data Relationship**
- **Component vs. Total** - Individual parts vs. overall result
- **Visual correlation** - Easy to see how components contribute to total
- **Trend analysis** - Identify patterns in both individual and combined data
- **Performance comparison** - Compare product performance and total growth

## Use Cases

### **Sales Analysis**
- **Product breakdown** - Individual product sales vs. total revenue
- **Regional performance** - Sales by region vs. company total
- **Channel analysis** - Sales by channel vs. overall performance
- **Seasonal trends** - Monthly breakdown vs. annual trends

### **Financial Reporting**
- **Revenue streams** - Different revenue sources vs. total income
- **Cost analysis** - Cost categories vs. total expenses
- **Profit margins** - Individual product margins vs. overall profit
- **Budget tracking** - Budget categories vs. total spending

## Configuration Options

### **Stacking Configuration**
```javascript
{
  type: 'bar',
  stack: 'stack1',        // Groups bars together
  backgroundColor: 'color',
  borderColor: 'color',
  borderWidth: 1
}
```

### **Line Chart Styling**
```javascript
{
  type: 'line',
  borderColor: 'color',
  backgroundColor: 'rgba(color, 0.1)',
  borderWidth: 3,
  fill: true,             // Fill area under line
  tension: 0.4,           // Smooth curve
  pointRadius: 6,          // Point size
  pointHoverRadius: 8     // Hover point size
}
```

### **Chart Options**
```javascript
options: {
  scales: {
    x: {
      title: {
        display: true,
        text: 'Month'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Sales Units'
      }
    }
  }
}
```

## Best Practices

### **Stacking Strategy**
- **Logical grouping** - Stack related data together
- **Color consistency** - Use consistent colors across charts
- **Stack naming** - Use descriptive stack identifiers
- **Order management** - Consider the order of stacked elements

### **Line Integration**
- **Data alignment** - Ensure line data matches stacked totals
- **Visual separation** - Make line distinct from bars
- **Point sizing** - Appropriate point sizes for visibility
- **Fill transparency** - Subtle background fills

### **Data Organization**
- **Component clarity** - Clear labeling of stacked components
- **Total calculation** - Accurate total values for line chart
- **Update consistency** - Keep all data synchronized
- **Performance monitoring** - Monitor rendering performance

## Next Steps

- [Basic Combo Chart](/chartjs/combo-charts)
- [Dual Y-Axis Combo Chart](/chartjs/combo-charts/dual-y-axis)
- [Line + Area Range](/chartjs/combo-charts/line-area-range)
- [Scatter + Trend Line](/chartjs/combo-charts/scatter-trend-line)
