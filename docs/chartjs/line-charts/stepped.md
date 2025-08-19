---
title: Stepped Line Chart
description: Learn how to create stepped line charts with Chart.js
---

# Stepped Line Chart

A stepped line chart shows data as steps rather than continuous lines. This is perfect for data that changes at specific intervals or when you want to emphasize discrete changes.

## Example

<SteppedChartExample />

<script setup>
import SteppedChartExample from '../components/SteppedChartExample.vue'
</script>

## Configuration

```javascript
{
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Inventory',
      data: [100, 85, 120, 95, 110],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      stepped: true
    }]
  }
}
```

## Key Properties

- **`stepped: true`** - Enables stepped line rendering
- **`stepped: 'before'`** - Steps before the data point
- **`stepped: 'after'`** - Steps after the data point
- **`stepped: 'middle'`** - Steps in the middle between points

## Use Cases

- Inventory levels over time
- Process step transitions
- Discrete state changes
- Threshold-based data

---

*[← Back to Line Charts](/chartjs/line-charts)*
