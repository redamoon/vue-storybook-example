<template>
  <div class="color-palette">
    <div
      class="color-palette__item"
      v-for="(item, index) in colorObject"
      :key="index"
    >
      <div class="color-palette__box" :style="{ background: item }"></div>
      <div class="color-palette__box-value">{{ index }}：{{ item }}</div>
    </div>
  </div>
</template>

<script>
import variables from '../../src/assets/scss/setting/_variable.scss'
export default {
  name: 'ColorPalette',
  data () {
    return {
      colorObject: variables
    }
  }
}
</script>

<style lang="scss" scoped>
.color-palette {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.color-palette__item {
  width: 150px;
  margin-right: 20px;
}
.color-palette__box {
  height: 100px;
  border-radius: 5px;
}
.color-palette__box-value {
  padding: 5px;
  box-sizing: border-box;
  font-size: 12px;
  color: #262626;
  text-align: center;
}
</style>
