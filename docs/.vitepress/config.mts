import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blog",
  description: "A VitePress Site",
  base: "/myself/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '小记', link: '/'},
      { text: 'python', link: '/'},
      { text: 'CS', link: '/'},
      { text: '数学', link: '/'},
      { text: '读书笔记', link: '/booknotes/读书笔记'},
      { text: '不务正业', link: '/'}
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '读书笔记',
        collapsed: false,
        items: [
          { text: '小说', link: '/booknotes/novel/index' },
          { text: '神秘复苏', link: '/booknotes/novel/神秘复苏' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
