<template>
  <button
    class="button"
    :class="[color, size]"
    @click="clickHandler"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: String,
    size: String,
    color: String,
    disabled: Boolean
  },
  methods: {
    /**
     * 親にクリックイベントを渡す
     * @param e {Object} event object
     */
    clickHandler () {
      this.$emit('event')
    }
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
  cursor: pointer;
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
  &.blue {
    background: #3e61ff;
  }
}
</style>
