---
title: Multi-Dataset Bubble Chart
description: Bubble chart with multiple datasets for comprehensive comparison
---

# Multi-Dataset Bubble Chart

A bubble chart that displays multiple datasets simultaneously, allowing for comprehensive comparison of three-dimensional data across different groups, categories, or time periods.

<script setup>
import MultiBubbleChartExample from '../components/MultiBubbleChartExample.vue'
</script>

<MultiBubbleChartExample />

## Chart Configuration

```javascript
const data = {
  datasets: [
    {
      label: 'Dataset A',
      data: [
        { x: 20, y: 30, r: 3 },
        { x: 40, y: 50, r: 6 },
        { x: 60, y: 70, r: 9 }
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2
    },
    {
      label: 'Dataset B',
      data: [
        { x: 25, y: 35, r: 5 },
        { x: 45, y: 55, r: 8 },
        { x: 65, y: 75, r: 12 }
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2
    },
    {
      label: 'Dataset C',
      data: [
        { x: 30, y: 40, r: 4 },
        { x: 50, y: 60, r: 7 },
        { x: 70, y: 80, r: 10 }
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 2
    }
  ]
}
```

## Key Features

### **Multi-Dimensional Comparison**
- **Three datasets** - Compare different groups simultaneously
- **Visual distinction** - Unique colors for each dataset
- **Size variation** - Bubble sizes represent third dimension
- **Coordinate system** - Shared X and Y scales for easy comparison

### **Advanced Visualization**
- **Overlapping bubbles** - Semi-transparent fills show overlaps
- **Legend integration** - Clear identification of all datasets
- **Interactive elements** - Hover effects for each dataset
- **Scale consistency** - Unified ranges across all datasets

### **Data Organization**
- **Structured format** - Clear separation between datasets
- **Flexible content** - Different numbers of bubbles per dataset
- **Consistent styling** - Uniform appearance within each dataset
- **Comparative ready** - Easy to spot patterns and differences

## Use Cases

### **Business Analytics**
- **Market segments** - Compare customer groups by multiple metrics
- **Product performance** - Different products across various dimensions
- **Regional analysis** - Geographic comparisons with size indicators
- **Time-based data** - Performance trends with magnitude changes

### **Research Applications**
- **Experimental groups** - Control vs. treatment comparisons
- **Demographic studies** - Age, income, and behavior patterns
- **Environmental research** - Multiple locations with varying conditions
- **Quality assessment** - Different parameters across samples

## Configuration Options

### **Dataset Styling**
```javascript
{
  label: 'Dataset Name',                    // Legend label
  backgroundColor: 'rgba(255, 99, 132, 0.6)',  // Fill color with transparency
  borderColor: 'rgb(255, 99, 132)',            // Border color
  borderWidth: 2,                              // Border thickness
  hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',  // Hover fill
  hoverBorderColor: 'rgb(255, 99, 132)'              // Hover border
}
```

### **Multi-Dataset Configuration**
```javascript
{
  datasets: [
    // Dataset A
    {
      label: 'Group A',
      data: [{ x: 20, y: 30, r: 15 }, ...],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgb(255, 99, 132)'
    },
    // Dataset B
    {
      label: 'Group B',
      data: [{ x: 25, y: 35, r: 20 }, ...],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgb(54, 162, 235)'
    }
  ]
}
```

### **Legend and Interaction**
```javascript
plugins: {
  legend: {
    display: true,                 // Show legend
    position: 'top',               // Legend position
    labels: {
      usePointStyle: true,         // Use bubble style in legend
      padding: 20                  // Spacing between items
    }
  }
}
```

## Best Practices

### **Color Management**
- **Distinct palettes** - Ensure datasets are easily distinguishable
- **Transparency balance** - Enough opacity to see overlaps
- **Accessibility** - Consider colorblind-friendly combinations
- **Consistency** - Use consistent colors across related charts

### **Data Organization**
- **Logical grouping** - Group related datasets together
- **Clear labeling** - Descriptive dataset names
- **Consistent structure** - Similar data formats across datasets
- **Appropriate scales** - Set ranges that accommodate all data

### **Size Considerations**
- **Proportional scaling** - Ensure bubble sizes make sense
- **Overlap handling** - Consider how overlapping bubbles appear
- **Extreme values** - Handle very large or small bubbles appropriately
- **Visual balance** - Maintain overall chart aesthetics

## Next Steps

- [Basic Scatter Chart](/chartjs/scatter-charts)
- [Scatter with Line](/chartjs/scatter-charts/with-line)
- [Multi-Dataset Scatter](/chartjs/scatter-charts/multi-dataset)
- [Bubble Chart](/chartjs/scatter-charts/bubble)
