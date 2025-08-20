<template>
  <div class="chart-code-toggle">
    <div class="nav-container">
      <div class="nav-buttons">
        <Tooltip text="View Chart" position="top">
          <button 
            @click="showChart = true" 
            :class="{ active: showChart }"
            class="nav-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z"/>
              <path d="M8 14l3-3 2 2 3-3"/>
            </svg>
          </button>
        </Tooltip>
        <Tooltip text="View Code" position="top">
          <button 
            @click="showChart = false" 
            :class="{ active: !showChart }"
            class="nav-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 16l-4-4 4-4" />
              <path d="M16 8l4 4-4 4" />
            </svg>
          </button>
        </Tooltip>

      </div>
    </div>

    <div class="content-container">
      <!-- Chart Display -->
      <div v-if="showChart" class="chart-display">
        <slot name="chart"></slot>
      </div>

      <!-- Code Display -->
      <div v-else class="code-display">
        <div class="code-content">
          <div class="code-header">
            <div class="copy-text" :class="{ show: showCopyText }">{{ copied ? 'Copied!' : 'Copy Code' }}</div>
            <button 
              @click="copyCode" 
              @mouseenter="showCopyText = true"
              @mouseleave="showCopyText = false"
              class="floating-copy-btn" 
              :class="{ copied: copied }"
              :title="copied ? 'Copied!' : 'Copy Code'"
            >
              <svg v-if="!copied" width="20" height="20" viewBox="0 0 640 640" fill="currentColor">
                <path d="M360 160L280 160C266.7 160 256 149.3 256 136C256 122.7 266.7 112 280 112L360 112C373.3 112 384 122.7 384 136C384 149.3 373.3 160 360 160zM360 208C397.1 208 427.6 180 431.6 144L448 144C456.8 144 464 151.2 464 160L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 160C176 151.2 183.2 144 192 144L208.4 144C212.4 180 242.9 208 280 208L360 208zM419.9 96C407 76.7 385 64 360 64L280 64C255 64 233 76.7 220.1 96L192 96C156.7 96 128 124.7 128 160L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 160C512 124.7 483.3 96 448 96L419.9 96z"/>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 640 640" fill="currentColor">
                <path d="M360 160L280 160C266.7 160 256 149.3 256 136C256 122.7 266.7 112 280 112L360 112C373.3 112 384 122.7 384 136C384 149.3 373.3 160 360 160zM360 208C397.1 208 427.6 180 431.6 144L448 144C456.8 144 464 151.2 464 160L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 160C176 151.2 183.2 144 192 144L208.4 144C212.4 180 242.9 208 280 208L360 208zM419.9 96C407 76.7 385 64 360 64L280 64C255 64 233 76.7 220.1 96L192 96C156.7 96 128 124.7 128 160L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 160C512 124.7 483.3 96 448 96L419.9 96z"/>
                <!-- Tick mark inside the document -->
                <path d="M240 360L280 400L400 280" stroke="currentColor" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
              </svg>
            </button>
          </div>
          <pre><code ref="codeBlock">{{ fullCode }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Tooltip from './Tooltip.vue'

const props = defineProps({
  chartName: {
    type: String,
    required: true
  },
  chartData: {
    type: [Object, Array],
    required: true
  },
  chartOptions: {
    type: Object,
    required: true
  }
})

const showChart = ref(true)
const copied = ref(false)
const showCopyText = ref(false)
const codeBlock = ref(null)

const fullCode = computed(() => {
  // Check if this is an ApexCharts candlestick chart
  const isApexCharts = props.chartOptions?.chart?.type === 'candlestick'
  
  if (isApexCharts) {
    return `<!-- CandlestickChartExample.vue -->
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
<\/script>

<style scoped>
.chart-container {
  width: 100%;
  height: 350px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
  background-color: #ffffff;
}
</style>`
  }
  
  // Default Chart.js code generation
  return `<!-- ChartComponent.vue -->
<template>
  <div class="chart-container">
    <canvas ref="chartCanvas" width="600" height="350"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const props = defineProps({
  chartName: {
    type: String,
    required: true
  },
  chartData: {
    type: Object,
    required: true
  },
  chartOptions: {
    type: Object,
    required: true
  }
})

const chartCanvas = ref(null)
const chart = ref(null)

const createChart = () => {
  if (chart.value) {
    chart.value.destroy()
  }

  const ctx = chartCanvas.value.getContext('2d')
  
  chart.value = new Chart(ctx, {
    type: props.chartName,
    data: props.chartData,
    options: props.chartOptions
  })
}

onMounted(() => {
  createChart()
})

onUnmounted(() => {
  if (chart.value) {
    chart.value.destroy()
  }
})
<\/script>`
})

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(fullCode.value)
    copied.value = true
    showCopyText.value = true // Keep showing the text
    setTimeout(() => {
      copied.value = false
      showCopyText.value = false // Hide the text when icon changes back
    }, 2000)
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}
</script>

<style scoped>
.chart-code-toggle {
  margin: 20px 0;
}



.nav-container {
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px 12px 0 0;
    padding: 6px;
    margin-bottom: 0;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}

.nav-buttons {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 2px solid var(--vp-c-divider);
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  /* transition: all 0.3s ease; */
  height: 36px;
  min-width: fit-content;
  font-weight: 500;
    border: 2px solid var(--vp-code-copy-code-border-color);
    border-radius: 4px;
    border-color: var(--vp-code-copy-code-hover-border-color);
    background-color: var(--vp-code-copy-code-bg);
    transition: border-color 0.25s, background-color 0.25s, opacity 0.25s;
}
.nav-btn svg {
  opacity: 0.5;
}

.nav-btn:hover {
  border-color: var(--vp-code-copy-code-hover-border-color);
  background-color: var(--vp-code-copy-code-hover-bg);
  /* transform: translateY(-1px); */
}

.nav-btn:hover svg {
  color: #374151;
  opacity: 1;
}

.nav-btn.active {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-brand);
  color: var(--vp-c-white);
}

.nav-btn.active svg {
  color: var(--vp-c-white);
  opacity: 1;
}

.nav-btn.copied {
  border-color: var(--vp-code-copy-code-hover-border-color);
  background-color: var(--vp-code-copy-code-hover-bg);
}

.nav-btn.copied svg {
  color: #374151;
}

.content-container {
  min-height: 400px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0 0 12px 12px;
  border-top: none;
  overflow: hidden;
}

.chart-display {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
}

.code-display {
  overflow: hidden;
}





.code-content {
  background: var(--vp-code-block-bg);
  padding: 20px;
  overflow-x: auto;
  position: relative;
}

.code-header {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
  display: flex;
  align-items: center;
  /* gap: 12px; */
}

.copy-text {
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  padding: 6.55px 12px;
  border-radius: 6px 0px 0px 6px;
  border: 2px solid var(--vp-c-divider);
  border-right: none;
  transition: all 0.2s ease;
  opacity: 0;
  transform: translateX(10px);
  pointer-events: none;
}

.copy-text.show {
  opacity: 1;
  transform: translateX(0);
}



.floating-copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  cursor: pointer;
  opacity: 0;
  border-radius: 4px;
  border: 2px solid var(--vp-code-copy-code-border-color);
  border-color: var(--vp-code-copy-code-hover-border-color);
  background-color: var(--vp-code-copy-code-bg);
  transition: opacity 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
}


.code-content:hover .floating-copy-btn {
  opacity: 1;
}

.floating-copy-btn:hover {
  border-color: var(--vp-code-copy-code-hover-border-color);
  background-color: var(--vp-code-copy-code-hover-bg);
  border-radius: 0px 4px 4px 0px;
}

.floating-copy-btn svg {
  color: var(--vp-c-text-2);
  transition: color 0.2s ease;
  opacity: 0.5;
}

.floating-copy-btn:hover svg {
  color: var(--vp-c-text-1);
  opacity: 1;
}

.floating-copy-btn.copied {
  border-color: var(--vp-c-brand);
  border-color: var(--vp-code-copy-code-hover-border-color);
}

.code-content pre {
  margin: 0;
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: var(--vp-code-block-color);
  overflow: hidden;
}

.code-content code {
  font-family: inherit;
}
</style>
