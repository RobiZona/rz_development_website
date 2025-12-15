<template>
  <nav v-if="breadcrumbs.length > 1" class="breadcrumbs" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
        <template v-if="crumb.link">
          <a :href="crumb.link" class="breadcrumb-link" :class="{ 'is-home': index === 0 }">
            <svg v-if="index === 0" class="home-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span v-else>{{ crumb.text }}</span>
          </a>
        </template>
        <template v-else>
          <span v-if="index < breadcrumbs.length - 1" class="breadcrumb-text">{{ crumb.text }}</span>
          <span v-else class="breadcrumb-current" aria-current="page">{{ crumb.text }}</span>
        </template>
        <svg v-if="index < breadcrumbs.length - 1" class="breadcrumb-separator" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

interface Breadcrumb {
  text: string;
  link?: string;
}

const { page, theme } = useData();

const breadcrumbs = computed<Breadcrumb[]>(() => {
  const path = page.value.relativePath;
  const parts = path.replace('.md', '').split('/');
  const crumbs: Breadcrumb[] = [
    { text: 'Home', link: '/' }
  ];

  let currentPath = '';
  
  parts.forEach((part, index) => {
    if (!part) return;
    
    currentPath += (currentPath ? '/' : '') + part;
    const isLast = index === parts.length - 1;
    
    // Format breadcrumb text
    let text = part
      .replace(/_/g, ' ')
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Try to find better title from sidebar
    let existsInSidebar = false;
    if (theme.value.sidebar) {
      const title = findTitleInSidebar(currentPath, theme.value.sidebar);
      if (title) {
        text = title;
        existsInSidebar = true;
      }
    }

    crumbs.push({
      text,
      link: !isLast && existsInSidebar ? `/${currentPath}` : undefined
    });
  });

  return crumbs;
});

function findTitleInSidebar(path: string, sidebar: any): string | null {
  if (Array.isArray(sidebar)) {
    for (const item of sidebar) {
      if (item.link === `/${path}` || item.link === `/${path}.html`) {
        return item.text;
      }
      if (item.items) {
        const found = findTitleInSidebar(path, item.items);
        if (found) return found;
      }
    }
  }
  return null;
}
</script>

<style scoped>
.breadcrumbs {
  padding: var(--space-3) 0;
  margin-bottom: var(--space-6);
  border-bottom: 1px solid var(--vp-c-divider);
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: var(--text-sm);
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.breadcrumb-link {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: all var(--transition-base);
  white-space: nowrap;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
}

.breadcrumb-link:hover {
  color: inherit;
  background-color: transparent;
  transform: none;
}

.breadcrumb-text {
  color: var(--vp-c-text-2);
  white-space: nowrap;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  cursor: default;
}

.breadcrumb-text:hover {
  color: inherit;
  background-color: transparent;
  transform: none;
}

.breadcrumb-text {
  transition: all var(--transition-base);
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
}

.breadcrumb-item:hover .breadcrumb-text {
  color: inherit;
  background-color: transparent;
  transform: none;
}

.home-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.breadcrumb-current {
  color: var(--vp-c-text-1);
  font-weight: var(--font-medium);
  white-space: nowrap;
  padding: var(--space-1) var(--space-2);
}

.breadcrumb-separator {
  width: 16px;
  height: 16px;
  color: var(--vp-c-text-3);
  opacity: 0.5;
  flex-shrink: 0;
  margin: 0 var(--space-1);
}

/* Mobile optimization */
@media (max-width: 640px) {
  .breadcrumbs {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .breadcrumb-list {
    flex-wrap: nowrap;
  }
}
</style>

