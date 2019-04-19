<template>
  <div>
    <Button
      name="モーダルボタン"
      size="wide"
      color="blue"
      @event="openModal"
    />
    <Modal
      :title="name"
      :text="body"
      :modalActive="isModalActive"
      :show="isShow"
    >
      <Button
        name="閉じる"
        size="wide"
        color="blue"
        @event="closeModal"
      />
    </Modal>
    <Overlay v-if="isOverlay" @close="closeModal" />
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'
import Overlay from '@/components/Overlay.vue'
export default {
  name: 'BaseModal',
  components: {
    Button,
    Modal,
    Overlay
  },
  props: {
    name: String,
    body: String
  },
  methods: {
    openModal () {
      this.isModalActive = !this.isModalActive
      this.isOverlay = !this.isOverlay
      this.isShow = !this.isShow
    },
    closeModal () {
      this.isModalActive = false
      this.isOverlay = false
      this.isShow = false
    }
  },
  data () {
    return {
      isModalActive: false,
      isOverlay: false,
      isShow: false
    }
  }
}
</script>
