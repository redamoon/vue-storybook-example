<template>
  <router-link
    :to="path"
    class="button"
    :class="[color, size]"
    tag="button"
  >
    {{ name }}
  </router-link>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: String,
    path: String,
    size: String,
    color: String
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 15px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 0;
  width: 200px;
  &.wide {
    width: 100%;
  }
  &.large {
    width: 400px;
  }
  &.small {
    width: 100px;
  }
  &.gray {
    background: #828384;
  }
}
</style>
