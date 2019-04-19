<template>
  <div class="home">
    <Button
      name="グレーボタン"
      path="/about"
      size="wide"
      color="gray"
    />
    <Button
      name="モーダルボタン"
      size="wide"
      color="blue"
      @event="openModal"
    />
    <Modal
      title="モーダルのタイトル"
      text="モーダルコンテンツの中身モーダルコンテンツの中身モーダルコンテンツの中身モーダルコンテンツの中身モーダルコンテンツの中身"
      :modalActive="isModalActive"
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
// @ is an alias to /src
import Button from '@/components/Button.vue'
import Modal from '@/components/Modal.vue'
import Overlay from '@/components/Overlay.vue'

export default {
  name: 'home',
  components: {
    Button,
    Modal,
    Overlay
  },
  methods: {
    openModal () {
      this.isModalActive = !this.isModalActive
      this.isOverlay = !this.isOverlay
    },
    closeModal () {
      this.isModalActive = false
      this.isOverlay = false
    }
  },
  data () {
    return {
      isModalActive: false,
      isOverlay: false
    }
  }
}
</script>
