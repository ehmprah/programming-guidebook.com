#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'programming-guidebook.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# SSH
git push -f git@github.com:ehmprah/programming-guidebook.com.git master:gh-pages

cd -
