import { storiesOf } from '@storybook/vue'
import { withKnobs, text, select, color, number } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'

// コンポーネント
import Button from '../src/components/Button.vue'

// ドキュメント
import NotesButton from './readme/Button.md'

// button color / size / text / uniqueColor / uniqueSize
const buttonColorLabel = 'Colors'
const buttonColorOptions = {
  Gray: 'gray',
  Blue: 'blue'
}
const buttonColorDefaultValue = buttonColorOptions.Gray
const buttonSizeLabel = 'Sizes'
const buttonSizeOptions = {
  Wide: 'wide',
  Large: 'large',
  Small: 'small'
}
const buttonSizeDefaultValue = buttonSizeOptions.Wide
const buttonUniqueColorLabel = 'Unique Colors'
const buttonUniqueColorDefaultValue = '#CCC'
const buttonUniqueSizeLabel = 'Unique Sizes'
const buttonUniqueSizeDefaultValue = 200
const groupId01 = 'button'

storiesOf('Component/Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('base button', withNotes(NotesButton)(() => ({
    components: { Button },
    props: {
      name: {
        default: text('Text', 'デフォルトのボタン', groupId01)
      },
      color: {
        default: select(buttonColorLabel, buttonColorOptions, buttonColorDefaultValue, groupId01)
      },
      size: {
        default: select(buttonSizeLabel, buttonSizeOptions, buttonSizeDefaultValue, groupId01)
      }
    },
    template: `<Button
      :name="name"
      :color="color"
      :size="size"
    />`
  })))
  .add('unique button', withNotes(NotesButton)(() => ({
    components: { Button },
    computed: {
      uniqueStyleObject() {
        return {
          'backgroundColor': this.uniqueColor,
          'width': this.uniqueSize + 'px'
        }
      }
    },
    props: {
      name: {
        default: text('Text', 'ユニークボタン', groupId01)
      },
      uniqueColor: {
        default: color(buttonUniqueColorLabel, buttonUniqueColorDefaultValue, groupId01)
      },
      uniqueSize: {
        default: number(buttonUniqueSizeLabel, buttonUniqueSizeDefaultValue, {}, groupId01)
      }
    },
    template: `<Button
      :name="name"
      :style="uniqueStyleObject"
    />`
  })))
