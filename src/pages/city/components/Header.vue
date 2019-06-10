/* 展示模板 */
<template>
  <div class="header">
    <router-link class='header-back iconfont'
                 to='/'
                 tag='div'>&#xe624;</router-link>
    城市选择
  </div>
</template>
<script>
//导入组件
export default {
  name: 'App'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibies.styl';

.header {
  overflow: hidden;
  height:$headerHeight;
  line-height:$headerHeight;
  text-align: center;
  color: #fff;
  background: $bgColor;
  font-size: 0.32rem;
  position: relative;

  .header-back {
    position: absolute;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
  }
}
</style>
