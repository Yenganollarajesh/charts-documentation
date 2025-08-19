---
title: Combo Charts
---

<script setup>
import ComboChartExample from './components/ComboChartExample.vue'
import TickControlExample from './components/TickControlExample.vue'
</script>

# Combo Charts

Combo charts combine different chart types in a single visualization, allowing you to display multiple datasets with different characteristics. They're excellent for comparing different types of data that have different scales or units.

## Basic Combo Chart

Here's a comprehensive interactive combo chart with full configuration details:

<ComboChartExample />

## Combo Chart Features

### 1. **Multi-Type Visualization**
Combo charts excel at combining different chart types:
- Bar and line charts together
- Multiple scales for different data types
- Mixed data representations
- Enhanced data comparison

### 2. **Flexible Data Display**
Perfect for complex data scenarios:
- Different units of measurement
- Varying data ranges
- Mixed data types
- Comprehensive analysis

### 3. **Interactive Elements**
- **Hover Tooltips**: See exact values for each dataset
- **Click Events**: Respond to user interactions
- **Animations**: Smooth transitions and updates
- **Responsive Design**: Adapts to container size

## Configuration Options

### Basic Configuration

```javascript
const config = {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        type: 'bar',
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2
      },
      {
        type: 'line',
        label: 'Revenue',
        data: [65, 78, 90, 85, 95, 110],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 3,
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Sales vs Revenue'
      }
    }
  }
}
```

### Advanced Styling

```javascript
const advancedConfig = {
  type: 'bar',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        type: 'bar',
        label: 'Volume',
        data: [100, 150, 200, 250],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgb(75, 192, 192)',
        yAxisID: 'y'
      },
      {
        type: 'line',
        label: 'Price',
        data: [10, 12, 15, 18],
        backgroundColor: 'rgba(255, 205, 86, 0.2)',
        borderColor: 'rgb(255, 205, 86)',
        yAxisID: 'y1'
      }
    ]
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
      text: 'Units Sold',
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
        return value.toLocaleString() + ' units';
      }
    },
    grid: {
      color: 'rgba(0, 0, 0, 0.1)'
    }
  },
  y1: {
    type: 'linear',
    position: 'right',
    title: {
      display: true,
      text: 'Revenue ($K)',
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
      drawOnChartArea: false
    }
  }
}
```

## Interactive Example: Tick Control

See the difference between automatic tick calculation and custom tick control:

<TickControlExample />

## Combo Chart Variants

Chart.js offers several combo chart variations to suit different data visualization needs:

- **[Dual Y-Axis Combo Chart](/chartjs/combo-charts/dual-y-axis)** - Bar and line charts with independent y-axes
- **[Stacked Bar + Line Combo Chart](/chartjs/combo-charts/stacked-bar-line)** - Stacked bars with line overlay
- **[Line + Area Range Combo Chart](/chartjs/combo-charts/line-area-range)** - Area ranges with central line
- **[Scatter + Trend Line Combo Chart](/chartjs/combo-charts/scatter-trend-line)** - Scatter points with trend line

## Best Practices

### 1. **Data Preparation**
- Ensure datasets are compatible for combination
- Use appropriate scales for different data types
- Consider data ranges and units
- Group related data logically

### 2. **Visual Design**
- Choose colors that are accessible and distinguishable
- Use different chart types appropriately
- Ensure sufficient contrast between elements
- Consider using multiple Y-axes for different scales

### 3. **User Experience**
- Provide clear legends for all chart types
- Use appropriate tooltips for each dataset
- Make the combination intuitive and meaningful
- Consider the story the combo chart tells

## Common Use Cases

- **Financial Analysis**: Volume and price relationships
- **Sales Performance**: Units sold vs. revenue
- **Website Analytics**: Traffic and conversion rates
- **Inventory Management**: Stock levels and turnover
- **Performance Metrics**: Multiple KPIs in one view

## Next Steps

- Learn about [Line Charts](/chartjs/line-charts)
- Explore [Bar Charts](/chartjs/bar-charts)
- See [Pie Charts](/chartjs/pie-charts)
- Discover [Scatter Charts](/chartjs/scatter-charts)
- Check out [Radar Charts](/chartjs/radar-charts)

---

*Ready to create your own combo chart? Check out the interactive examples above and explore the different variants!*
