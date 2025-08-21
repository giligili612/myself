import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
  markdown:{
    math: true
  },

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
      { text: '算法刷题', link: '/DSA/算法刷题'},
      { text: '数学', link: '/math/数学'},
      { text: '读书笔记', link: '/booknotes/读书笔记'},
      { text: '不务正业', link: '/'}
    ],

    sidebar: {
    '/booknotes/':[
      {
        text: '读书笔记',
        link: '/booknotes/读书笔记',
      },
      {
        text: '小说',
        link: '/booknotes/novel/index',
        collapsed: true,
        items: [
          { text: '神秘复苏', link: '/booknotes/novel/神秘复苏' }
        ]
      }
    ],
    '/DSA/':[
      {
        text: '灵茶山艾府  基础算法精讲系列',
        link: '/DSA/算法刷题',
        collapsed: true,
        items:[
          { text: 'n数之和问题', link: '/DSA/灵茶山艾府 基础算法精讲/n数之和'}
        ]
      }
    ],
    '/数学/':[
      {
        text: '公式测试',
        link: '/booknotes/读书笔记'
      }
    ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
