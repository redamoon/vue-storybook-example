import { configure } from '@storybook/vue';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);

// addDecorator(withKnobs);
// addDecorator(withInfo);
