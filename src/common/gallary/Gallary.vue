/* 展示模板 */
<template>
  <div class='container'
       @click="handleGalleryClick">
    <div class='wrapper'>
      <mt-swipe :auto="0"
                :show-indicators="false"
                @change="handleChange">
        <mt-swipe-item class='swiper-item'
                       v-for="(item,index) in imgs"
                       :key='index'>
          <img class='swiper-img'
               :src="item">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class='pageCount'
         v-show="imgsDataLength">
      {{pageCount}}/{{imgsDataLength}}
    </div>
  </div>
</template>
<script>
//导入组件
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      defalut () {
        return []
      }
    }
  },
  data () {
    return {
      pageCount: 1
    }
  },
  computed: {
    imgsDataLength () {
      return this.imgs.length
    }
  },
  methods: {
    handleChange (e) {
      this.pageCount = e + 1;
    },
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
.container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #000000;
  z-index: 99;

  .wrapper {
    height: 3.64rem;
    // overflow: hidden;
    // height: 0;
    // padding-bottom: 100%;
    width: 100%;

    // padding-bottom: 100%;
    .swiper-item {
      width: 100%;
      height: 100%;

      .swiper-img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .pageCount {
    font-size: 0.3rem;
    color: #fff;
    position: absolute;
    bottom: 1rem;
    width: 100%;
    text-align: center;
  }
}
</style>
