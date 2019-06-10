<template>
  <div class='swiper'>
    <mt-swipe :auto="4000"
              v-if='showSwiper'>
      <mt-swipe-item class='swiper-item'
                     v-for="item of list"
                     :key='item.id'>
        <img class='swiper-img'
             :src="item.imgUrl">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
.swiper>>>.is-active {
  background: #fff;
  opacity: 1;
}

.swiper {
  // overflow: hidden;
  width: 100%;
  // height: 0;
  // padding-bottom: 31.25%;
  // height:31.25vw;
  height: 2rem;

  .swiper-item {
    width: 100%;
    height: 100%;

    .swiper-img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
