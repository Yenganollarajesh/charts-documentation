---
title: Horizontal Bar Chart
description: Learn how to create horizontal bar charts with Chart.js
---

# Horizontal Bar Chart

A horizontal bar chart displays data horizontally, making it easier to read long labels and compare values across categories.

## Example

<HorizontalBarChartExample />

<script setup>
import HorizontalBarChartExample from '../components/HorizontalBarChartExample.vue'
</script>

## Configuration

```javascript
{
  type: 'bar',
  data: {
    labels: ['Marketing', 'Sales', 'Development', 'Support', 'Design'],
    datasets: [{
      label: 'Team Performance',
      data: [85, 92, 78, 88, 95],
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false
  }
}
```

## Key Properties

- **`indexAxis: 'y'`** - Makes the chart horizontal
- **`responsive: true`** - Enables responsive behavior
- **`maintainAspectRatio: false`** - Allows custom sizing

## Use Cases

- Team performance comparisons
- Survey results
- Product rankings
- Category comparisons

---

*[← Back to Bar Charts](/chartjs/bar-charts)*
