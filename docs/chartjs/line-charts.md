---
title: Line Charts
---

<script setup>
import LineChartExample from './components/LineChartExample.vue'
import TickControlExample from './components/TickControlExample.vue'
</script>

# Line Charts

Line charts are perfect for displaying data over time or showing trends and patterns in continuous data. They're one of the most commonly used chart types for data visualization.

## Basic Line Chart

Here's a comprehensive interactive line chart with full configuration details:

<LineChartExample />

## Line Chart Features

### 1. **Time Series Data**
Line charts excel at showing how values change over time:
- Stock prices over days/months
- Website traffic over time
- Temperature changes throughout the day
- Sales performance over quarters

### 2. **Multiple Datasets**
Compare multiple series on the same chart:
- Revenue vs. Expenses
- Multiple product lines
- Different regions or categories

### 3. **Interactive Elements**
- **Hover Tooltips**: See exact values on hover
- **Click Events**: Respond to user interactions
- **Animations**: Smooth transitions and updates
- **Zoom & Pan**: Explore large datasets

## Configuration Options

### Basic Configuration

```javascript
const config = {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Sales',
      data: [12, 19, 3, 5, 2],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales'
      }
    }
  }
}
```

### Advanced Styling

```javascript
const advancedConfig = {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Revenue',
      data: [12, 19, 3, 5, 2],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 3,
      tension: 0.4,
      fill: true,
      pointRadius: 6,
      pointHoverRadius: 8
    }]
  }
}
```

### Axis Label Customization

Chart.js allows you to fully customize your X and Y axis labels and tick values. Here's how to configure them:

#### X-Axis Label Customization

```javascript
scales: {
  x: {
    title: {
      display: true,        // Show/hide the axis title
      text: 'Month',        // Custom label text
      font: {
        size: 14,           // Font size
        weight: 'bold'      // Font weight
      },
      color: '#333',        // Text color
      padding: 10           // Padding around the title
    }
  }
}
```

#### Y-Axis Label Customization

```javascript
scales: {
  y: {
    title: {
      display: true,
      text: 'Sales Value ($)',
      font: {
        size: 14,
        weight: 'bold'
      },
      color: '#333'
    }
  }
}
```

#### Y-Axis Tick Label Customization

You can customize the Y-axis value labels (like "$10K", "$20K") using the `callback` function:

```javascript
scales: {
  y: {
    ticks: {
      callback: function(value) {
        // Format value as currency with K suffix
        return '$' + value + 'K';
      }
    }
  }
}
```

**How the Callback Function Works:**

The `callback` function is automatically called by Chart.js for each tick value on the Y-axis. Here's what happens:

1. **Chart.js automatically calculates** the tick values (e.g., 0, 10, 20, 30, 40, 50)
2. **For each tick value**, Chart.js calls your `callback` function
3. **The `value` parameter** contains the current tick value (0, 10, 20, etc.)
4. **Your function returns** the formatted string to display

**Controlling Tick Values:**

You can control which tick values appear on the Y-axis using these options:

```javascript
scales: {
  y: {
    min: 0,           // Start Y-axis from 0
    max: 100,         // End Y-axis at 100
    ticks: {
      stepSize: 20,   // Show ticks every 20 units (0, 20, 40, 60, 80, 100)
      callback: function(value) {
        return '$' + value + 'K';
      }
    }
  }
}
```

**Alternative: Custom Tick Values Array:**

You can also specify exactly which values to show:

```javascript
scales: {
  y: {
    ticks: {
      callback: function(value) {
        return '$' + value + 'K';
      },
      // Show only these specific values
      values: [0, 25, 50, 75, 100]
    }
  }
}
```

**Example Flow:**
```javascript
// Chart.js calculates these tick values: [0, 10, 20, 30, 40, 50]
// Then calls your callback for each value:

callback(0)   → returns "$0K"    → displays "$0K"
callback(10)  → returns "$10K"   → displays "$10K"  
callback(20)  → returns "$20K"   → displays "$20K"
callback(30)  → returns "$30K"   → displays "$30K"
callback(40)  → returns "$40K"   → displays "$40K"
callback(50)  → returns "$50K"   → displays "$50K"
```

**Common Tick Label Formats:**

```javascript
// Currency formatting
callback: function(value) {
  return '$' + value.toLocaleString();
}

// Percentage formatting
callback: function(value) {
  return value + '%';
}

// Thousand separator (K, M, B)
callback: function(value) {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + 'M';
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1) + 'K';
  }
  return value;
}

// Custom decimal places
callback: function(value) {
  return value.toFixed(2);
}
```

#### Complete Axis Configuration Example

```javascript
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
      text: 'Sales Value ($K)',
      font: {
        size: 14,
        weight: 'bold'
      }
    },
    ticks: {
      font: {
        size: 12
      },
      callback: function(value) {
        return '$' + value + 'K';
      }
    },
    grid: {
      color: 'rgba(0, 0, 0, 0.1)'
    }
  }
}
```

## Interactive Example: Tick Control

See the difference between automatic tick calculation and custom tick control:

<TickControlExample />

## Line Chart Variants

Chart.js offers several line chart variations to suit different data visualization needs:

- **[Area Chart](/chartjs/line-charts/area)** - Lines with filled areas below
- **[Stepped Line Chart](/chartjs/line-charts/stepped)** - Step-by-step progression
- **[Dashed Line Chart](/chartjs/line-charts/dashed)** - Dashed line patterns
- **[Multi-Line Chart](/chartjs/line-charts/multi-line)** - Multiple datasets on one chart
- **[Multi-Line Dashed & Filled Chart](/chartjs/line-charts/multi-line-dashed-filled)** - Advanced styling with dashed lines and filled areas

## Best Practices

### 1. **Data Preparation**
- Ensure data is sorted chronologically
- Handle missing data points appropriately
- Use consistent time intervals when possible

### 2. **Visual Design**
- Choose colors that are accessible and distinguishable
- Limit the number of datasets (3-5 max for clarity)
- Use appropriate line thickness and point sizes

### 3. **User Experience**
- Provide clear labels and titles
- Include legends for multiple datasets
- Make tooltips informative and helpful

## Common Use Cases

- **Financial Data**: Stock prices, revenue trends
- **Analytics**: Website traffic, user engagement
- **Scientific Data**: Temperature, pressure, measurements
- **Business Metrics**: Sales, performance indicators
- **Social Media**: Follower growth, engagement rates

## Next Steps

- Learn about [Bar Charts](/chartjs/bar-charts)
- Explore [Chart Configuration](#configuration-options)
- See [Interactive Examples](#interactive-example-tick-control)

---

*Ready to create your own line chart? Check out the interactive examples above and explore the different variants!*
