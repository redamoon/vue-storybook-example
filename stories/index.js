import { storiesOf } from '@storybook/vue'
import Button from '../src/components/Button.vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'

storiesOf('Buttons', module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .add(
    'button',
    () => ({
      components: { Button },
      props: {
        name: {
          default: text('button', 'デフォルトのボタン')
        }
      },
      template: `
        <Button
          :name="name"
          color="gray"
          tag="button"
        >
         {{ name }}
        </Button>
      `
    })
  )
