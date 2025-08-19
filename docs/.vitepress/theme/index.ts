import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

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
  }
}
