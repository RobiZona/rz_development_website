import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default defineConfig({
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  base: '/',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  useWebFonts: false,

  title: 'RZ Development',
  description: 'Custom scripts designed for real use. Focused on performance, stability, and long-term reliability.',

  head: [
    // Favicon
    ['link', { rel: 'icon', sizes: '64x64', href: '/LogoShop.webp' }],

    // Viewport
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],

    // SEO base
    ['meta', { name: 'author', content: 'RZ Development' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'custom scripts, game scripts, server scripts, rz development, robizona, automation scripts, lua scripts, javascript scripts'
      }
    ],

    // Canonical base (verrà sovrascritto per pagina)
    ['link', { rel: 'canonical', href: 'https://robizona.pages.dev/' }],

    // Fonts preload (ok tenerli)
    ['link', { rel: 'preload', href: '/fonts/space-grotesk/space-grotesk-v22-latin-regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
    ['link', { rel: 'preload', href: '/fonts/space-grotesk/space-grotesk-v22-latin-500.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
    ['link', { rel: 'preload', href: '/fonts/space-grotesk/space-grotesk-v22-latin-700.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],
    ['link', { rel: 'preload', href: '/fonts/space-mono/space-mono-v17-latin-regular.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }]
  ],
  
  // Transform page data for dynamic meta tags
  async transformPageData(pageData) {
    const baseUrl = 'https://robizona.pages.dev'
    const path = pageData.relativePath
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '')

    const canonicalUrl = `${baseUrl}/${path}`

    if (!pageData.frontmatter.head) {
      pageData.frontmatter.head = []
    }

    const title = pageData.frontmatter.title
      ? `${pageData.frontmatter.title} | RZ Development`
      : 'RZ Development'

    const description =
      pageData.frontmatter.description ||
      'Custom scripts designed for real use. Focused on performance, stability, and long-term reliability.'

    pageData.frontmatter.head.push(
      ['meta', { name: 'description', content: description }],
      ['link', { rel: 'canonical', href: canonicalUrl }]
    )
  },
  
themeConfig: {
  logo: '/LogoShop.webp',
  siteTitle: 'RZ Development',

  outline: {
    level: 'deep',
    label: 'On this page',
  },

  search: {
    provider: 'local',
    options: {
      translations: {
        button: {
          buttonText: 'Search',
        },
      },
    },
  },

  nav: [
    { text: 'Home', link: '/' },
    { text: 'Docs', link: '/docs/' },
    { text: 'Team', link: '/team/' },
    // { text: 'Partner', link: '/partner/' }, // attivalo solo quando esiste
  ],

  socialLinks: [
    { icon: 'github', link: 'https://github.com/RobiZona' },
    { icon: 'discord', link: 'https://discord.gg/QuX5GYTarA' },
    { icon: 'youtube', link: 'https://www.youtube.com/@RobiZonaStore' },
    { icon: 'instagram', link: 'https://www.instagram.com/robizona' },
  ],
  sidebar: [
    {
      text: 'RedM',
      collapsed: false,
      items: [
        { text: 'Herbs', link: '/doc_scripts/robizona/herbs.md' },
        { text: 'Eggs', link: '/doc_scripts/robizona/eggs.md' },
        // aggiungi qui altri script RedM
      ],
    },
    {
      text: 'FiveM',
      collapsed: true,
      items: [
        // quando li avrai
        // { text: 'script_name', link: '/docs/fivem/script_name/' },
      ],
    },
  ],
  footer: {
    message: 'Released under the GNU General Public License v3.0.',
    copyright:
      '© 2025 <a style="color:#f25c05;" href="https://discord.gg/QuX5GYTarA" target="_blank" rel="noopener">RZ Development</a>',
  }, 
},

  // Vite config for bundle optimization
  vite: {
    build: {
      chunkSizeWarningLimit: 2000,
    }
  }
})
