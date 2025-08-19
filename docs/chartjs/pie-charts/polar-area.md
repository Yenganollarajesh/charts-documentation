---
title: Polar Area Chart
description: Learn how to create polar area charts with Chart.js
---

# Polar Area Chart

A polar area chart combines the features of pie charts and area charts, displaying data as sectors with areas proportional to the values. This chart type is excellent for showing multiple variables with different scales.

## Example

<PolarAreaChartExample />

<script setup>
import PolarAreaChartExample from '../components/PolarAreaChartExample.vue'
</script>

## Configuration

```javascript
{
  type: 'polarArea',
  data: {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [{
      label: 'Dataset 1',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(255, 205, 86, 0.8)',
        'rgba(201, 203, 207, 0.8)',
        'rgba(54, 162, 235, 0.8)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ],
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
}
```

## Key Properties

- **`type: 'polarArea'`** - Creates the polar area chart
- **`data`** - Values determine the area of each sector
- **`backgroundColor`** - Sets the fill color of sectors
- **`borderColor`** - Sets the border color of sectors
- **`borderWidth`** - Controls border thickness

## Use Cases

- Performance metrics across multiple dimensions
- Survey results with multiple variables
- Resource allocation visualization
- Multi-factor analysis
- Comparative data representation

---

*[← Back to Pie Charts](/chartjs/pie-charts)*
