import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'AI生产力指南',
  description: 'AI工具深度评测 · 效率方法论 · 让你的工作快人一步',
  
  head: [
    ['meta', { name: 'theme-color', content: '#3a86ff' }],
    ['meta', { name: 'baidu-site-verification', content: '' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI工具', link: '/category/ai-tools' },
      { text: '效率方法', link: '/category/productivity' },
      { text: '关于', link: '/about' },
    ],

    sidebar: {
      '/posts/': [
        {
          text: '最新文章',
          items: [
            { text: '2024年必备的10款AI效率工具', link: '/posts/top-10-ai-tools-2024' },
          ]
        }
      ]
    },

    footer: {
      message: '让AI成为你的生产力引擎',
      copyright: '© 2026 AI生产力指南'
    },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
  },

  markdown: {
    lineNumbers: true,
  },
})
