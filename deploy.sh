#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
yarn build

# переход в каталог сборки
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Thalassa666/Gitogram.git master:gh-pages

cd -