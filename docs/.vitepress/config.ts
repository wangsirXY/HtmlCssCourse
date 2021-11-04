export default {
  lang: 'en-US',
  title: 'GuAn学习日记',
  description: 'HTML、CSS技术文档',
  base: "/HtmlCssCourse",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    docsDir: 'docs',

    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',

    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',
    info: "引用",

    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress'
    },
    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'Config Reference',
        link: '/config/basics',
        activeMatch: '^/config/',
      },
      {
        text: '我的技术栈',
        activeMatch: '^/config/',
        items: [
          {
            text: 'Html & CSS',
            link: '/documents/HtmlCss/introduction',
            activeMatch: '^/config/',
          },
          {
            text: 'JavaScript',
            link: '/documents/javaScript/javaScript',
            activeMatch: '^/config/',
          },
          {
            text: 'jQuery',
            link: '/documents/javaScript/jQuery',
            activeMatch: '^/config/',
          },
          {
            text: 'javaScript高级',
            link: '/documents/javaScript/javaScript-advanced',
            activeMatch: '^/config/',
          },
        ]
      },
      {
        text: '友情链接',
        activeMatch: '^/config/',
        items: [
          {
            text: 'GuAn',
            link: 'http://wangsir.info/',
            activeMatch: '^/config/',
          },
          {
            text: 'irohane的个人博客',
            link: 'https://www.irohane.top/',
            activeMatch: '^/config/',
          }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/wangsirXY/', activeMatch: '^/$|^/guide/' },
    ],
    sidebar: {
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    /** 一个对象是一个侧边栏标题
     * text：标题   children：二级菜单栏   link：地址 */
     {
      text: '引言',
      children: [
        { text: 'Get Started', link: '/documents/HtmlCss/introduction' },
      ]
    },
    {
      text: 'HTML',
      children: [
        { text: 'Get Started', link: '/documents/HtmlCss/html' },
      ]
    },
    {
      text: 'CSS',
      children: [
        { text: 'Get Started', link: '/documents/HtmlCss/css' },
      ]
    },
    //#region 暂不展示
    {
      text: 'javaScript',
      children: [
        { text: 'Get Started', link: '/documents/javaScript/javaScript' },
      ]
    },
    {
      text: 'jQuery',
      children: [
        { text: 'Get Started', link: '/documents/javaScript/jQuery' },
      ]
    },
    {
      text: 'javaScript高级',
      children: [
        { text: 'Get Started', link: '/documents/javaScript/javaScript-advanced' },
      ]
    },
    //#endregion
  ]
}