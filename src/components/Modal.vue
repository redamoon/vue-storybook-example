<template>
  <div class="modal">
    <div class="modal__inner">
      <h1>{{ title }}</h1>
      <div class="modal__contents">
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: String,
    text: String
  }
}
</script>

<style lang="scss" scoped>

</style>
