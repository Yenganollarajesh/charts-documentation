<template>
  <div class="chart-container">
    <div ref="chartEl" style="width: 100%; height: 320px"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const props = defineProps({
  chartData: {
    type: Array,
    required: true
  },
  chartOptions: {
    type: Object,
    required: true
  }
})

const chartEl = ref(null)
let chart = null

const renderChart = async () => {
  await nextTick()
  if (!chartEl.value) return
  
  try {
    // Dynamic import to avoid SSR issues
    const ApexCharts = await import('apexcharts')
    
    try {
      chart?.destroy()
    } catch {}
    
    const options = {
      ...props.chartOptions,
      series: [{ data: props.chartData }]
    }
    
    chart = new ApexCharts.default(chartEl.value, options)
    chart.render()
  } catch (error) {
    console.error('Failed to load ApexCharts:', error)
    // Fallback: show error message
    chartEl.value.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;">Chart loading failed. Please refresh the page.</div>'
  }
}

onMounted(() => {
  renderChart()
})

onUnmounted(() => {
  try {
    chart?.destroy()
  } catch {}
  chart = null
})
</script>

<style scoped>
.chart-container {
  width: 95%;
  height: 350px;
  /* border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
  background-color: #ffffff; */
}
</style>
