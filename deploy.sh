# 终止一个错误
set -e

# 构建
npm run docs:build

# 进入生成的构建文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://liuyukuai.github.io
git push -f https://github.com/liuyukuai/liuyukuai.github.io.git master

cd -