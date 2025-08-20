---
title: Multi-Line Dashed & Filled Chart
description: Advanced line chart combining dashed lines and filled areas
---

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import MultiLineDashedFilledChartExample from '../components/MultiLineDashedFilledChartExample.vue'
</script>

# Multi-Line Dashed & Filled Chart

A sophisticated line chart that combines multiple datasets with different line styles (dashed patterns) and filled areas for enhanced visual appeal.

## Basic Multi-Line Dashed & Filled Chart

<ChartCodeToggle 
  chart-name="line"
  :chart-data="{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.1)',
        borderWidth: 3,
        borderDash: [5, 5],
        fill: true,
        tension: 0.4
      },
      {
        label: 'Profit',
        data: [28, 48, 40, 19, 86, 27],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.1)',
        borderWidth: 3,
        fill: false,
        tension: 0.4
      },
      {
        label: 'Expenses',
        data: [45, 25, 16, 36, 67, 18],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        borderWidth: 3,
        borderDash: [15, 3],
        fill: true,
        tension: 0.4
      }
    ]
  }"
  :chart-options="{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Multi-Line Dashed & Filled Chart',
        font: {
          size: 16,
          weight: 'bold'
        },
        padding: 20
      },
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
          font: {
            size: 14,
            weight: '600'
          }
        },
        ticks: {
          font: {
            size: 13
          }
        }
      },
      y: {
        title: {
          display: true,
          text: 'Value ($K)',
          font: {
            size: 14,
            weight: '600'
          }
        },
        ticks: {
          font: {
            size: 13
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  }"
>
  <template #chart>
    <MultiLineDashedFilledChartExample />
  </template>
</ChartCodeToggle>

### Chart Configuration

<!-- #### Using the Component -->

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
      label: 'Revenue',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.1)',
      borderWidth: 3,
      borderDash: [5, 5],
      fill: true,
      tension: 0.4
    },
    {
      label: 'Profit',
      data: [28, 48, 40, 19, 86, 27],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.1)',
      borderWidth: 3,
      fill: false,
      tension: 0.4
    },
    {
      label: 'Expenses',
      data: [45, 25, 16, 36, 67, 18],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.1)',
      borderWidth: 3,
      borderDash: [15, 3],
      fill: true,
      tension: 0.4
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Multi-Line Dashed & Filled Chart',
      font: {
        size: 16,
        weight: 'bold'
      },
      padding: 20
    },
    legend: {
      display: true,
      position: 'top'
    }
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Month',
        font: {
          size: 14,
          weight: '600'
        }
      },
      ticks: {
        font: {
          size: 13
        }
      }
    },
    y: {
      title: {
        display: true,
        text: 'Value ($K)',
        font: {
          size: 14,
          weight: '600'
        }
      },
      ticks: {
        font: {
          size: 13
        }
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)'
      }
    }
  }
}
</script>
```

## Key Features

### **Multi-Dataset Support**
- **Three datasets**: Revenue, Profit, and Expenses
- **Different colors**: Each line has unique styling
- **Legend display**: Shows all three datasets clearly

### **Advanced Line Styling**
- **Dashed patterns**: `borderDash: [5, 5]`, `[15, 3]`
- **Filled areas**: `fill: true` with semi-transparent backgrounds
- **Smooth curves**: `tension: 0.4` for elegant line flow

### **Visual Enhancements**
- **Semi-transparent fills**: `rgba(255, 99, 132, 0.1)`
- **Thick borders**: `borderWidth: 3` for better visibility
- **Hover effects**: Interactive chart with smooth transitions

## Use Cases

### **Financial Analysis**
- Compare multiple financial metrics
- Show trends with visual distinction
- Highlight relationships between data

### **Performance Monitoring**
- Track multiple KPIs simultaneously
- Use different line styles for clarity
- Fill areas for better data visualization

### **Data Comparison**
- Multiple datasets in one view
- Easy pattern recognition
- Professional presentation quality

## Next Steps

- [Basic Line Chart](/chartjs/line-charts)
- [Area Chart](/chartjs/line-charts/area)
- [Stepped Line Chart](/chartjs/line-charts/stepped)
- [Dashed Line Chart](/chartjs/line-charts/dashed)
- [Multi-Line Chart](/chartjs/line-charts/multi-line)
