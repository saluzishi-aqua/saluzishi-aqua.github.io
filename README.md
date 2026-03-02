# 墨香轩 - 文人墨客风格个人博客

[![Deploy](https://github.com/yourname/yourname.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/yourname/yourname.github.io/actions/workflows/deploy.yml)

一个基于 [Hexo](https://hexo.io/) + [NexT](https://theme-next.js.org/) 的文人墨客风格个人博客，专注于天文地理、生活风水、诗词歌赋等传统文化主题。

## ✨ 特性

- 🎨 **文人墨客风格**：宣纸黄、墨黑、朱砂红的传统配色
- 🌙 **深色/浅色模式**：根据喜好自由切换
- 📱 **响应式设计**：完美适配手机、平板、电脑
- 🔍 **站内搜索**：快速找到想要的内容
- 📚 **分类管理**：天文地理、生活风水、诗词歌赋三大主题
- 🚀 **全自动部署**：推送到 GitHub 自动构建并部署

## 🚀 快速开始

### 1. Fork 或克隆本仓库

点击右上角的 "Fork" 按钮，将本仓库复制到你的 GitHub 账号下。

### 2. 修改配置

编辑以下文件，修改为你的个人信息：

**`_config.yml`**（站点配置）：
```yaml
title: 你的博客名称
subtitle: 你的博客副标题
author: 你的名字
description: 你的博客描述

# 部署配置
deploy:
  repo: https://github.com/你的用户名/你的用户名.github.io.git
```

**`_config.next.yml`**（主题配置）：
```yaml
menu:
  首页: / || fa fa-home
  # 添加你想要的菜单项

social:
  GitHub: https://github.com/你的用户名 || fab fa-github
  邮箱: mailto:你的邮箱@gmail.com || fa fa-envelope
```

### 3. 启用 GitHub Actions

1. 进入仓库的 **Settings** -> **Pages**
2. Source 选择 "GitHub Actions"
3. 系统会自动使用 `.github/workflows/deploy.yml` 进行部署

### 4. 推送代码触发部署

```bash
git add .
git commit -m "初始化我的博客"
git push origin main
```

稍等片刻，访问 `https://你的用户名.github.io` 即可看到你的博客！

## 📝 写作指南

### 创建新文章

```bash
hexo new "文章标题"
```

文章会创建在 `source/_posts/` 目录下。

### 文章格式

```markdown
---
title: 文章标题
categories: 分类名称
tags: [标签1, 标签2]
date: 2024-01-01 12:00:00
description: 文章简介
---

文章内容...
```

### 推荐分类

- `天文地理` - 星空、山川、地理探索
- `生活风水` - 风水知识、居家布局
- `诗词歌赋` - 古典诗词赏析

## 🎨 自定义样式

博客样式在 `source/_data/styles.styl` 中定义，使用传统中国色彩：

- **墨黑** `#2C2C2C` - 主要文字颜色
- **宣纸黄** `#F5F0E1` - 卡片背景色
- **朱砂红** `#C9372C` - 强调色、链接色
- **竹青** `#7B8B6F` - 辅助色
- **赭石** `#B8860B` - 装饰色

## 🛠️ 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
hexo server

# 生成静态文件
hexo generate

# 部署（手动）
hexo deploy
```

## 📂 目录结构

```
my-blog/
├── _config.yml          # 站点配置
├── _config.next.yml     # 主题配置
├── package.json         # 依赖管理
├── source/              # 源文件
│   ├── _posts/          # 文章
│   ├── about/           # 关于页面
│   └── _data/           # 自定义数据
├── themes/              # 主题
├── public/              # 生成的静态文件
└── .github/workflows/   # GitHub Actions
```

## 🔧 常见问题

### 1. 部署后页面样式丢失

检查 `_config.yml` 中的 `url` 配置是否正确：
```yaml
url: https://你的用户名.github.io
```

### 2. 图片不显示

将图片放在 `source/images/` 目录下，引用方式：
```markdown
![描述](/images/图片名.jpg)
```

### 3. 如何绑定自定义域名？

1. 在 `source/` 目录下创建 `CNAME` 文件，内容为你的域名
2. 在域名服务商处添加 CNAME 记录指向 `你的用户名.github.io`
3. 在 `.github/workflows/deploy.yml` 中设置 `cname: 你的域名`

### 4. 评论系统配置

本博客支持多种评论系统，编辑 `_config.next.yml`：
```yaml
comments:
  active: giscus  # 或其他评论系统
```

## 📜 许可证

本博客内容采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 协议。

## 🙏 致谢

- [Hexo](https://hexo.io/) - 快速、简洁且高效的博客框架
- [NexT](https://theme-next.js.org/) - 优雅而强大的 Hexo 主题

---

> "笔墨当随时代，文章合为时而著。"

愿你在这个数字时代，也能找到属于自己的墨香之地。
