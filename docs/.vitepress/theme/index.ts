import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
// Import ApexCharts CSS
import 'apexcharts/dist/apexcharts.css'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // You can add custom slots here if needed
    })
  },
  enhanceApp({ app }) {
    // Register any global components here
    // app.component('MyGlobalComponent', MyGlobalComponent)
    
    // Make ApexCharts available globally
    app.config.globalProperties.$apexcharts = 'apexcharts'
  }
}
