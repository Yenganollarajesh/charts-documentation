---
title: Dual Y-Axis Combo Chart
description: Combo chart with two y-axes for different data scales
---

# Dual Y-Axis Combo Chart

A combo chart that combines bar and line charts with dual y-axes, allowing you to visualize data with different scales on the same chart. Perfect for comparing metrics that have vastly different ranges or units.

<script setup>
import DualYAxisComboChartExample from '../components/DualYAxisComboChartExample.vue'
</script>

<DualYAxisComboChartExample />

## Chart Configuration

```javascript
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales Volume (Bar)',
      data: [120, 150, 180, 200, 220, 250],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      type: 'bar',
      yAxisID: 'y'  // Left y-axis
    },
    {
      label: 'Revenue % (Line)',
      data: [15, 25, 35, 45, 55, 65],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      type: 'line',
      yAxisID: 'y1'  // Right y-axis
    }
  ]
}
```

## Key Features

### **Dual Y-Axes**
- **Left Y-axis** - For bar chart data (Sales Volume)
- **Right Y-axis** - For line chart data (Revenue %)
- **Independent scales** - Each axis can have different ranges and units
- **Clear labeling** - Distinct titles for each axis

### **Chart Combination**
- **Bar chart** - Shows discrete values with clear visual impact
- **Line chart** - Shows trends and patterns over time
- **Different data types** - Can combine various metrics effectively
- **Visual distinction** - Easy to differentiate between datasets

### **Scale Management**
- **Automatic scaling** - Each axis scales independently
- **Grid lines** - Only left axis shows grid lines to avoid confusion
- **Tick customization** - Different formatting for each axis
- **Range optimization** - Each axis uses its full range effectively

## Use Cases

### **Business Analytics**
- **Sales vs. Conversion Rate** - Volume vs. percentage metrics
- **Revenue vs. Growth Rate** - Absolute vs. relative performance
- **Units Sold vs. Profit Margin** - Quantity vs. percentage data
- **Customer Count vs. Satisfaction Score** - Count vs. rating data

### **Financial Analysis**
- **Stock Price vs. Volume** - Price vs. trading volume
- **Revenue vs. Growth %** - Absolute vs. percentage growth
- **Market Cap vs. P/E Ratio** - Value vs. ratio metrics
- **Cash Flow vs. Debt Ratio** - Flow vs. ratio data

## Configuration Options

### **Y-Axis Configuration**
```javascript
scales: {
  y: {
    type: 'linear',
    position: 'left',
    title: {
      display: true,
      text: 'Sales Volume'
    }
  },
  y1: {
    type: 'linear',
    position: 'right',
    title: {
      display: true,
      text: 'Revenue %'
    },
    grid: {
      drawOnChartArea: false  // No grid lines for right axis
    }
  }
}
```

### **Dataset Configuration**
```javascript
{
  label: 'Dataset Name',
  type: 'bar',           // or 'line'
  yAxisID: 'y',          // or 'y1' for right axis
  data: [values],
  backgroundColor: 'color',
  borderColor: 'color'
}
```

### **Axis Styling**
```javascript
{
  title: {
    display: true,
    text: 'Axis Label',
    font: {
      size: 14,
      weight: '600'
    }
  },
  grid: {
    color: 'rgba(0, 0, 0, 0.1)',
    lineWidth: 1
  }
}
```

## Best Practices

### **Axis Selection**
- **Left axis** - Use for primary or larger-scale data
- **Right axis** - Use for secondary or smaller-scale data
- **Clear labeling** - Make axis purposes obvious
- **Consistent units** - Use appropriate units for each axis

### **Visual Design**
- **Color coding** - Use distinct colors for each dataset
- **Legend clarity** - Clear dataset identification
- **Grid management** - Avoid overlapping grid lines
- **Scale ranges** - Optimize each axis for its data

### **Data Considerations**
- **Scale differences** - Ensure axes have meaningful ranges
- **Data relationships** - Show related but differently-scaled metrics
- **Update frequency** - Consider how often data changes
- **Performance impact** - Monitor rendering performance

## Next Steps

- [Basic Combo Chart](/chartjs/combo-charts)
- [Stacked Bar + Line](/chartjs/combo-charts/stacked-bar-line)
- [Line + Area Range](/chartjs/combo-charts/line-area-range)
- [Scatter + Trend Line](/chartjs/combo-charts/scatter-trend-line)
