<template>
  <div class="overlay" @click="clickHandler"></div>
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
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:120%;
  background-color:rgba(0,0,0,0.75);
}
</style>
