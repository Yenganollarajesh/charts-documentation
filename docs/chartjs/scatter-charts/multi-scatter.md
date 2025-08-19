---
title: Multi-Scatter Chart
description: Learn how to create multi-scatter charts with Chart.js
---

# Multi-Scatter Chart

A multi-scatter chart displays multiple datasets with different colors and styles, allowing you to compare relationships between different groups or categories.

## Example

<MultiScatterChartExample />

<script setup>
import MultiScatterChartExample from '../components/MultiScatterChartExample.vue'
</script>

## Configuration

```javascript
{
  type: 'scatter',
  data: {
    datasets: [
      {
        label: 'Group A',
        data: [
          { x: 1, y: 2 },
          { x: 2, y: 4 },
          { x: 3, y: 6 }
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgb(255, 99, 132)'
      },
      {
        label: 'Group B',
        data: [
          { x: 1, y: 8 },
          { x: 2, y: 6 },
          { x: 3, y: 4 }
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.8)',
        borderColor: 'rgb(54, 162, 235)'
      }
    ]
  }
}
```

## Key Properties

- **Multiple datasets** - Each dataset represents a different group
- **Different colors** - Each group has distinct colors
- **Independent styling** - Customize each dataset separately
- **Legend support** - Clear identification of groups

## Use Cases

- Comparing multiple product categories
- Analyzing different demographic groups
- Research data with multiple variables
- Performance comparison across teams
- A/B testing results visualization

---

*[← Back to Scatter Charts](/chartjs/scatter-charts)*
