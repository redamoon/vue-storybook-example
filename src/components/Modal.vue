<template>
  <div class="modal" :class="{'is-open': modalActive}">
    <div class="modal__inner">
      <h1>{{ title }}</h1>
      <div class="modal__contents">
        <p>{{ text }}</p>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: String,
    text: String,
    modalActive: Boolean
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  visibility: hidden;
  opacity: 0;
  z-index: -1;
  &.is-open {
    visibility: visible;
    opacity: 1;
    z-index: 100;
    background: #FFF;
    width: 400px;
    height: 300px;
  }
  .modal__inner {
    padding: 20px;
    box-sizing: border-box;
  }
}
</style>
