<template>
  <div class="tooltip-container" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
    <slot></slot>
    <div 
      v-if="showTooltip" 
      class="tooltip"
      :class="[position, size]"
      :style="{ 
        '--tooltip-bg': backgroundColor,
        '--tooltip-color': textColor,
        '--tooltip-border': borderColor
      }"
    >
      {{ text }}
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  position: {
    type: String,
    default: 'top',
    validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  backgroundColor: {
    type: String,
    default: '#1f2937'
  },
  textColor: {
    type: String,
    default: '#ffffff'
  },
  borderColor: {
    type: String,
    default: '#374151'
  },
  delay: {
    type: Number,
    default: 200
  }
})

const showTooltip = ref(false)
</script>

<style scoped>
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  z-index: 1000;
  padding: 8px 12px;
  background: var(--tooltip-bg);
  color: var(--tooltip-color);
  border: 1px solid var(--tooltip-border);
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: none;
  opacity: 0;
  animation: tooltipFadeIn 0.2s ease-out forwards;
}

.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border: 4px solid transparent;
}

/* Position variants */
.tooltip.top {
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip.top .tooltip-arrow {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-top-color: var(--tooltip-bg);
}

.tooltip.bottom {
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

.tooltip.bottom .tooltip-arrow {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-color: var(--tooltip-bg);
}

.tooltip.left {
  right: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}

.tooltip.left .tooltip-arrow {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-left-color: var(--tooltip-bg);
}

.tooltip.right {
  left: calc(100% + 8px);
  top: 50%;
  transform: translateY(-50%);
}

.tooltip.right .tooltip-arrow {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-right-color: var(--tooltip-bg);
}

/* Size variants */
.tooltip.small {
  padding: 6px 10px;
  font-size: 11px;
}

.tooltip.medium {
  padding: 8px 12px;
  font-size: 12px;
}

.tooltip.large {
  padding: 10px 16px;
  font-size: 14px;
}

@keyframes tooltipFadeIn {
  from {
    opacity: 0;
    transform: translateY(4px) translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateX(-50%);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .tooltip {
    font-size: 11px;
    padding: 6px 10px;
  }
}
</style>
