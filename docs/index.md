---
layout: home

hero:
  name: Smarty UI
  text: vue3+ts+unocss搭建的组件库
  tagline: 高效易用的组件库
  image:
    src: /logo.svg
    alt: VitePress
  actions:
    - theme: brand
      text: 开始
      link: /components/button/
    - theme: alt
      text: 查看仓库
      link: https://github.com/Jwenh

features:
  - icon: ⚡️
    title: 高效
    details: Lorem ipsum...
  - icon: 🖖
    title: 易用
    details: Lorem ipsum...
  - icon: 🛠️
    title: 可扩展
    details: Lorem ipsum...
---
<script setup>
import { VPTeamMembers,VPTeamPageSection } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.itc.cn%2Fq_70%2Fimages03%2F20201015%2F184a1c7630ff44d38ffc3b8a93ef3988.jpeg&refer=http%3A%2F%2Fp1.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667635419&t=a3f95273e001ac6c7a3541b0cd76df76',
    name: 'Jwenh',
    title: '作者',
    links: [
      { icon: 'github', link: 'https://github.com/Jwenh' },
      { icon: 'twitter', link: 'https://github.com/Jwenh' }
    ]
  },
]
</script>
# 
<VPTeamPageSection>
    <template #title>团队介绍</template>
    <template #lead>前端团队</template>
    <template #members>
      <VPTeamMembers size='small' :members="members" />
    </template>
</VPTeamPageSection>