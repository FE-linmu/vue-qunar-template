/* 展示模板 */
<template>
  <div class='container'>
    <!-- @click="handleGalleryClick" -->
    <div class='wrapper'>
      <mt-swipe :auto="0"
                :show-indicators="false"
                @change="handleChange">
        <mt-swipe-item class='swiper-item'
                       v-for="(item,index) in imgs"
                       :key='index'>
          <img class='swiper-img'
               :src="item"
               preview='1'>
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
// import '../../utils/touch.js'
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
  },
  mounted () {
    //图片查看器打开后，打印本次查看器的实例（事件、方法、属性的示例）
    this.$preview.on('imageLoadComplete', (e, item) => {
      console.log(this.$preview.self)
      console.log('图片查看器被打开')
      localStorage.setItem('PHOTO_PEVIEW_STATE', true)
      console.log(document.getElementsByClassName('pswp__button--close')[0])
      document.getElementsByClassName('pswp__button--close')[0].onclick = () => {
        localStorage.removeItem('PHOTO_PEVIEW_STATE')
        this.$preview.self.close()
      }
    })
    // this.$preview.on('close', () => {//close只是众多事件名的其中一个，更多请查看文档
    //   console.log('图片查看器被关闭')
    // })
    // },
    // updated () {
    // this.$preview.on('close', () => {//close只是众多事件名的其中一个，更多请查看文档
    //   console.log('图片查看器被关闭')
    // })
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
  background: #000000;
  z-index: 99;

  .wrapper {
    height: 100%;
    // overflow: hidden;
    // height: 0;
    // padding-bottom: 100%;
    width: 100%;

    // padding-bottom: 100%;
    .swiper-item {
      width: 100%;
      height: 100%;
      position: relative;

      .swiper-img {
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
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
