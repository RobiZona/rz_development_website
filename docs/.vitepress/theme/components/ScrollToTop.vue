<template>
  <Transition name="fade">
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="scroll-to-top"
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="scroll-icon"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);
const scrollThreshold = 300; // Show button after 300px scroll

function handleScroll() {
  showButton.value = window.scrollY > scrollThreshold;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

let throttleTimeout: ReturnType<typeof setTimeout> | null = null;
function throttledScroll() {
  if (throttleTimeout) return;
  
  throttleTimeout = setTimeout(() => {
    handleScroll();
    throttleTimeout = null;
  }, 100);
}

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', throttledScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', throttledScroll);
  if (throttleTimeout) {
    clearTimeout(throttleTimeout);
  }
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all var(--transition-base);
  z-index: 100;
}

.scroll-to-top:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.scroll-to-top:active {
  transform: translateY(0);
}

.scroll-icon {
  width: 24px;
  height: 24px;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .scroll-to-top {
    bottom: var(--space-4);
    right: var(--space-4);
    width: 44px;
    height: 44px;
  }

  .scroll-icon {
    width: 20px;
    height: 20px;
  }
}
</style>




