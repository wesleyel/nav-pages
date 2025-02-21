import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: 'Wesley 的个人导航',
  description: 'Wesley 的个人导航',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/wesleyel/nav-pages' }],

    footer: {
      message: 'Thanks to <a href="https://github.com/maomao1996/vitepress-nav-template">vitepress-nav-template@maomao1996</a> ❤️ for the original template',
      copyright: 'Copyright © 2025 Wesley',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/
    visitor: {
      badgeId: 'wesleyel.nav-pages',
    },

    comment: {
      repo: 'wesleyel/nav-pages',
      repoId: 'R_kgDON9FQeA',
      category: 'Q&A',
      categoryId: 'DIC_kwDON9FQeM4CnKlN',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
