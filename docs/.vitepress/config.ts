import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Chart.js Documentation",
  description: "Comprehensive Chart.js documentation with interactive examples",
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: '📊',
    siteTitle: 'Chart.js Docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Chart.js', link: '/chartjs/' }
    ],
    sidebar: {
      '/chartjs/': [
        {
          text: 'Introduction',
          collapsed: false,
          items: [
            { text: 'What is Chart.js?', link: '/chartjs/' },
            { text: 'Getting Started', link: '/chartjs/getting-started' }
          ]
        },
        {
          text: 'Line Charts',
          collapsed: false,
          items: [
            { text: 'Basic Line Chart', link: '/chartjs/line-charts' },
            { text: 'Area Chart', link: '/chartjs/line-charts/area' },
            { text: 'Stepped Line Chart', link: '/chartjs/line-charts/stepped' },
            { text: 'Dashed Line Chart', link: '/chartjs/line-charts/dashed' },
            { text: 'Multi-Line Chart', link: '/chartjs/line-charts/multi-line' },
            { text: 'Multi-Line Dashed & Filled Chart', link: '/chartjs/line-charts/multi-line-dashed-filled' }
          ]
        },
        {
          text: 'Bar Charts',
          collapsed: false,
          items: [
            { text: 'Basic Bar Chart', link: '/chartjs/bar-charts' },
            { text: 'Horizontal Bar Chart', link: '/chartjs/bar-charts/horizontal' },
            { text: 'Stacked Bar Chart', link: '/chartjs/bar-charts/stacked' },
            { text: 'Grouped Bar Chart', link: '/chartjs/bar-charts/grouped' },
            { text: 'Multi-Dataset Bar Chart', link: '/chartjs/bar-charts/multi-dataset' }
          ]
        },
        {
          text: 'Pie Charts',
          collapsed: false,
          items: [
            { text: 'Basic Pie Chart', link: '/chartjs/pie-charts' },
            { text: 'Doughnut Chart', link: '/chartjs/pie-charts/doughnut' },
            { text: 'Polar Area Chart', link: '/chartjs/pie-charts/polar-area' }
          ]
        },
        {
          text: 'Scatter Charts',
          collapsed: false,
          items: [
            { text: 'Basic Scatter Chart', link: '/chartjs/scatter-charts' },
            { text: 'Scatter with Line', link: '/chartjs/scatter-charts/with-line' },
            { text: 'Multi-Dataset Scatter', link: '/chartjs/scatter-charts/multi-dataset' },
            { text: 'Bubble Chart', link: '/chartjs/scatter-charts/bubble' },
            { text: 'Multi-Dataset Bubble', link: '/chartjs/scatter-charts/multi-bubble' }
          ]
        },
        {
          text: 'Radar Charts',
          collapsed: false,
          items: [
            { text: 'Basic Radar Chart', link: '/chartjs/radar-charts' },
            { text: 'Multi-Radar Chart', link: '/chartjs/radar-charts/multi-radar' },
            { text: 'Filled Radar Chart', link: '/chartjs/radar-charts/filled-radar' },
            { text: 'Outlined Radar Chart', link: '/chartjs/radar-charts/outlined' }
          ]
        },
        {
          text: 'Combo Charts',
          collapsed: false,
          items: [
            { text: 'Basic Combo Chart', link: '/chartjs/combo-charts' },
            { text: 'Dual Y-Axis Combo Chart', link: '/chartjs/combo-charts/dual-y-axis' },
            { text: 'Stacked Bar + Line Combo Chart', link: '/chartjs/combo-charts/stacked-bar-line' },
            { text: 'Line + Area Range Combo Chart', link: '/chartjs/combo-charts/line-area-range' },
            { text: 'Scatter + Trend Line Combo Chart', link: '/chartjs/combo-charts/scatter-trend-line' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chartjs/Chart.js' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Chart.js Documentation'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search Chart.js docs...',
                buttonAriaLabel: 'Search Chart.js documentation'
              },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Clear search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          }
        }
      }
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    sidebarMenuLabel: 'Chart.js Documentation',
    returnToTopLabel: 'Back to top'
  },
  vite: {
    ssr: {
      noExternal: ['vitepress']
    }
  },
  head: [
    ['meta', { name: 'keywords', content: 'Chart.js, charts, data visualization, JavaScript, canvas, line charts, bar charts, pie charts, scatter charts, radar charts, combo charts, interactive charts' }],
    ['meta', { name: 'author', content: 'Chart.js Documentation' }]
  ]
})
