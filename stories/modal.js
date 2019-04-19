import { storiesOf } from '@storybook/vue'
import { withKnobs, text, textarea } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'

// コンポーネント
import BaseModal from '@/components/BaseModal.vue'

const groupId01 = 'modal'

storiesOf('Component/Modal')
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('base modal', () => ({
    components: { BaseModal },
    props: {
      name: {
        default: text('Title', 'デフォルトのモーダルタイトル', groupId01)
      },
      body: {
        default: text('TextArea', 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。', groupId01)
      }
    },
    template: `<BaseModal
       :name="name"
       :body="body"
     />`
  }))
