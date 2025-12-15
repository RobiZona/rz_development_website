---
layout: page
title: Team
sidebar: false
description: Meet the people behind RZ Development. Independent developers focused on building reliable, high-performance scripts designed for real-world use.
head:
  - - meta
    - name: keywords
      content: RZ Development team, script developers, software creators, independent developers, automation scripts, game scripting
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const director = [
  {
    avatar: '/LogoShop.webp',
    name: 'RZ',
    title: 'Founder & Developer',
    links: [
      { icon: 'github', link: 'https://github.com/RobiZona' },
      { icon: 'discord', link: 'https://discord.gg/QuX5GYTarA' }
    ]
  }
]

// In futuro:
// const developers = []
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Team</template>
  </VPTeamPageTitle>

  <VPTeamPageSection>
    <template #title>Founder</template>
    <template #members>
      <VPTeamMembers size="medium" :members="director" />
    </template>
  </VPTeamPageSection>

</VPTeamPage>
