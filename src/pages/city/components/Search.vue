/* 展示模板 */
<template>
  <div class='search'>
    <input type="text"
           placeholder="输入城市名或拼音"
           class='search-input'>
  </div>
</template>
<script>
//导入组件
export default {
  name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibies.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    padding: 0 0.1rem;
    box-sizing: border-box;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}
</style>
