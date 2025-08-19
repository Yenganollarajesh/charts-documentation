---
title: Bar Charts
---

<script setup>
import BarChartExample from './components/BarChartExample.vue'
import TickControlExample from './components/TickControlExample.vue'
</script>

# Bar Charts

Bar charts are excellent for comparing quantities across different categories. They're one of the most commonly used chart types because they're easy to read and understand.

## Basic Bar Chart

Here's a comprehensive interactive bar chart with full configuration details:

<BarChartExample />

## Bar Chart Features

### 1. **Category Comparison**
Bar charts excel at comparing values across different categories:
- Sales performance by month
- Survey results across options
- Product performance comparison
- Regional data analysis

### 2. **Multiple Datasets**
Compare multiple series on the same chart:
- Revenue vs. Expenses
- Multiple product lines
- Different regions or categories

### 3. **Interactive Elements**
- **Hover Tooltips**: See exact values on hover
- **Click Events**: Respond to user interactions
- **Animations**: Smooth transitions and updates
- **Responsive Design**: Adapts to container size

## Configuration Options

### Basic Configuration

```javascript
const config = {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Sales',
      data: [65, 59, 80, 81, 56],
      backgroundColor: 'rgba(75, 192, 192, 0.8)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales'
      }
    },
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
          text: 'Sales Value'
        }
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
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Revenue',
      data: [65, 59, 80, 81, 56],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 205, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)'
      ],
      borderWidth: 2,
      borderRadius: 4
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

## Bar Chart Variants

Explore different bar chart variations to see how they can be customized:

- **[Horizontal Bar Chart](/chartjs/bar-charts/horizontal)** - Display bars horizontally for better label readability
- **[Stacked Bar Chart](/chartjs/bar-charts/stacked)** - Stack multiple datasets to show composition and totals
- **[Grouped Bar Chart](/chartjs/bar-charts/grouped)** - Display multiple datasets side by side for comparison
- **[Multi-Dataset Bar Chart](/chartjs/bar-charts/multi-dataset)** - Combine different chart types in one visualization

## Best Practices

### 1. **Data Preparation**
- Ensure categories are logically ordered
- Handle missing data points appropriately
- Use consistent value ranges when possible

### 2. **Visual Design**
- Choose colors that are accessible and distinguishable
- Limit the number of categories (10-15 max for clarity)
- Use appropriate bar spacing and thickness

### 3. **User Experience**
- Provide clear labels and titles
- Include legends for multiple datasets
- Make tooltips informative and helpful
- Start Y-axis at zero for accurate comparisons

## Common Use Cases

- **Sales Reports**: Monthly, quarterly, or yearly sales comparisons
- **Survey Results**: Response distributions across different options
- **Performance Metrics**: Comparing KPIs across different departments
- **Inventory Management**: Stock levels across different products
- **Financial Analysis**: Revenue, expenses, or profit comparisons

## Next Steps

- Learn about [Line Charts](/chartjs/line-charts)
- Explore [Chart Configuration](#configuration-options)
- See [Interactive Examples](#interactive-example-tick-control)

---

*Ready to create your own bar chart? Check out the interactive examples above and explore the different variants!*
