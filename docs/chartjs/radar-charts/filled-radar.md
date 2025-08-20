---
title: Filled Radar Chart
description: Learn how to create filled radar charts with Chart.js
---

# Filled Radar Chart

A filled radar chart adds filled areas to the radar chart, making it easier to visualize the data and compare different datasets with enhanced visual impact.

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import FilledRadarChartExample from '../components/FilledRadarChartExample.vue'
</script>

## Filled Radar Chart

<ChartCodeToggle 
  chart-name="radar"
  :chart-data="{
    labels: ['Creativity', 'Technical Skills', 'Communication', 'Problem Solving', 'Leadership', 'Adaptability'],
    datasets: [
      {
        label: 'Current Skills',
        data: [85, 90, 75, 88, 70, 82],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 3,
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: true
      },
      {
        label: 'Target Skills',
        data: [95, 95, 90, 95, 85, 90],
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 3,
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: true
      }
    ]
  }"
  :chart-options="{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Skills Assessment',
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
        callbacks: {
          label: function(context) {
            const label = context.dataset.label || ''
            const value = context.parsed.r
            return `${label}: ${value}`
          }
        }
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          font: {
            size: 12
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        pointLabels: {
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      }
    }
  }"
>
  <template #chart>
    <FilledRadarChartExample />
  </template>
</ChartCodeToggle>

### Chart Configuration

```vue
<template>
  <ChartComponent 
    chartName="radar"
    :chartData="chartData"
    :chartOptions="chartOptions"
  />
</template>

<script setup>
import ChartComponent from './ChartComponent.vue'

const chartData = {
  labels: ['Creativity', 'Technical Skills', 'Communication', 'Problem Solving', 'Leadership', 'Adaptability'],
  datasets: [
    {
      label: 'Current Skills',
      data: [85, 90, 75, 88, 70, 82],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 3,
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
      pointRadius: 6,
      pointHoverRadius: 8,
      fill: true
    },
    {
      label: 'Target Skills',
      data: [95, 95, 90, 95, 85, 90],
      backgroundColor: 'rgba(54, 162, 235, 0.4)',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 3,
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
      pointRadius: 6,
      pointHoverRadius: 8,
      fill: true
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Skills Assessment',
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
      callbacks: {
        label: function(context) {
          const label = context.dataset.label || ''
          const value = context.parsed.r
          return `${label}: ${value}`
        }
      }
    }
  },
  scales: {
    r: {
      beginAtZero: true,
      max: 100,
      ticks: {
        stepSize: 20,
        font: {
          size: 12
        }
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)'
      },
      pointLabels: {
        font: {
          size: 14,
          weight: 'bold'
        }
      }
    }
  }
}
</script>
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
