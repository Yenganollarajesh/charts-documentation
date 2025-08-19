# Chart.js Documentation

A comprehensive documentation site for Chart.js built with VitePress, featuring interactive examples and detailed guides for all chart types.

## What is Chart.js?

Chart.js is a free, open-source JavaScript library for data visualization. It provides a simple yet flexible way to create charts using HTML5 Canvas, making it perfect for web applications.

## Features

- 📊 **Interactive Charts** - Live examples with real-time configuration
- 🚀 **Fast & Lightweight** - Built for performance with minimal bundle size
- 🎨 **Highly Customizable** - Extensive styling options and plugin system
- 📱 **Responsive Design** - Automatically adapts to container size
- 🔧 **Easy to Use** - Simple API with sensible defaults
- 🌐 **Cross-Browser** - Works in all modern browsers

## Chart Types Available

### Line Charts
- **Basic Line Chart** - Interactive example with controls
- **Area Chart** - Filled line charts for cumulative data
- **Stepped Line Chart** - Step-based line rendering
- **Dashed Line Chart** - Dashed and dotted line styles
- **Multi-Line Chart** - Multiple datasets on one chart

### Coming Soon
- Bar Charts
- Pie & Doughnut Charts
- Radar Charts
- Scatter & Bubble Charts
- Mixed Charts

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run docs:dev
```

Your site will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run docs:build
```

### Preview

Preview the production build:
```bash
npm run docs:preview
```

## Project Structure

```
.
├─ docs/
│  ├─ .vitepress/
│  │  └─ config.ts          # VitePress configuration
│  ├─ index.md              # Homepage
│  └─ chartjs/              # Chart.js documentation
│     ├─ index.md           # Chart.js overview
│     ├─ getting-started.md # Installation and setup guide
│     ├─ line-charts.md     # Main line charts page
│     ├─ line-charts/       # Line chart variants
│     │  ├─ area.md         # Area chart
│     │  ├─ stepped.md      # Stepped line chart
│     │  ├─ dashed.md       # Dashed line chart
│     │  └─ multi-line.md   # Multi-line chart
│     └─ components/        # Chart components
│        ├─ LineChartExample.vue
│        ├─ AreaChartExample.vue
│        ├─ SteppedChartExample.vue
│        ├─ DashedChartExample.vue
│        └─ MultiLineChartExample.vue
├─ package.json
└─ README.md
```

## Available Scripts

- `npm run docs:dev` - Start development server
- `npm run docs:build` - Build for production
- `npm run docs:preview` - Preview production build

## Customization

### Adding New Chart Types

1. Create a new component in `docs/chartjs/components/`
2. Add the chart type to the sidebar in `docs/.vitepress/config.ts`
3. Create documentation pages for the new chart type

### Styling

Customize the appearance by modifying the VitePress theme configuration.

## Learn More

- [Chart.js Official Documentation](https://www.chartjs.org/)
- [Chart.js GitHub Repository](https://github.com/chartjs/Chart.js)
- [VitePress Documentation](https://vitepress.dev/)

## License

MIT
