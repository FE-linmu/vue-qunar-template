/* 展示模板 */
<template>
  <div class="Alphabet">
    <ul class="list">
      <li class="item"
          v-for="(item,key) in cities"
          :key='key'>{{key}}</li>
    </ul>
  </div>
</template>
<script>
//导入组件
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibies.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.44rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
