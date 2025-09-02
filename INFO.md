

# Executar o projeto local
ng serve --o
yarn start

# BUILD do projeto para o GIT PAGES
ng build --output-path=dist --base-href="/"
yarn build

# DEPLOY do projeto no GIT PAGES
ngh --dir=dist/browser 
yarn deploy

# PUSH o projeto no Github
git push -u origin main
yarn push
