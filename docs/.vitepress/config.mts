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
      { text: '小事记', link: '/diary/日记' },
      { text: 'Python', link: '/'},
      { text: 'Go', link: '/'},
      { text: '算法刷题', link: '/DSA/算法刷题'},
      { text: '数学', link: '/math/数学'},
      { text: '读书笔记', link: '/booknotes/读书笔记'},
      { text: '不务正业', link: '/'}
    ],

    sidebar: {
      
    '/booknotes/':[
      {
        text: '小说',
        collapsed: true,
        items: [
          { text: '神秘复苏', link: '/booknotes/novel/神秘复苏' }
        ]
      }
    ],
    '/DSA/':[
      {
        text: '导航',
        link: '/DSA/算法刷题',
      },
      {
        text: '小无相功',
        collapsed: true,
        items:[
          { text: 'n数之和问题', link: '/DSA/灵茶山艾府 基础算法精讲/n数之和'}
        ]
      }
    ],
    '/math/':[
      {
        text: '数学主页',
        link: '/math/数学'
      }
    ],
    '/diary/':[
      {
        text: '小事记',
        link: '/diary/日记'
      },
      {
        text: '2025',
        collapsed: true,
        items:[
          { text: '8月', link: '/diary/2025/8月'},
          { text: '9月', link: '/diary/2025/9月'}
        ]
      }
    ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
