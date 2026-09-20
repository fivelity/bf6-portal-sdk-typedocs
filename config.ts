import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.DOCS_BASE || '/',
  title: 'BF6 Portal SDK',
  description: 'Typed documentation for Battlefield 6 Portal SDK development.',
  cleanUrls: true,
  ignoreDeadLinks: [/functions\/index/],
  appearance: 'dark',
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#0D0F14' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: false,
    outline: [2, 3],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/fivelity/bf6-portal-sdk-typedocs',
      },
    ],
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API Reference', link: '/api/' },
      { text: 'Archive', link: '/archive/' },
      { text: 'Community', link: '/community' },
      { text: 'Changelog', link: '/changelog' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Field Manual',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Examples', link: '/guide/examples' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [{ text: 'Overview', link: '/api/' }],
        },
      ],
      '/archive/': [
        {
          text: 'Version Archive',
          items: [{ text: 'All Versions', link: '/archive/' }],
        },
      ],
      '/': [
        {
          text: 'Documentation',
          items: [
            { text: 'Guide', link: '/guide/getting-started' },
            { text: 'API Reference', link: '/api/' },
            { text: 'Archive', link: '/archive/' },
            { text: 'Community', link: '/community' },
            { text: 'Changelog', link: '/changelog' },
          ],
        },
      ],
    },
    footer: {
      message: 'Built for Portal creators.',
      copyright: 'BF6 Portal SDK Docs',
    },
  },
  markdown: {
    theme: {
      light: 'github-dark',
      dark: 'github-dark',
    },
  },
})
