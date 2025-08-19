---
title: Outlined Radar Chart
description: Clean radar chart with outlined areas for minimal data visualization
---

# Outlined Radar Chart

A clean, minimal radar chart that shows data boundaries and patterns using outlined areas instead of filled regions. Perfect for professional presentations and clean data visualization.

<script setup>
import OutlinedRadarChartExample from '../components/OutlinedRadarChartExample.vue'
</script>

<OutlinedRadarChartExample />

## Chart Configuration

```javascript
const data = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'Outline',
      data: [45, 38, 40, 25, 15, 28, 35],
      borderColor: 'rgb(255, 165, 0)',    // Orange color
      backgroundColor: 'transparent',       // No fill - outlined only
      borderWidth: 2,
      borderDash: [5, 5],                  // Dashed line pattern
      pointBackgroundColor: 'rgb(255, 165, 0)',
      pointBorderColor: '#fff',
      pointBorderWidth: 1,
      pointRadius: 4,
      pointHoverRadius: 6,
      fill: false                          // Key property for outlined chart
    }
  ]
}
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

- [Basic Radar Chart](/chartjs/radar-charts/)
- [Multi-Radar Chart](/chartjs/radar-charts/multi-radar)
- [Filled Radar Chart](/chartjs/radar-charts/filled-radar)
