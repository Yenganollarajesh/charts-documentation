---
title: Grouped Bar Chart
description: Learn how to create grouped bar charts with Chart.js
---

# Grouped Bar Chart

A grouped bar chart displays multiple datasets side by side, making it easy to compare values across different categories and groups.

## Example

<GroupedBarChartExample />

<script setup>
import GroupedBarChartExample from '../components/GroupedBarChartExample.vue'
</script>

## Configuration

```javascript
{
  type: 'bar',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'North Region',
        data: [65, 59, 80, 81],
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2
      },
      {
        label: 'South Region',
        data: [28, 48, 40, 19],
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2
      }
    ]
  }
}
```

## Key Properties

- **Multiple datasets** - Each dataset creates a group of bars
- **Different colors** - Each group has distinct colors
- **Side-by-side display** - Bars are grouped by category

## Use Cases

- Regional performance comparison
- Product category analysis
- Department budget comparison
- Time period comparisons

---

*[← Back to Bar Charts](/chartjs/bar-charts)*
