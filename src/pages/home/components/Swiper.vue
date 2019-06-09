<template>
  <div class='swiper'>
    <mt-swipe :auto="4000">
      <mt-swipe-item class='swiper-item'
                     v-for="item of swiperList"
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
  data () {
    return {
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/ed766c4cbfb2c464db3ea4e548a5766b.jpg_750x200_a73a9e26.jpg'
        }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1609/4d/3dc09bcc290f0c02.jpg_750x200_09c97d67.jpg'
        },
        {
          id: '0003',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/667757f979fa38b12c4986f9930b6695.jpg_750x200_6cca7add.jpg'
        }
      ]
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
