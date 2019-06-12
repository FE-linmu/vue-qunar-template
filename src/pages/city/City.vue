/* 展示模板 */
<template>
  <div class='city'>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>
<script>
//导入组件
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>
<style lang="stylus" scoped>
</style>
