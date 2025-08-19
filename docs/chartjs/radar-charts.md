---
title: Radar Charts
---

<script setup>
import RadarChartExample from './components/RadarChartExample.vue'
</script>

# Radar Charts

Radar charts (also known as spider charts or star charts) are perfect for displaying multivariate data in a circular format. They're excellent for comparing multiple variables across different categories and identifying strengths and weaknesses.

## Basic Radar Chart

Here's a comprehensive interactive radar chart with full configuration details:

<RadarChartExample />

## Radar Chart Features

### 1. **Multivariate Comparison**
Radar charts excel at showing multiple variables simultaneously:
- Performance metrics across different dimensions
- Skill assessments and evaluations
- Product feature comparisons
- Competitor analysis

### 2. **Circular Visualization**
Clear circular representation of data:
- Easy to compare values across categories
- Visual pattern recognition
- Balanced data presentation
- Intuitive understanding of relationships

### 3. **Interactive Elements**
- **Hover Tooltips**: See exact values for each variable
- **Click Events**: Respond to user interactions
- **Animations**: Smooth transitions and updates
- **Responsive Design**: Adapts to container size

## Configuration Options

### Basic Configuration

```javascript
const config = {
  type: 'radar',
  data: {
    labels: ['Speed', 'Handling', 'Safety', 'Comfort', 'Efficiency'],
    datasets: [{
      label: 'Car A',
      data: [80, 75, 90, 85, 70],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Performance Comparison'
      }
    }
  }
}
```

### Advanced Styling

```javascript
const advancedConfig = {
  type: 'radar',
  data: {
    labels: ['Design', 'Usability', 'Performance', 'Security', 'Scalability'],
    datasets: [{
      label: 'Product A',
      data: [90, 85, 80, 95, 75],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 3,
      pointRadius: 6,
      pointHoverRadius: 8
    }]
  }
}
```

## Radar Chart Variants

Chart.js offers several radar chart variations to suit different data visualization needs:

- **[Multi-Radar Chart](/chartjs/radar-charts/multi-radar)** - Multiple datasets on one radar chart
- **[Filled Radar Chart](/chartjs/radar-charts/filled-radar)** - Radar charts with filled areas
- **[Outlined Radar Chart](/chartjs/radar-charts/outlined)** - Clean radar charts with outlined areas only

## Best Practices

### 1. **Data Preparation**
- Limit to 5-10 variables for clarity
- Use consistent scales across all variables
- Ensure data is normalized appropriately
- Group related variables together

### 2. **Visual Design**
- Choose colors that are accessible and distinguishable
- Use appropriate line thickness and point sizes
- Ensure sufficient contrast between datasets
- Consider using transparency for overlapping areas

### 3. **User Experience**
- Provide clear labels for all variables
- Include legends for multiple datasets
- Make tooltips informative with exact values
- Use consistent color schemes across related charts

## Common Use Cases

- **Performance Reviews**: Employee skill assessments across multiple competencies
- **Product Analysis**: Feature comparison across different products
- **Sports Analytics**: Player performance across various metrics
- **Business Metrics**: KPI comparison across different departments
- **Quality Assessment**: Product quality across different criteria

## Next Steps

- Learn about [Line Charts](/chartjs/line-charts)
- Explore [Bar Charts](/chartjs/bar-charts)
- See [Pie Charts](/chartjs/pie-charts)
- Discover [Scatter Charts](/chartjs/scatter-charts)

---

*Ready to create your own radar chart? Check out the interactive examples above and explore the different variants!*
