import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Button from '../src/components/Button.vue'

storiesOf('Button', module)
  .add('テキストボタン', () => '<button>with text</button>')
