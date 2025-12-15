import { onMounted } from 'vue';

/**
 * Composable to add lazy loading to all images on mount
 * Especially useful for VitePress VPTeamMembers component images
 */
export function useLazyImages(): void {
  onMounted(() => {
    // Add lazy loading to all images that don't have it yet
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach((img) => {
      img.setAttribute('loading', 'lazy');
    });

    // Also target VPTeamMembers specifically
    const teamImages = document.querySelectorAll('.VPTeamMembers img, .vp-team-members img');
    teamImages.forEach((img) => {
      img.setAttribute('loading', 'lazy');
    });
  });
}

