---
layout: home
title: Home
description: RZ Development Documentation.
head:
  - - meta
    - name: keywords
      content: RedM, Red Dead Redemption 2, RDR2 roleplay, RedM scripts, RedM resources, VORP, RSG, RPX, rz development, robizona, RedM showcase server, FiveM, Grand Theft Auto, GTA roleplay, FiveM scripts, FiveM resources, ESX, QB, FiveM showcase server

hero: 
  name: RZ
  text: Development
  image:
    src: /LogoShop.webp
    alt: RobiZona Logo
  tagline: Probably written at 3AM.
  actions:
    - theme: brand
      text: Tebex Store
      link: https://robizona.tebex.io/
features:
  - icon:
      src: /icons/users.svg
      alt: About the project
      width: 32
      height: 32
    title: About the project
    details: RZ Development is a personal development project focused on creating custom scripts with a strong emphasis on performance, clean architecture, and long-term maintainability. Everything here is built from real use cases, tested in real environments, and designed to stay understandable and maintainable over time.
    link: https://discord.gg/QuX5GYTarA
    linkText: Contact Us
  - icon:
      src: /icons/book.svg
      alt: Documentation
      width: 32
      height: 32
    title: Documentation
    details: This website contains the official documentation for all RZ Development scripts. Here you’ll find installation guides, configuration examples, version history, and changelogs, all kept in sync with the actual code.
    link: /docs
    linkText: View Docs
---

<!-- <div class="scroll-arrow-container">
  <a href="#sponsors" class="scroll-arrow-link" aria-label="Scroll to Sponsored Projects">
    <svg class="scroll-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </a>
</div> -->

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const sponsors = [
    /* {
        avatar: '/sponsor/fat-lady.webp',
        name: 'FAT LADY',
        title: 'RDR2 Roleplay',
        links: [
            { icon: 'discord', link: 'https://discord.gg/fatlady' },
        ]
    }, */
]
</script>

<!-- <VPTeamPage id="sponsors">
  <VPTeamPageTitle>
    <template #title>Sponsored projects</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="sponsors" />
</VPTeamPage> -->