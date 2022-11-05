import { DefaultSideBar } from './sideBar';

export default {
  base: '/velvet/',
  title: 'velvet',
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: true,
    lastUpdatedText: '最后修改时间',
    socialLinks: [{ icon: 'github', link: 'https://github.com/jeddygong/velvet' }],
    editLinks: true,
    editLink: {
      pattern: 'https://github.com/jeddygong/velvet/main/docs/:path',
      text: '为此页提供修改建议',
    },
    nav: [
      { text: '指南', link: '/guild/' },
      { text: '函数集合', link: '/core/getDevice/' },
    ],
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
      '/core/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
    },
  },
};
