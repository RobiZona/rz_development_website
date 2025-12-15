import { ref, type Ref } from "vue";
import { CLIPBOARD } from "../constants";

/**
 * Copy-to-clipboard composable with fallback for older browsers
 * 
 * @returns Copied state and copy function
 */
export function useCopyToClipboard(): {
  copiedId: Ref<string | null>;
  copyToClipboard: (id: string) => Promise<void>;
} {
  const copiedId = ref<string | null>(null);

  async function copyToClipboard(id: string): Promise<void> {
    try {
      // Modern Clipboard API
      await navigator.clipboard.writeText(id);
      copiedId.value = id;
      setTimeout((): void => {
        copiedId.value = null;
      }, CLIPBOARD.COPIED_FEEDBACK_DURATION);
    } catch (err) {
      // Fallback for older browsers
      console.warn("Clipboard API failed, using fallback:", err);
      const textArea = document.createElement('textarea');
      textArea.value = id;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      
      try {
        const successful = document.execCommand('copy');
        if (!successful) {
          throw new Error('execCommand failed');
        }
      } catch (execErr) {
        console.error("Fallback copy failed:", execErr);
      } finally {
        document.body.removeChild(textArea);
      }
      
      copiedId.value = id;
      setTimeout((): void => {
        copiedId.value = null;
      }, CLIPBOARD.COPIED_FEEDBACK_DURATION);
    }
  }

  return {
    copiedId,
    copyToClipboard
  };
}

