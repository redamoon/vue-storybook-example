<template>
  <transition
    name="overlay"
    appear
  >
    <div
      class="overlay"
      @click="clickHandler"
    >
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Overlay',
  methods: {
    clickHandler () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.75);
}
.overlay-enter-active, .overlay-leave-active {
  transition: all .3s ease;
}
.overlay-enter, .overlay-leave-to {
  opacity: 0;
}
</style>
