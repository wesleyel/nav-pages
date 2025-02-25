import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '常用工具',
    items: [
      // {
      //   icon: 'https://caniuse.com/img/favicon-128.png',
      //   title: 'Can I use',
      //   desc: '前端 API 兼容性查询',
      //   link: 'https://caniuse.com',
      // },
    ],
  },
  {
    title: 'AI 相关',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT',
        link: 'https://chat.openai.com/chat',
      },
      {
        icon: 'https://www.deepseek.com/favicon.ico',
        title: 'Deepseek',
        link: 'https://chat.deepseek.com',
      },
      {
        icon: 'https://grok.com/icon-192x192.png',
        title: 'Grok',
        link: 'https://grok.com',
      },
      {
        icon: 'https://devv.ai/favicon-light.png',
        title: 'Devv AI',
        desc: 'Devv AI代码搜索',
        link: 'https://devv.ai/zh',
      },
      {
        icon: 'https://metaso.cn/favicon.ico',
        title: 'Metaso AI',
        desc: '秘塔AI搜索',
        link: 'https://metaso.cn',
      },
    ],
  },
  {
    title: '流行趋势',
    items: [
      {
        icon: 'https://ph-static.imgix.net/ph-favicon-brand-500.ico',
        title: 'Product Hunt',
        desc: '发现新产品和创业公司',
        link: 'https://www.producthunt.com',
      },
      {
        icon: 'https://openalternative.co/favicon.png',
        title: 'Open Alternative',
        desc: '发现流行软件的开源替代品',
        link: 'https://openalternative.co/?sort=publishedAt.desc',
      },
      {
        icon: 'https://startupfa.me/favicon.ico',
        title: 'Startup Frame',
        desc: 'Explore the best trending startups & products on the internet.',
        link: 'https://startupfa.me/',
      },
      {
        icon: 'https://trendshift.io/favicon.ico',
        title: 'Trendshift',
        desc: '查看Github的流行趋势',
        link: 'https://trendshift.io/?trending-range=7',
      },
    ],
  },
  {
    title: '新闻网站',
    items: [
      {
        icon: 'https://www.buzzing.cc/favicon.ico?v=20230310',
        title: 'Buzzing',
        desc: '聚合各个国外平台的新闻',
        link: 'https://www.buzzing.cc',
      },
      {
        icon: 'https://momoyu.cc/icon-192.png',
        title: '摸摸鱼',
        desc: '国内新闻热搜',
        link: 'https://momoyu.cc',
      },
    ],
  },
  {
    title: '逛逛论坛',
    items: [
      {
        icon: 'https://www.v2ex.com/static/icon-196.png',
        title: 'V2EX',
        desc: '创意工作者们的社区',
        link: 'https://www.v2ex.com',
      },
      {
        icon: 'https://linux.do/uploads/default/original/3X/9/d/9dd49731091ce8656e94433a26a3ef36062b3994.png',
        title: 'linux.do',
        desc: '搞七捻三的技术论坛',
        link: 'https://linux.do',
      },
    ],
  },
]
