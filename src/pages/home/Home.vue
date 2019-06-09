/* 展示模板 */
<template>
  <div id='home'>
    <home-header></home-header>
  </div>
</template>
<script>
// 导入组件
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components:{
    HomeHeader
  }
}
</script>
<style scope>
/* 样式代码 */
</style>
