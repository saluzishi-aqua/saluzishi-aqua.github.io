@echo off
chcp 65001 >nul

:: ===============================================================
:: 墨香轩博客一键部署脚本 (Windows)
:: ===============================================================

echo ========================================
echo   欢迎使用墨香轩博客一键部署脚本
echo ========================================
echo.

:: 检查必要工具
echo 📋 检查必要工具...

where git >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 未找到 git，请先安装
    exit /b 1
)
echo ✓ git 已安装

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 未找到 node，请先安装
    exit /b 1
)
echo ✓ node 已安装

where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 未找到 npm，请先安装
    exit /b 1
)
echo ✓ npm 已安装

echo.

:: 获取GitHub用户名
set /p USERNAME="请输入你的GitHub用户名: "
if "%USERNAME%"=="" (
    echo ❌ 用户名不能为空
    exit /b 1
)

:: 配置博客
echo.
echo 🔧 配置博客...

:: 使用PowerShell更新配置文件
powershell -Command "(Get-Content '_config.yml') -replace 'http://example.com', 'https://%USERNAME%.github.io' | Set-Content '_config.yml'"
powershell -Command "(Get-Content '_config.yml') -replace '\$\{GITHUB_USERNAME\}', '%USERNAME%' | Set-Content '_config.yml'"
powershell -Command "(Get-Content '_config.next.yml') -replace 'yourname', '%USERNAME%' | Set-Content '_config.next.yml'"

echo ✓ 配置文件已更新

:: 安装依赖
echo.
echo 📦 安装依赖...
call npm install

:: 构建
echo.
echo 🏗️  构建博客...
call npx hexo clean
call npx hexo generate

echo ✓ 构建完成

:: GitHub仓库设置
echo.
echo 📤 推送到GitHub...
echo.
echo 请按以下步骤操作：
echo.
echo 1. 在GitHub上创建两个仓库：
echo    • %USERNAME%.github.io （用于发布博客）
echo    • blog-source （可选，用于存储源代码）
echo.
echo 2. 然后运行以下命令：
echo.
echo    # 推送到源代码仓库（可选）
echo    git remote add origin https://github.com/%USERNAME%/blog-source.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. 启用GitHub Actions自动部署：
echo    • 进入仓库 Settings -^> Pages
echo    • Source 选择 'GitHub Actions'
echo.
echo 4. 访问你的博客：
echo    https://%USERNAME%.github.io
echo.
echo ========================================
echo   部署准备完成！
echo ========================================

pause
