---
title: Multi-Type Combo Chart
description: Learn how to create multi-type combo charts with Chart.js
---

# Multi-Type Combo Chart

A multi-type combo chart combines three or more different chart types in a single visualization, allowing you to display complex data relationships with multiple scales and chart types.

## Example

<MultiTypeComboChartExample />

<script setup>
import MultiTypeComboChartExample from '../components/MultiTypeComboChartExample.vue'
</script>

## Configuration

```javascript
{
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        type: 'bar',
        label: 'Volume',
        data: [100, 150, 200, 250, 300],
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        yAxisID: 'y'
      },
      {
        type: 'line',
        label: 'Trend',
        data: [50, 75, 100, 125, 150],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y1'
      },
      {
        type: 'scatter',
        label: 'Outliers',
        data: [{x: 2, y: 180}, {x: 4, y: 320}],
        backgroundColor: 'rgba(255, 205, 86, 0.8)',
        yAxisID: 'y'
      }
    ]
  }
}
```

## Key Properties

- **Multiple chart types** - Bar, line, scatter, etc.
- **Multiple Y-axes** - Different scales for different data
- **`yAxisID`** - Links datasets to specific axes
- **Mixed data types** - Volume, trends, and outliers

## Use Cases

- Complex financial analysis
- Multi-metric performance tracking
- Scientific data visualization
- Business intelligence dashboards
- Research data analysis

---

*[← Back to Combo Charts](/chartjs/combo-charts)*
