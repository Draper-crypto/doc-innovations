# 创赛全视角 - 创新创业指导文档

一站式创新创业大赛指导平台，从想法到实践，助你在创赛中脱颖而出。

## ✨ 特性

- 📝 全面的指导：涵盖项目计划书、PPT制作、路演技巧等各个环节
- 🎯 专业的模板：提供标准化的文档模板和案例分析
- 🔍 实时搜索：支持全站内容搜索，快速定位所需信息
- 📱 响应式设计：适配桌面和移动设备，随时随地学习
- 🌙 暗色主题：支持明暗两种主题切换
- 🚀 高性能：基于 VitePress 构建，加载速度快

## 🛠️ 技术栈

- 框架：VitePress
- 样式：CSS 自定义属性 + 响应式设计
- 搜索：VitePress 内置本地搜索
- 图片：自动懒加载 + 放大预览
- SEO：自动生成 sitemap、meta 标签、canonical 链接

## 🚀 快速开始

### 环境要求
- Node.js >= 18

### 安装与运行

```bash
# 进入项目目录
cd docs

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 📁 项目结构

```
docs/
├── .vitepress/              # VitePress 配置
│   ├── config.mts          # 站点配置
│   ├── theme/              # 主题文件
│   │   ├── index.ts        # 主题入口
│   │   └── style.css       # 自定义样式
│   └── plugins/            # 自定义插件
├── proposal/               # 项目计划书指导
├── ppt/                    # PPT制作指导
├── roadshow/               # 路演技巧指导
├── page/                   # 其他页面
├── public/                 # 静态资源
└── index.md                # 首页
```

## 🎨 设计原则
- 可访问性优先：确保内容对所有用户都易于访问
- 移动友好：响应式设计，适配各种屏幕尺寸
- 性能优化：图片懒加载、异步解码
- SEO 友好：结构化数据、语义化标签、优化的 meta 信息

## 📈 性能优化
- 图片自动懒加载与异步解码
- 自动生成 sitemap.xml
- 规范的 canonical 链接
- 优化的 Open Graph 与 Twitter Card 元数据
- 清理的 URL 结构（移除 .html 后缀）
- 支持 tabs 语法的 Markdown 插件

## 🔧 自定义功能

### 图片插件
支持自定义图片尺寸和自动懒加载：
```markdown
![图片描述](image.jpg) <!-- size=400x300 -->
```

### Tabs 语法
使用 `:::tabs` 创建标签页：
```markdown
:::tabs
== Tab 1
内容 1
== Tab 2
内容 2
:::
```

## 📄 许可证
本项目采用 CC BY-NC-ND 4.0 许可。