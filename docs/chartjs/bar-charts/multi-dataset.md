---
title: Multi-Dataset Bar Chart
description: Learn how to create multi-dataset bar charts with Chart.js
---

# Multi-Dataset Bar Chart

A multi-dataset bar chart combines different chart types in a single visualization, allowing you to show relationships between different types of data.

## Example

<MultiDatasetBarChartExample />

<script setup>
import MultiDatasetBarChartExample from '../components/MultiDatasetBarChartExample.vue'
</script>

## Configuration

```javascript
{
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        type: 'bar',
        label: 'Actual Sales',
        data: [65, 59, 80, 81],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        order: 2
      },
      {
        type: 'line',
        label: 'Sales Target',
        data: [70, 65, 75, 80],
        borderColor: 'rgb(255, 99, 132)',
        fill: true,
        tension: 0.4,
        order: 1
      }
    ]
  }
}
```

## Key Properties

- **Mixed chart types** - Combine bars, lines, and other types
- **`order` property** - Controls rendering order
- **Different visualizations** - Bars for actual data, lines for targets

## Use Cases

- Actual vs target comparisons
- Performance tracking
- Budget vs actual spending
- Sales forecasting

---

*[← Back to Bar Charts](/chartjs/bar-charts)*
