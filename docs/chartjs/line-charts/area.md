---
title: Area Chart
description: Learn how to create filled area charts with Chart.js
---

# Area Chart

An area chart is a line chart with the area below the line filled. This is great for showing cumulative data or emphasizing the volume of change over time.

## Example

<AreaChartExample />

<script setup>
import AreaChartExample from '../components/AreaChartExample.vue'
</script>

## Configuration

```javascript
{
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Revenue',
      data: [12, 19, 3, 5, 2],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
      tension: 0.4
    }]
  }
}
```

## Key Properties

- **`fill: true`** - Enables area filling below the line
- **`backgroundColor`** - Sets the fill color with transparency
- **`tension`** - Controls line smoothness (0.4 for smooth curves)

## Use Cases

- Revenue growth over time
- Cumulative sales data
- Population growth trends
- Resource consumption tracking

---

*[← Back to Line Charts](/chartjs/line-charts)*
