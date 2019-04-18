cd ~/workspace
vue create vue-storybook // Manually select features
cd vue-storybook/
yarn add -D vue-loader sass-loader node-sass @babel/core babel-loader babel-preset-vue
touch vue-config.js

mkdir {.storybook,stories}

cd ~/workspace/vue-storybook/
yarn add -D @storybook/addon-knobs @storybook/addon-viewport @storybook/addon-notes
touch .storybook/addons.js


cd ~/workspace/vue-storybook/
yarn add -D @storybook/vue
mkdir {stories,\.storybook}
touch {stories/index.js,\.storybook/config.js,\.storybook/webpack.config.js}

