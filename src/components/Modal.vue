<template>
  <transition
    name="modal"
    appear
  >
    <div
      class="modal"
      :class="{'is-open': modalActive}"
      v-if="show"
    >
      <div class="modal__inner">
        <h1>{{ title }}</h1>
        <div class="modal__contents">
          <p>{{ text }}</p>
        </div>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: String,
    text: String,
    modalActive: Boolean,
    show: Boolean
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  visibility: hidden;
  z-index: 100;
  transition: all .3s ease;
  &.is-open {
    visibility: visible;
    background: #FFF;
    width: 400px;
  }
  .modal__inner {
    padding: 20px;
    box-sizing: border-box;
  }
}
.modal-enter-active, .modal-leave-active {
  transition: all .3s ease;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
}
</style>
