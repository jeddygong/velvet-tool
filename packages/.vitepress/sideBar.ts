const Guide = [
  { text: 'Get Started', link: '/guide/' },
  { text: 'Best Practice', link: '/guide/best-practice' },
  { text: 'Contributing', link: '/guide/contributing' },
];

const functions = [Guide, { text: 'getDevice', link: '/core/getDevice/' }];

const vueHooks = [functions, { text: '建设中', link: '' }];

const reactHooks = [functions, { text: '建设中', link: '' }];

export const DefaultSideBar = [
  { text: '指导', items: Guide },
  { text: '工具函数集合', items: functions },
  { text: 'Vue Hooks集合', items: vueHooks },
  { text: 'React Hooks集合', items: reactHooks },
];
