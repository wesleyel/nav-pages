---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: Wesley's
  text: 个人导航
  tagline: 一些个人常用的链接
  image:
    src: /logo.png
    alt: Wesley's
  actions:
    - text: 前往导航
      link: /nav/

features:
  - icon: 📖
    title: Blog
    details: 我的 Blog 页面
    link: https://wesleyel.github.io/
    linkText: 前往
  - icon: 🐙
    title: Github Profile
    details: 我的 Github 页面
    link: https://github.com/wesleyel
    linkText: 前往
  - icon: 🗽
    title: League Fan
    details: LOL 皮肤预览站
    link: https://league-fan.github.io/
    linkText: 前往
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
