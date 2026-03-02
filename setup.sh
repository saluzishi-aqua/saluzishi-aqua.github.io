#!/bin/bash

# ===============================================================
# 墨香轩博客一键部署脚本
# ===============================================================

set -e

echo "========================================"
echo "  欢迎使用墨香轩博客一键部署脚本"
echo "========================================"
echo ""

# 检查必要工具
check_command() {
    if ! command -v "$1" &> /dev/null; then
        echo "❌ 未找到 $1，请先安装"
        exit 1
    fi
    echo "✓ $1 已安装"
}

echo "📋 检查必要工具..."
check_command git
check_command node
check_command npm
echo ""

# 获取GitHub用户名
read -p "请输入你的GitHub用户名: " USERNAME
if [ -z "$USERNAME" ]; then
    echo "❌ 用户名不能为空"
    exit 1
fi

# 配置博客
echo ""
echo "🔧 配置博客..."

# 更新 _config.yml
sed -i "s/http:\/\/example.com/https:\/\/$USERNAME.github.io/g" _config.yml
sed -i "s/\${GITHUB_USERNAME}/$USERNAME/g" _config.yml

# 更新主题配置
sed -i "s/yourname/$USERNAME/g" _config.next.yml

echo "✓ 配置文件已更新"

# 安装依赖
echo ""
echo "📦 安装依赖..."
npm install

# 构建
echo ""
echo "🏗️  构建博客..."
hexo clean
hexo generate

echo "✓ 构建完成"

# GitHub仓库设置
echo ""
echo "📤 推送到GitHub..."
echo ""
echo "请按以下步骤操作："
echo ""
echo "1. 在GitHub上创建两个仓库："
echo "   • $USERNAME.github.io （用于发布博客）"
echo "   • blog-source （可选，用于存储源代码）"
echo ""
echo "2. 然后运行以下命令："
echo ""
echo "   # 推送到源代码仓库（可选）"
echo "   git remote add origin https://github.com/$USERNAME/blog-source.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. 启用GitHub Actions自动部署："
echo "   • 进入仓库 Settings -> Pages"
echo "   • Source 选择 'GitHub Actions'"
echo ""
echo "4. 访问你的博客："
echo "   https://$USERNAME.github.io"
echo ""
echo "========================================"
echo "  部署完成！"
echo "========================================"
