---
title: Bar-Line Combo Chart
description: Learn how to create bar-line combo charts with Chart.js
---

# Bar-Line Combo Chart

A bar-line combo chart combines bar and line charts in a single visualization, perfect for showing volume data (bars) alongside trend data (lines).

## Example

<BarLineComboChartExample />

<script setup>
import BarLineComboChartExample from '../components/BarLineComboChartExample.vue'
</script>

## Configuration

```javascript
{
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        type: 'bar',
        label: 'Volume',
        data: [100, 150, 200, 250, 300],
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgb(255, 99, 132)',
        yAxisID: 'y'
      },
      {
        type: 'line',
        label: 'Trend',
        data: [50, 75, 100, 125, 150],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        yAxisID: 'y1'
      }
    ]
  },
  options: {
    scales: {
      y: {
        type: 'linear',
        position: 'left'
      },
      y1: {
        type: 'linear',
        position: 'right'
      }
    }
  }
}
```

## Key Properties

- **`type: 'bar'`** - Base chart type
- **`type: 'line'`** - Secondary chart type for trend
- **`yAxisID`** - Different Y-axes for different scales
- **`backgroundColor`** - Fill colors for each dataset

## Use Cases

- Sales volume vs. revenue trends
- Production quantity vs. efficiency
- Website traffic vs. conversion rates
- Inventory levels vs. turnover rates
- Performance metrics vs. targets

---

*[← Back to Combo Charts](/chartjs/combo-charts)*
