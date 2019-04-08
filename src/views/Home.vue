<template>
  <div class="home">
    <Button
      name="グレーボタン"
      path="/about"
      size="wide"
      color="gray"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/Button.vue'

export default {
  name: 'home',
  components: {
    Button
  }
}
</script>
