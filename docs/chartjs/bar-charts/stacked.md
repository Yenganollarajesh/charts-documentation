---
title: Stacked Bar Chart
description: Learn how to create stacked bar charts with Chart.js
---

# Stacked Bar Chart

A stacked bar chart shows multiple datasets stacked on top of each other, making it easy to see both individual values and totals.

## Example

<StackedBarChartExample />

<script setup>
import StackedBarChartExample from '../components/StackedBarChartExample.vue'
</script>

## Configuration

```javascript
{
  type: 'bar',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Product A',
        data: [45, 52, 38, 47],
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        stack: 'Stack 0'
      },
      {
        label: 'Product B',
        data: [32, 28, 45, 39],
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        stack: 'Stack 0'
      }
    ]
  },
  options: {
    scales: {
      x: { stacked: true },
      y: { stacked: true }
    }
  }
}
```

## Key Properties

- **`stack: 'Stack 0'`** - Groups bars into the same stack
- **`x: { stacked: true }`** - Enables horizontal stacking
- **`y: { stacked: true }`** - Enables vertical stacking

## Use Cases

- Revenue breakdown by product
- Time allocation by activity
- Budget allocation by department
- Resource usage by category

---

*[← Back to Bar Charts](/chartjs/bar-charts)*
