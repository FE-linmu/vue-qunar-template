/* 展示模板 */
<template>
  <div>
    <detail-banner></detail-banner>
  </div>
</template>
<script>
//导入组件
import DetailBanner from './components/Banner'

export default {
  name: 'Detail',
  components: {
    DetailBanner
  }
}
</script>
<style lang="stylus" scoped>
</style>
