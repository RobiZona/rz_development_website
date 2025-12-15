<template>
  <div class="loading-spinner-container" :class="{ fullscreen, overlay }">
    <div class="loading-spinner-content">
      <div class="spinner" :class="size">
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
      </div>
      <p v-if="message" class="loading-message">{{ message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message?: string;
  size?: 'small' | 'medium' | 'large';
  fullscreen?: boolean;
  overlay?: boolean;
}

withDefaults(defineProps<Props>(), {
  message: '',
  size: 'medium',
  fullscreen: false,
  overlay: false
});
</script>

<style scoped>
.loading-spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-8);
}

.loading-spinner-container.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
}

.loading-spinner-container.overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.loading-spinner-content {
  text-align: center;
}

.spinner {
  display: inline-block;
  position: relative;
}

.spinner.small {
  width: 32px;
  height: 32px;
}

.spinner.medium {
  width: 48px;
  height: 48px;
}

.spinner.large {
  width: 64px;
  height: 64px;
}

.spinner-ring {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid var(--vp-c-brand-1);
  border-radius: 50%;
  animation: spinner-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--vp-c-brand-1) transparent transparent transparent;
}

.spinner-ring:nth-child(1) {
  animation-delay: -0.45s;
}

.spinner-ring:nth-child(2) {
  animation-delay: -0.3s;
}

.spinner-ring:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes spinner-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-message {
  margin-top: var(--space-4);
  font-size: var(--text-base);
  color: var(--vp-c-text-1);
}

.loading-spinner-container.fullscreen .loading-message {
  color: white;
}
</style>




