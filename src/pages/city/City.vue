/* 展示模板 */
<template>
  <div class='city'>
    <city-header></city-header>
  </div>
</template>
<script>
//导入组件
import CityHeader from './components/Header'
export default {
  name: 'City',
  components: {
    CityHeader
  }
}
</script>
<style lang="stylus" scoped>
</style>
