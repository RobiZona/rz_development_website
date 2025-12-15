---
layout: page
title: Partners
sidebar: false
description: Projects, developers and communities collaborating with RZ Development.
head:
  - - meta
    - name: keywords
      content: RZ Development partners, script developers, software collaboration, independent projects
---

<style scoped>
/* Partnership Tiers Table Styling */
.partnership-tiers-wrapper {
  max-width: 900px;
  margin: 60px auto 40px;
  padding: 0 20px;
}

.partnership-tiers-title {
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 40px;
  margin-bottom: 30px;
  color: var(--vp-c-brand-1);
  position: relative;
}

.partnership-tiers-title .header-anchor {
  display: inline-block;
  margin-right: 0.3em;
  font-size: 0.85em;
  opacity: 0;
  transition: opacity 0.25s;
  text-decoration: none;
  color: var(--vp-c-brand-1);
}

.partnership-tiers-title span {
  display: inline-block;
}

.partnership-tiers-title .header-anchor:before {
  content: "#";
}

.partnership-tiers-title:hover .header-anchor {
  opacity: 1;
}

.partnership-tiers-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.05em;
}

.partnership-tiers-table thead tr {
  border-bottom: 2px solid var(--vp-c-divider);
}

.partnership-tiers-table th {
  padding: 16px 12px;
  font-weight: 600;
}

.partnership-tiers-table th:first-child {
  text-align: left;
}

.partnership-tiers-table th:not(:first-child) {
  text-align: center;
  color: var(--vp-c-brand-1);
}

.partnership-tiers-table tbody tr {
  border-bottom: 1px solid var(--vp-c-divider);
}

.partnership-tiers-table td {
  padding: 12px;
}

.partnership-tiers-table td:not(:first-child) {
  text-align: center;
}

.partnership-tiers-table .section-header {
  font-weight: 700;
  font-size: 1.1em;
  padding: 16px 12px 12px;
}

.partnership-tiers-table .section-header.benefits {
  padding-top: 24px;
}

.partnership-tiers-table .bundle-note {
  text-align: center;
  font-style: italic;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
  padding: 12px;
}

.partnership-tiers-table .bundle-note-row {
  border-bottom: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .partnership-tiers-wrapper {
    padding: 0 15px;
    margin: 40px auto 30px;
  }
  
  .partnership-tiers-title {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 24px;
  }

  .partnership-tiers-title .header-anchor {
    margin-right: 0.2em;
    font-size: 0.8em;
  }
  
  .partnership-tiers-table {
    font-size: 0.9em;
  }
  
  .partnership-tiers-table th,
  .partnership-tiers-table td {
    padding: 8px 6px;
  }

  .partnership-tiers-table .section-header {
    font-size: 1em;
    padding: 12px 6px 8px;
  }

  .partnership-tiers-table .section-header.benefits {
    padding-top: 20px;
  }

  .partnership-tiers-table .bundle-note {
    font-size: 0.85em;
    padding: 10px 6px;
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  .partnership-tiers-wrapper {
    margin: 30px auto 20px;
  }

  .partnership-tiers-title {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 20px;
  }

  .partnership-tiers-table {
    font-size: 0.8em;
  }

  .partnership-tiers-table th,
  .partnership-tiers-table td {
    padding: 6px 4px;
  }
}
</style>

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const developers = [
  /* {
    avatar: '/partner/dev/rz.webp',
    name: 'RZ Scripts',
    links: [
      { icon: 'discord', link: 'https://discord.gg/QuX5GYTarA' }
    ]
  } */
]

// In futuro:
// const communities = []
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Partners</template>
  </VPTeamPageTitle>

  <VPTeamPageSection>
    <template #title>Developers</template>
    <template #members>
      <VPTeamMembers size="small" :members="developers" />
    </template>
  </VPTeamPageSection>

</VPTeamPage>