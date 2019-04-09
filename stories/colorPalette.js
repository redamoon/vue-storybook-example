import { storiesOf } from '@storybook/vue'

// コンポーネント
import ColorPalette from '../src/components/ColorPalette.vue'

storiesOf('Variables')
  .add('color palette', () => ({
    components: { ColorPalette },
    template: '<ColorPalette />'
  }))
