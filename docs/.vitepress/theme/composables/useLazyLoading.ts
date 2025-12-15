import { onUnmounted, nextTick } from "vue";
import { IMAGE_LOADING } from "../constants";

/**
 * Lazy loading composable for images using IntersectionObserver
 * 
 * @returns Initialization function and cleanup
 */
export function useLazyLoading(): {
  initLazyLoading: () => void;
  cleanup: () => void;
} {
  let imageObserver: IntersectionObserver | null = null;

  function initLazyLoading(): void {
    if (typeof window === 'undefined') return;
    
    // Disconnect previous observer
    if (imageObserver) {
      imageObserver.disconnect();
    }
    
    // Create new observer
    imageObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
      entries.forEach((entry: IntersectionObserverEntry): void => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          
          if (src && !img.src) {
            img.src = src;
            img.classList.add('loaded');
            imageObserver?.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: IMAGE_LOADING.LAZY_LOAD_ROOT_MARGIN,
    });
    
    // Observe all lazy images
    void nextTick((): void => {
      document.querySelectorAll('.lazy-image').forEach((img: Element): void => {
        imageObserver?.observe(img);
      });
    });
  }

  function cleanup(): void {
    if (imageObserver) {
      imageObserver.disconnect();
      imageObserver = null;
    }
  }

  onUnmounted((): void => {
    cleanup();
  });

  return {
    initLazyLoading,
    cleanup
  };
}

