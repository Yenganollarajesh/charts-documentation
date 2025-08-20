---
title: Outlined Radar Chart
description: Clean radar chart with outlined areas for minimal data visualization
---

# Outlined Radar Chart

A clean, minimal radar chart that shows data boundaries and patterns using outlined areas instead of filled regions. Perfect for professional presentations and clean data visualization.

<script setup>
import ChartCodeToggle from '../components/ChartCodeToggle.vue'
import OutlinedRadarChartExample from '../components/OutlinedRadarChartExample.vue'
</script>

## Outlined Radar Chart

<ChartCodeToggle 
  chart-name="radar"
  :chart-data="{
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'Outline',
        data: [45, 38, 40, 25, 15, 28, 35],
        borderColor: 'rgb(255, 165, 0)',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderDash: [5, 5],
        pointBackgroundColor: 'rgb(255, 165, 0)',
        pointBorderColor: '#fff',
        pointBorderWidth: 1,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: false
      }
    ]
  }"
  :chart-options="{
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Outline Radar',
        font: {
          size: 16,
          weight: 'bold'
        },
        padding: 20,
        color: '#333'
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333'
        }
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 70,
        min: 0,
        ticks: {
          stepSize: 10,
          font: {
            size: 12
          },
          color: '#666'
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1
        },
        pointLabels: {
          font: {
            size: 13,
            weight: '500'
          },
          color: '#333'
        },
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1
        }
      }
    }
  }"
>
  <template #chart>
    <OutlinedRadarChartExample />
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
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'Outline',
      data: [45, 38, 40, 25, 15, 28, 35],
      borderColor: 'rgb(255, 165, 0)',
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderDash: [5, 5],
      pointBackgroundColor: 'rgb(255, 165, 0)',
      pointBorderColor: '#fff',
      pointBorderWidth: 1,
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: false
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Outline Radar',
      font: {
        size: 16,
        weight: 'bold'
      },
      padding: 20,
      color: '#333'
    },
    legend: {
      display: true,
      position: 'top',
      labels: {
        color: '#333'
      }
    }
  },
  scales: {
    r: {
      beginAtZero: true,
      max: 70,
      min: 0,
      ticks: {
        stepSize: 10,
        font: {
          size: 12
        },
        color: '#666'
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
        lineWidth: 1
      },
      pointLabels: {
        font: {
          size: 13,
          weight: '500'
        },
        color: '#333'
      },
      angleLines: {
        color: 'rgba(0, 0, 0, 0.1)',
        lineWidth: 1
      }
    }
  }
}
</script>
```

## Key Features

### **Outlined Design**
- **`fill: false`** - Creates outlined areas instead of filled regions
- **`backgroundColor: 'transparent'** - Ensures no background fill
- **Clean borders** - Sharp, defined data boundaries
- **Minimal visual clutter** - Perfect for professional presentations

### **Dashed Line Styling**
- **`borderDash: [5, 5]`** - Creates dashed line pattern
- **Orange color** - `rgb(255, 165, 0)` for visibility
- **Thin borders** - `borderWidth: 2` for clean appearance
- **Subtle points** - Small markers at data vertices

### **Simple Categories**
- **Seven key areas**: Eating, Drinking, Sleeping, Designing, Coding, Cycling, Running
- **Scale 0-70**: Appropriate range for activity levels
- **Clean grid**: Subtle background lines for reference
- **Professional typography** - Clear, readable labels

## Use Cases

### **Performance Comparison**
- Compare multiple entities across various metrics
- Show relative strengths and weaknesses
- Highlight competitive advantages
- Professional business presentations

### **Skill Assessment**
- Employee performance evaluation
- Team capability analysis
- Training needs identification
- Competency mapping

### **Product Analysis**
- Feature comparison charts
- Quality assessment
- Customer satisfaction metrics
- Competitive analysis

## Configuration Options

### **Fill Control**
```javascript
// Outlined chart (no fill)
fill: false,
backgroundColor: 'transparent'

// Filled chart (with transparency)
fill: true,
backgroundColor: 'rgba(255, 99, 132, 0.2)'
```

### **Point Customization**
```javascript
pointRadius: 6,           // Normal point size
pointHoverRadius: 8,      // Hover point size
pointBorderWidth: 2,      // Point border thickness
pointBorderColor: '#fff'  // Point border color
```

### **Grid Styling**
```javascript
grid: {
  color: 'rgba(0, 0, 0, 0.1)',  // Grid line color
  lineWidth: 1                   // Grid line thickness
},
angleLines: {
  color: 'rgba(0, 0, 0, 0.1)',  // Angle line color
  lineWidth: 1                   // Angle line thickness
}
```

## Next Steps

- [Basic Radar Chart](/chartjs/radar-charts)
- [Multi-Radar Chart](/chartjs/radar-charts/multi-radar)
- [Filled Radar Chart](/chartjs/radar-charts/filled-radar)
