---
title: Multi-Radar Chart
description: Learn how to create multi-radar charts with Chart.js
---

# Multi-Radar Chart

A multi-radar chart displays multiple datasets on the same radar chart, allowing you to compare different entities across the same set of variables.

## Example

<MultiRadarChartExample />

<script setup>
import MultiRadarChartExample from '../components/MultiRadarChartExample.vue'
</script>

## Configuration

```javascript
{
  type: 'radar',
  data: {
    labels: ['Speed', 'Handling', 'Safety', 'Comfort', 'Efficiency'],
    datasets: [
      {
        label: 'Product A',
        data: [80, 75, 90, 85, 70],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2
      },
      {
        label: 'Product B',
        data: [70, 85, 75, 80, 90],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 2
      }
    ]
  }
}
```

## Key Properties

- **Multiple datasets** - Each dataset represents a different entity
- **Different colors** - Each entity has distinct colors
- **Overlapping areas** - Shows comparison clearly
- **Legend support** - Clear identification of entities

## Use Cases

- Product comparison across features
- Team performance evaluation
- Competitor analysis
- Before/after comparisons
- Multi-location performance

---

*[← Back to Radar Charts](/chartjs/radar-charts)*
