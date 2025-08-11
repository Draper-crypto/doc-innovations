import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import { ImagePlugin } from './plugins/markdown/image'

const commitRef = process.env.COMMIT_REF?.slice(0, 8) || "dev";

const ogDescription = "从想法到实践";
const ogTitle = "创赛全视角";
const ogUrl = "https://docs.elexvx.com/";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "创赛指南",
  description: "创新创业指导文档",
  lang: "zh-CN", // 更准确的语言标记
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "创赛指南" }],
    ["meta", { property: "og:locale", content: "zh_CN" }],
    ["meta", { property: "og:title", content: ogTitle }],
    // 移除静态 og:url，改由 transformHead 动态注入，避免重复
    ["meta", { property: "og:description", content: ogDescription }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: ogTitle }],
    ["meta", { name: "twitter:description", content: ogDescription }],
    ["meta", { name: "theme-color", content: "#646cff" }],
  ],

  themeConfig: {
    logo: 'https://www.elexvx.com/_astro/favicon.3-PNXi5a_Z11DBnJ.svg',
    // 锚点导航
    outline: {
      level: [2, 6],
      label: '目录'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '快速开始', link: '/intro',
      },
      {
        text: '快速访问',
        items: [
          {
            // 该部分的标题
            // text: 'Section A Title',
            items: [
              { text: '✅ 版权免责', link: '/page/copyright' },
              { text: '✅ 资源下载', link: '/page/download' },
              { text: '✅ 更新日志', link: '/page/log' }
            ]
          }
        ]
      },
      {
        text: '关于我们', link: 'https://www.elexvx.com/company/about',
      },
      // {
      //   text: '前往',
      //   items: [
      //     {
      //       // 该部分的标题
      //       // text: 'Section A Title',
      //       items: [
      //         { text: '✈ 网址导航', link: 'https://nav.elexvx.com/' },
      //       ]
      //     }
      //   ]
      // },
    ],

    sidebar: [
      {
        text: "快速上手",
        link: "/intro",
      },
      {
        text: "项目计划书 💻",
        items: [
          { text: "序", link: "/proposal/start" },
          {
            text: "怎么写？",
            collapsed: false,
            items: [
              { text: "01-声明页", link: "/proposal/00" },
              { text: "01-项目概述", link: "/proposal/01" },
              { text: "02-产品介绍", link: "/proposal/02" },
              { text: "03-技术优势", link: "/proposal/03" },
              { text: "04-发展规划", link: "/proposal/04" },
              { text: "05-市场营销", link: "/proposal/05" },
              { text: "06-创业团队", link: "/proposal/06" },
              { text: "07-财务分析", link: "/proposal/07" },
              { text: "08-合作伙伴", link: "/proposal/08" },
              { text: "09-社会责任与产学融合", link: "/proposal/09" },
              { text: "10-风险及应对策略", link: "/proposal/10" },
              { text: "11-绿色与可持续发展", link: "/proposal/11" },
              { text: "12-其他内容", link: "/proposal/12" },
            ],
          },
          { text: "技巧", link: "/proposal/skills" },
        ],
      },
      // {
      //   text: "PPT",
      //   items: [
      //     { text: "序", link: "/ppt/start" },
      //     {
      //       text: "怎么做？",
      //       collapsed: false,
      //       items: [
      //         { text: "制作规范", link: "/ppt/01" },
      //         { text: "制作原则", link: "/ppt/02" },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   text: "路演",
      //   items: [
      //     { text: "序", link: "/roadshow/start" },
      //     { text: "技巧", link: "/roadshow/skill" },
      //   ],
      // },
      { text: "📖 常见问题", link: "/page/FAQ" },
      { text: "💎 资源下载", link: "/page/download" },
      { text: "版权与许可声明", link: "/page/copyright" },
      { text: "联系我们", link: "/page/contact" },
      { text: "后记", link: "/page/epilogue" },
    ],

    // socialLinks: [{ icon: "github", link: "https://github.com/Draper-crypto" }],

    // 暗色模式切换按钮文本
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '选择语言',

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    footer: {
      message: '本站许可遵循 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">CC BY-NC-ND 4.0</a> | 网站状态：<a href="https://status.elexvx.com" target="_blank">正常</a> ',
      copyright: "Copyright © 2024 宏翔商道创新思维实验室 | 隶属于<a href='https://www.elexvx.com' target='_blank' rel='noopener noreferrer'>宏翔商道（南京）科技发展有限公司</a> | ICP备案：<a href='https://beian.miit.gov.cn/' target='_blank' rel='noopener noreferrer'>苏ICP备2025160017号</a>",

    },
  },
  lastUpdated: true,
  cleanUrls: true, // 更优雅的 URL，有利于 SEO
  sitemap: { hostname: 'https://docs.elexvx.com' }, // 生成站点地图
  markdown: {
    // 自定义MarkDown图片渲染插件
    lineNumbers: true,
    config: (md) => {
      md.use(ImagePlugin)
      md.use(tabsMarkdownPlugin) // 启用 tabs 自定义语法 :::tabs
    },
  },
  locales: {
    root: { label: "简体中文", lang: "zh-CN" },
  },
  // 为每个页面追加 canonical 链接与 og:url，避免重复内容影响 SEO
  transformHead({ page }) {
    try {
      let route = page
        .replace(/((^|\/ )index)?\.md$/, '$2') // 去掉 index.md
        .replace(/\.md$/, '')
      const url = new URL(route.startsWith('/') ? route : `/${route}`, ogUrl).toString()
      return [
        ['link', { rel: 'canonical', href: url }],
        ['meta', { property: 'og:url', content: url }]
      ]
    } catch {
      return []
    }
  }
});
