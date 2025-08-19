---
title: Doughnut Chart
description: Learn how to create doughnut charts with Chart.js
---

# Doughnut Chart

A doughnut chart is a pie chart with a hollow center, allowing you to display additional information in the center or create a more modern visual appearance.

## Example

<DoughnutChartExample />

<script setup>
import DoughnutChartExample from '../components/DoughnutChartExample.vue'
</script>

## Configuration

```javascript
{
  type: 'doughnut',
  data: {
    labels: ['Desktop', 'Mobile', 'Tablet', 'Other'],
    datasets: [{
      label: 'Device Usage',
      data: [65, 25, 8, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 205, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)'
      ],
      borderWidth: 3
    }]
  },
  options: {
    cutout: '60%',
    responsive: true,
    maintainAspectRatio: false
  }
}
```

## Key Properties

- **`type: 'doughnut'`** - Creates the doughnut chart
- **`cutout: '60%'`** - Controls the size of the center hole
- **`borderWidth`** - Sets the thickness of slice borders
- **`hoverOffset`** - Controls slice separation on hover

## Use Cases

- Budget allocation visualization
- Survey response breakdowns
- Market share analysis
- Resource distribution
- Progress tracking with center metrics

---

*[← Back to Pie Charts](/chartjs/pie-charts)*
