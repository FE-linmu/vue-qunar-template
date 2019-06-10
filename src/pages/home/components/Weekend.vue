/* 展示模板 */
<template>
  <div>
    <div class='recommend-title'>
      周末去哪儿
    </div>
    <ul>
      <li class='item border-bottom'
          v-for="(item,index) of list"
          :key="index">
        <div class='item-img-wrapper'>
          <img class='item-img'
               :src="item.imgUrl">
        </div>
        <div class='item-info'>
          <p class='item-title'>{{item.title}}</p>
          <p class='item-desc'>{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// 导入组件
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend-title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  height: 0;
  overflow: hidden;
  padding-bottom: 37%;

  .item-img {
    width: 100%;
    padding: 0.1rem;
  }
}

.item-info {
  flex: 1;
  padding: 0.1rem;
  min-width: 0;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    ellipsis();
  }
}
</style>
