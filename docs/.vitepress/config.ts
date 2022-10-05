import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'
export default defineConfig({
  title: "Smarty-UI",
  description: "组件库搭建的教学模型",
  base: '/docs/',
  themeConfig: {
    siteTitle: 'SmartyUI',
    logo: '../logo.svg',
    sidebar,
    nav,
    outlineTitle: '大纲',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Jwen Huang'
    }
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      // md.use(demoBlockPlugin)
    }
  }
})