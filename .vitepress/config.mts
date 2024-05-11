/*
 * @Description:
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2023-08-22 11:34:10
 * @LastEditTime: 2023-09-02 21:53:30
 * @LastEditors: 安知鱼
 */
import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

const commitRef = process.env.COMMIT_REF?.slice(0, 8) || "dev";

const ogDescription = "一个简洁、美丽的hexo主题";
const ogImage = "https://docs.anheyu.com/cover.jpg";
const ogTitle = "安知鱼主题";
const ogUrl = "https://docs.anheyu.com";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "创新创业",
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
    ["meta", { name: "twitter:site", content: "@anzhiyu" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
    // 添加百度统计代码
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?bfb308357e73d7e9c856af04a77e822d";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
       `,
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "作者博客", link: "https://blog.johntao.top/" }],

    sidebar: [
      {
        text: "快速上手",
        link: "/intro",
      },
      {
        text: "项目计划书 💻",
        items: [
          { text: "概述", link: "/proposal/start" },
          {
            text: "怎么写？",
            collapsed: false,
            items: [
              { text: "01-项目概述", link: "/proposal/01" },
              { text: "02-产品介绍", link: "/proposal/02" },
              { text: "03-技术优势", link: "/proposal/03" },
              { text: "04-发展规划", link: "/proposal/04" },
              { text: "05-营销策略", link: "/proposal/05" },
              { text: "06-财务分析", link: "/proposal/06" },
              { text: "07-团队概况", link: "/proposal/07" },
              { text: "08-合作伙伴", link: "/proposal/08" },
              { text: "09-风险及应对策略", link: "/proposal/09" },
              { text: "10-社会责任", link: "/proposal/10" },
              { text: "11-产学融合", link: "/proposal/11" },
              { text: "12-其他内容", link: "/proposal/12" },
            ],
          },
          { text: "技巧", link: "/proposal/skills" },
        ],
      },
      {
        text: "PPT",
        items: [
          { text: "正在编写维护", link: "/page/404" },
          {
            text: "正在编写维护 📦",
            collapsed: false,
            items: [
              { text: "正在编写维护", link: "/page/404" },
              { text: "正在编写维护", link: "/page/404" },
              { text: "正在编写维护", link: "/page/404" },
              { text: "正在编写维护", link: "/page/404" },
            ],
          },
        ],
      },
      {
        text: "路演",
        items: [
          { text: "正在编写维护", link: "/page/404" },
          {
            text: "正在编写维护 📦",
            collapsed: false,
            items: [
              { text: "正在编写维护", link: "/page/404" },
              { text: "正在编写维护", link: "/page/404" },
              { text: "正在编写维护", link: "/page/404" },
              { text: "正在编写维护", link: "/page/404" },
            ],
          },
        ],
      },
      { text: "常见问题 📖", link: "/FAQ" },
      { text: "致谢", link: "/thank" },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Draper-crypto" }],

    algolia: {
      appId: "CITURDDECN",
      apiKey: "e5c83518b67da17a254574c31759596b",
      indexName: "anheyu",
      // searchParameters: {
      //   facetFilters: ["tags:en"],
      // },
      locales: {
        zh: {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    },

    footer: {
      message: `Released under the MIT License. (${commitRef})`,
      copyright: "Copyright © 2023 John Tao",
    },

    editLink: {
      pattern: "https://github.com/anzhiyu-c/anzhiyu-docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },
  },
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
  locales: {
    root: { label: "简体中文", lang: "zh" },
  },
});
