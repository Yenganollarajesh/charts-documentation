---
title: Pie Charts
---

<script setup>
import PieChartExample from './components/PieChartExample.vue'
</script>

# Pie Charts

Pie charts are perfect for displaying data as proportions of a whole. They're excellent for showing percentages, market shares, survey results, and any data that represents parts of a total.

## Basic Pie Chart

Here's a comprehensive interactive pie chart with full configuration details:

<PieChartExample />

## Pie Chart Features

### 1. **Proportional Representation**
Pie charts excel at showing how parts relate to the whole:
- Market share distribution
- Budget allocation percentages
- Survey response breakdowns
- Population demographics

### 2. **Visual Impact**
Clear visual representation of proportions:
- Easy to compare slice sizes
- Intuitive understanding of percentages
- Color-coded categories
- Interactive tooltips with exact values

### 3. **Interactive Elements**
- **Hover Tooltips**: See exact values and percentages
- **Click Events**: Respond to user interactions
- **Animations**: Smooth transitions and updates
- **Responsive Design**: Adapts to container size

## Configuration Options

### Basic Configuration

```javascript
const config = {
  type: 'pie',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [{
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 205, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)'
      ],
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Color Distribution'
      }
    }
  }
}
```

### Advanced Styling

```javascript
const advancedConfig = {
  type: 'pie',
  data: {
    labels: ['Desktop', 'Mobile', 'Tablet', 'Other'],
    datasets: [{
      data: [65, 25, 8, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 205, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)'
      ],
      borderWidth: 3,
      hoverOffset: 10
    }]
  }
}
```

## Pie Chart Variants

Explore different pie chart variations to see how they can be customized:

- **[Doughnut Chart](/chartjs/pie-charts/doughnut)** - Pie chart with a hollow center for additional information
- **[Polar Area Chart](/chartjs/pie-charts/polar-area)** - Combines pie chart with area chart for enhanced data visualization

## Best Practices

### 1. **Data Preparation**
- Limit to 5-7 categories for clarity
- Ensure data adds up to 100% or total
- Order slices by size (largest to smallest)
- Handle very small values appropriately

### 2. **Visual Design**
- Choose colors that are accessible and distinguishable
- Use consistent color schemes across related charts
- Ensure sufficient contrast between slices
- Consider using patterns for monochrome printing

### 3. **User Experience**
- Provide clear labels and titles
- Include legends for category identification
- Make tooltips informative with percentages
- Consider adding value labels on slices

## Common Use Cases

- **Market Analysis**: Market share distribution across competitors
- **Survey Results**: Response breakdowns and preferences
- **Budget Planning**: Allocation of resources and expenses
- **Demographics**: Population distribution by age, location, etc.
- **Performance Metrics**: Distribution of time or resources

## Next Steps

- Learn about [Line Charts](/chartjs/line-charts)
- Explore [Bar Charts](/chartjs/bar-charts)
- See [Interactive Example: Tick Control](/chartjs/line-charts#interactive-example-tick-control)

---

*Ready to create your own pie chart? Check out the interactive examples above and explore the different variants!*
