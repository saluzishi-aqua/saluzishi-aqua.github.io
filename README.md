# 墨香轩 - 文人墨客风格个人博客

[![Deploy](https://github.com/yourname/yourname.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourname/yourname.github.io/actions/workflows/deploy.yml)

一个基于 [Hexo](https://hexo.io/) + [NexT](https://theme-next.js.org/) 的文人墨客风格个人博客，专注于天文地理、生活风水、诗词歌赋等传统文化主题。

![墨香轩预览](https://user-images.githubusercontent.com/placeholder.png)

## ✨ 特性

- 🎨 **文人墨客风格**：宣纸黄、墨黑、朱砂红的传统配色，营造古典书卷气息
- 📱 **响应式设计**：完美适配手机、平板、电脑
- 🔍 **站内搜索**：基于本地索引的快速搜索功能
- 📚 **分类管理**：天文地理、生活风水、诗词歌赋三大主题
- 🚀 **全自动部署**：推送到 GitHub 自动构建并部署到 Pages
- 🌙 **深色模式支持**：可根据系统偏好自动切换
- 📖 **阅读体验**：优雅的排版，适合长文阅读

## 🚀 快速开始

### 方式一：使用脚本自动配置（推荐）

#### Windows 用户

双击运行 `setup.cmd`，按提示输入 GitHub 用户名即可。

#### macOS/Linux 用户

```bash
chmod +x setup.sh
./setup.sh
```

### 方式二：手动配置

#### 1. Fork 本仓库

点击右上角的 "Fork" 按钮，将本仓库复制到你的 GitHub 账号下。

#### 2. 修改站点配置

编辑 `_config.yml`：

```yaml
# 站点信息
title: 你的博客名称
subtitle: 你的博客副标题
description: 你的博客描述
author: 你的名字

# URL 设置（重要！）
url: https://你的用户名.github.io

# 部署配置
deploy:
  type: git
  repo: https://github.com/你的用户名/你的用户名.github.io.git
  branch: main
```

#### 3. 修改主题配置

编辑 `_config.next.yml`：

```yaml
# 菜单设置
menu:
  首页: / || fa fa-home
  天文地理: /categories/天文地理/ || fa fa-star
  生活风水: /categories/生活风水/ || fa fa-yin-yang
  诗词歌赋: /categories/诗词歌赋/ || fa fa-feather
  关于: /about/ || fa fa-user

# 社交链接
social:
  GitHub: https://github.com/你的用户名 || fab fa-github
  邮箱: mailto:你的邮箱@gmail.com || fa fa-envelope
```

#### 4. 创建 GitHub 仓库

创建两个仓库：
- **你的用户名.github.io** - 用于部署博客（必须是这个名称）
- **blog-source**（可选）- 用于存储源代码

#### 5. 推送到 GitHub

```bash
# 添加远程仓库
git remote add origin https://github.com/你的用户名/blog-source.git
git branch -M main
git push -u origin main
```

#### 6. 启用 GitHub Actions

1. 进入仓库的 **Settings** → **Pages**
2. Source 选择 "GitHub Actions"
3. 系统会自动使用 `.github/workflows/deploy.yml` 进行部署

#### 7. 访问博客

稍等片刻（约 1-2 分钟），访问 `https://你的用户名.github.io` 即可看到你的博客！

## 📝 写作指南

### 创建新文章

```bash
hexo new "文章标题"
```

或手动在 `source/_posts/` 目录下创建 Markdown 文件。

### 文章格式示例

```markdown
---
title: 文章标题
categories: 天文地理
tags: [天文, 观星]
date: 2024-01-15 20:30:00
description: 文章简介，会显示在列表页
---

正文内容...

> 引用块示例

## 二级标题

正文段落，**加粗**，*斜体*。

| 表格 | 示例 |
|------|------|
| 内容1 | 内容2 |
```

### 文章分类建议

| 分类 | 适合内容 |
|------|----------|
| `天文地理` | 星空观测、地理探索、自然现象 |
| `生活风水` | 风水知识、居家布局、传统文化 |
| `诗词歌赋` | 古典诗词赏析、文学作品、读书心得 |

### 添加图片

将图片放在 `source/images/` 目录下：

```markdown
![图片描述](/images/图片名称.jpg)
```

## 🎨 自定义样式

博客样式在 `source/_data/styles.styl` 中定义，使用传统中国色彩：

| 颜色名称 | 色值 | 用途 |
|----------|------|------|
| 墨黑 | `#2C2C2C` | 主要文字颜色 |
| 宣纸黄 | `#F5F0E1` | 卡片背景色 |
| 朱砂红 | `#C9372C` | 强调色、链接色 |
| 竹青 | `#7B8B6F` | 辅助色 |
| 赭石 | `#B8860B` | 装饰色 |

## 🛠️ 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（支持热重载）
hexo server

# 生成静态文件
hexo generate

# 清理缓存
hexo clean

# 部署（手动）
hexo deploy
```

开发服务器启动后，访问 `http://localhost:4000` 预览。

## 📂 目录结构

```
my-blog/
├── _config.yml              # 站点配置
├── _config.next.yml         # 主题配置
├── package.json             # 依赖管理
├── setup.sh / setup.cmd     # 一键部署脚本
├── README.md                # 本文件
├── source/                  # 源文件
│   ├── _posts/              # 博客文章
│   ├── about/               # 关于页面
│   ├── _data/               # 自定义数据
│   │   └── styles.styl      # 自定义样式
│   └── images/              # 图片资源
├── themes/                  # 主题目录
│   └── next/                # NexT主题
├── public/                  # 生成的静态文件（自动创建）
└── .github/workflows/       # GitHub Actions
    └── deploy.yml           # 自动部署配置
```

## 🔧 常见问题

### 1. 部署后页面样式丢失或显示不正确

检查 `_config.yml` 中的 `url` 配置是否正确：
```yaml
url: https://你的用户名.github.io
```

确保与仓库名称完全一致。

### 2. 图片不显示

- 确保图片放在 `source/images/` 目录下
- 引用时使用绝对路径 `/images/图片名.jpg`
- 图片名不要用中文，建议使用英文或数字

### 3. 如何绑定自定义域名？

1. 在 `source/` 目录下创建 `CNAME` 文件，内容为你的域名，如：
   ```
   blog.yourdomain.com
   ```

2. 在域名服务商处添加 CNAME 记录：
   - 主机记录：`blog`（或 `@` 表示根域名）
   - 记录值：`你的用户名.github.io`

3. 在 `.github/workflows/deploy.yml` 中设置：
   ```yaml
   cname: blog.yourdomain.com
   ```

### 4. 如何修改头像？

将你的头像图片命名为 `avatar.png`，放到 `source/images/` 目录下。

### 5. 如何添加评论功能？

编辑 `_config.next.yml`，配置评论系统：

```yaml
comments:
  style: tabs
  active: giscus  # 或 gitalk, utterances 等
```

推荐使用 [Giscus](https://giscus.app/)，它基于 GitHub Discussions，免费且无需额外注册。

### 6. 如何启用文章阅读统计？

编辑 `_config.next.yml`：

```yaml
busuanzi_count:
  enable: true
```

### 7. 如何修改网站图标（favicon）？

将你的图标文件放入 `source/images/` 目录，命名为：
- `favicon-16x16-next.png`
- `favicon-32x32-next.png`
- `apple-touch-icon-next.png`

## 📜 许可证

本博客内容采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 协议。

代码部分采用 MIT 许可证。

## 🙏 致谢

- [Hexo](https://hexo.io/) - 快速、简洁且高效的博客框架
- [NexT](https://theme-next.js.org/) - 优雅而强大的 Hexo 主题
- [Font Awesome](https://fontawesome.com/) - 图标字体库

## 💬 反馈与支持

如果你在使用过程中遇到问题，欢迎：

1. 查看 [Hexo 文档](https://hexo.io/docs/)
2. 查看 [NexT 文档](https://theme-next.js.org/docs/)
3. 在 GitHub 上提交 Issue

---

> "笔墨当随时代，文章合为时而著。" —— 清·石涛

愿你在这个数字时代，也能找到属于自己的墨香之地。

**Enjoy writing! 🖋️**
