import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import { ImagePlugin } from './plugins/markdown/image'

const commitRef = process.env.COMMIT_REF?.slice(0, 8) || "dev";

const ogDescription = "从想法到实践";
const ogImage = "https://doc.orionai.top/cover.jpg";
const ogTitle = "创赛全视角";
const ogUrl = "https://doc.orionai.top";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "创赛指南",
  description: "创新创业指导文档",
  lang: "zh",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: ogTitle }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:description", content: ogDescription }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@cryptodraper1" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "项目官网", link: "https://www.orionai.top/" },
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
        text: '前往',
        items: [
          {
            // 该部分的标题
            // text: 'Section A Title',
            items: [
              { text: '✈ 网址导航', link: 'https://nav.johntao.top/' },
            ]
          }
        ]
      },
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
              { text: "00-参赛承诺和声明", link: "/proposal/00" },
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
      {
        text: "PPT",
        items: [
          { text: "序", link: "/ppt/start" },
          {
            text: "怎么做？",
            collapsed: false,
            items: [
              { text: "制作规范", link: "/ppt/01" },
              { text: "制作原则", link: "/ppt/02" },
            ],
          },
        ],
      },
      {
        text: "路演",
        items: [
          { text: "序", link: "/roadshow/start" },
          { text: "技巧", link: "/roadshow/skill" },
        ],
      },
      { text: "📖 常见问题", link: "/page/FAQ" },
      { text: "💎 资源下载", link: "/page/download" },
      { text: "版权与免责", link: "/page/copyright" },
      { text: "致谢", link: "/page/thank" },
      { text: "后记", link: "/page/epilogue" },
    ],

    // socialLinks: [{ icon: "github", link: "https://github.com/Draper-crypto" }],

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
      message: 'Licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">CC BY-NC-ND 4.0</a> | <a href="/page/copyright">Copyright Agreement and Disclaimer</a> | <a href="https://status.orionai.top/" target="_blank">Website Status</a>',
      copyright: "Copyright © 2024 By Innovation and Entrepreneurship Tutorial Writing Team",
    },

    // editLink: {
    //   pattern: "https://github.com/Draper-crypto/doc-innovations/edit/main/:path",
    //   text: "Edit this page on GitHub",
    // },
  },
  lastUpdated: true,
  markdown: {
    // 自定义MarkDown图片渲染插件
    lineNumbers: true,
    config: (md) => {
      md.use(ImagePlugin)
    },
  },
  locales: {
    root: { label: "简体中文", lang: "zh" },
  },
});
