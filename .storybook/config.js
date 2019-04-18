import { configure } from '@storybook/vue';

const loadStories = ()=> {
  require('../stories/index.js');
}

configure(loadStories, module);
