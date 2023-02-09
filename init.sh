#!/bin/sh

rm -rf node_modules
rm -rf dist
rm -rf build
rm package.json
rm yarn.lock

yarn init --yes

yarn add react \
         react-dom \
         react-router-dom \
         reflect-metadata \
         inversify \
         inversify-react \
         mobx \
         mobx-react-lite \
         @mui/material \
         @emotion/react \
         @emotion/styled \
         @mui/material \
         @mui/styled-engine-sc \
         styled-components \
         @mui/icons-material \
         @mui/styles

yarn add --dev @types/react \
        @types/react-dom \
        ts-loader \
        css-loader \
        html-webpack-plugin \
        sass \
        sass-loader \
        style-loader \
        typescript \
        webpack \
        webpack-cli \
        webpack-dev-server \
        @babel/preset-env \
        @babel/preset-react \
        @babel/preset-typescript \
        @testing-library/jest-dom \
        @testing-library/react \
        @types/jest \
        jest \
        jest-environment-jsdom \
        ts-jest

# Remove the last line
sed -i.bak '$ d' package.json && rm package.json.bak

# append the scripts commads
cat <<EOT >> package.json
   ,"scripts": {
      "clean": "rm -rf dist/*",
      "build": "webpack",
      "start": "webpack serve",
      "test": "jest",
      "test:watch": "jest --watch"
   }
}
