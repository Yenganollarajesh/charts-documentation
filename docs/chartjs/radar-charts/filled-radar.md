---
title: Filled Radar Chart
description: Learn how to create filled radar charts with Chart.js
---

# Filled Radar Chart

A filled radar chart adds filled areas to the radar chart, making it easier to visualize the data and compare different datasets with enhanced visual impact.

## Example

<FilledRadarChartExample />

<script setup>
import FilledRadarChartExample from '../components/FilledRadarChartExample.vue'
</script>

## Configuration

```javascript
{
  type: 'radar',
  data: {
    labels: ['Speed', 'Handling', 'Safety', 'Comfort', 'Efficiency'],
    datasets: [{
      label: 'Product A',
      data: [80, 75, 90, 85, 70],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 3,
      fill: true
    }]
  }
}
```

## Key Properties

- **`fill: true`** - Enables area filling
- **`backgroundColor`** - Sets the fill color with transparency
- **`borderWidth`** - Controls border thickness
- **`pointRadius`** - Sets point size

## Use Cases

- Performance visualization with filled areas
- Skill assessment with enhanced visual impact
- Product comparison with clear areas
- Progress tracking with filled regions
- Quality metrics with visual emphasis

---

*[← Back to Radar Charts](/chartjs/radar-charts)*
