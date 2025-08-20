---
title: Line + Area Range Combo Chart
description: Combo chart combining area ranges with a central line
---

# Line + Area Range Combo Chart

A combo chart that combines area ranges with a central line, perfect for showing data variability, confidence intervals, or min/max ranges alongside average or median values. Ideal for statistical analysis and uncertainty visualization.

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import LineAreaRangeComboChartExample from '../components/LineAreaRangeComboChartExample.vue'
</script>

## Line + Area Range Combo Chart

<ChartCodeToggle 
  chart-name="line"
  :chart-data="{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Upper Range (Area)',
        data: [85, 95, 105, 115, 125, 135],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 1,
        fill: true,
        tension: 0.4,
        type: 'line',
        pointRadius: 0
      },
      {
        label: 'Lower Range (Area)',
        data: [45, 55, 65, 75, 85, 95],
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        borderColor: 'rgba(255, 99, 132, 0.3)',
        borderWidth: 1,
        fill: true,
        tension: 0.4,
        type: 'line',
        pointRadius: 0
      },
      {
        label: 'Average (Line)',
        data: [65, 75, 85, 95, 105, 115],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.1)',
        borderWidth: 3,
        fill: false,
        tension: 0.4,
        type: 'line',
        pointRadius: 6,
        pointHoverRadius: 8
      }
    ]
  }"
  :chart-options="{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Data Range with Average Trend',
        font: {
          size: 18,
          weight: 'bold'
        },
        padding: 20
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          padding: 15,
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function(context) {
            const label = context.dataset.label || ''
            const value = context.parsed.y
            return `${label}: ${value}`
          }
        }
      }
    },
    scales: {
      x: {
        type: 'category',
        position: 'bottom',
        title: {
          display: true,
          text: 'Month',
          font: {
            size: 14,
            weight: 'bold'
          }
        },
        ticks: {
          font: {
            size: 12
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Values',
          font: {
            size: 14,
            weight: 'bold'
          }
        },
        ticks: {
          font: {
            size: 12
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  }"
>
  <template #chart>
    <LineAreaRangeComboChartExample />
  </template>
</ChartCodeToggle>

### Chart Configuration

```vue
<template>
  <ChartComponent 
    chartName="line"
    :chartData="chartData"
    :chartOptions="chartOptions"
  />
</template>

<script setup>
import ChartComponent from './ChartComponent.vue'

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Upper Range (Area)',
      data: [85, 95, 105, 115, 125, 135],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 0.5)',
      borderWidth: 1,
      fill: true,
      tension: 0.4,
      type: 'line',
      pointRadius: 0
    },
    {
      label: 'Lower Range (Area)',
      data: [45, 55, 65, 75, 85, 95],
      backgroundColor: 'rgba(255, 99, 132, 0.1)',
      borderColor: 'rgba(255, 99, 132, 0.3)',
      borderWidth: 1,
      fill: true,
      tension: 0.4,
      type: 'line',
      pointRadius: 0
    },
    {
      label: 'Average (Line)',
      data: [65, 75, 85, 95, 105, 115],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.1)',
      borderWidth: 3,
      fill: false,
      tension: 0.4,
      type: 'line',
      pointRadius: 6,
      pointHoverRadius: 8
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Data Range with Average Trend',
      font: {
        size: 18,
        weight: 'bold'
      },
      padding: 20
    },
    legend: {
      display: true,
      position: 'top',
      labels: {
        padding: 15,
        font: {
          size: 14
        }
      }
    },
    tooltip: {
      mode: 'index',
      intersect: false,
      callbacks: {
        label: function(context) {
          const label = context.dataset.label || ''
          const value = context.parsed.y
          return `${label}: ${value}`
        }
      }
    }
  },
  scales: {
    x: {
      type: 'category',
      position: 'bottom',
      title: {
        display: true,
        text: 'Month',
        font: {
          size: 14,
          weight: 'bold'
        }
      },
      ticks: {
        font: {
          size: 12
        }
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)'
      }
    },
    y: {
      type: 'linear',
      position: 'left',
      title: {
        display: true,
        text: 'Values',
        font: {
          size: 14,
          weight: 'bold'
        }
      },
      ticks: {
        font: {
          size: 12
        }
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)'
      }
    }
  },
  interaction: {
    mode: 'nearest',
    axis: 'x',
    intersect: false
  }
}
</script>
```

## Key Features

### **Area Range Visualization**
- **Upper range** - Shows maximum or upper confidence bound
- **Lower range** - Shows minimum or lower confidence bound
- **Transparent fills** - Subtle background colors for range areas
- **Smooth curves** - Uses `tension: 0.4` for smooth area boundaries

### **Central Line Chart**
- **Average/Median** - Shows central tendency or target values
- **Clear visibility** - Bold line with visible data points
- **Interactive points** - Hover effects for detailed information
- **Trend analysis** - Easy to see overall patterns

### **Range Interpretation**
- **Variability display** - Visual representation of data spread
- **Confidence intervals** - Statistical uncertainty visualization
- **Min/Max ranges** - Performance or measurement boundaries
- **Seasonal patterns** - Range changes over time

## Use Cases

### **Statistical Analysis**
- **Confidence intervals** - Statistical uncertainty ranges
- **Data variability** - Min/max ranges for datasets
- **Forecast ranges** - Prediction intervals and bounds
- **Quality control** - Acceptable range boundaries

### **Business Intelligence**
- **Performance ranges** - KPI min/max values
- **Sales forecasts** - Revenue prediction ranges
- **Customer satisfaction** - Rating variability over time
- **Market analysis** - Price or demand ranges

### **Scientific Research**
- **Experimental data** - Measurement uncertainty
- **Climate data** - Temperature or precipitation ranges
- **Biological metrics** - Growth or population ranges
- **Financial modeling** - Risk assessment ranges

## Configuration Options

### **Area Range Styling**
```javascript
{
  type: 'line',
  fill: true,                    // Enable area fill
  backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Transparent fill
  borderColor: 'rgba(255, 99, 132, 0.5)',      // Subtle border
  borderWidth: 1,                // Thin borders
  pointRadius: 0,                // No visible points
  tension: 0.4                   // Smooth curves
}
```

### **Central Line Styling**
```javascript
{
  type: 'line',
  fill: false,                   // No fill for central line
  borderColor: 'rgb(54, 162, 235)',
  borderWidth: 3,                // Bold line
  pointRadius: 6,                // Visible points
  pointHoverRadius: 8,           // Hover effect
  tension: 0.4                   // Smooth curve
}
```

### **Chart Options**
```javascript
options: {
  scales: {
    x: {
      title: {
        display: true,
        text: 'Month'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Values'
      }
    }
  }
}
```

## Best Practices

### **Range Visualization**
- **Transparency levels** - Use appropriate opacity for range areas
- **Color consistency** - Consistent color scheme for related ranges
- **Border styling** - Subtle borders to define range boundaries
- **Point visibility** - Hide points for range areas to reduce clutter

### **Central Line Design**
- **Prominent styling** - Make central line clearly visible
- **Point emphasis** - Clear data point indicators
- **Hover effects** - Interactive elements for user engagement
- **Color contrast** - Ensure line stands out from range areas

### **Data Organization**
- **Logical ordering** - Upper range, lower range, then central line
- **Consistent scales** - All datasets use same scale ranges
- **Update synchronization** - Keep all ranges and central values aligned
- **Performance optimization** - Monitor rendering for large datasets

## Next Steps

- [Basic Combo Chart](/chartjs/combo-charts)
- [Dual Y-Axis Combo Chart](/chartjs/combo-charts/dual-y-axis)
- [Stacked Bar + Line](/chartjs/combo-charts/stacked-bar-line)
- [Scatter + Trend Line](/chartjs/combo-charts/scatter-trend-line)
