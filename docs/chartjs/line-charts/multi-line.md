---
title: Multi-Line Chart
description: Learn how to create multi-line charts with multiple datasets using Chart.js
---

# Multi-Line Chart

A multi-line chart displays multiple datasets on the same chart, making it easy to compare different metrics or categories over time.

## Example

<MultiLineChartExample />

<script setup>
import MultiLineChartExample from '../components/MultiLineChartExample.vue'
</script>

## Configuration

```javascript
{
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)'
      },
      {
        label: 'Expenses',
        data: [8, 15, 7, 12, 9],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)'
      }
    ]
  }
}
```

## Key Properties

- **Multiple datasets** - Each with its own label, color, and data
- **Different colors** - Ensure datasets are visually distinct
- **Legend** - Automatically generated for all datasets
- **Interactive** - Hover over any line to see its data

## Use Cases

- Revenue vs. Expenses comparison
- Multiple product performance
- Regional data comparison
- Before/after analysis

---

*[← Back to Line Charts](/chartjs/line-charts)*
