/* 展示模板 */
<template>
  <div id='home'>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>
<script>
// 导入组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
<style scope>
/* 样式代码 */
</style>
