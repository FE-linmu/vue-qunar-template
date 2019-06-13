/* 展示模板 */
<template>
  <div>
    <div class='banner'
         @click="handleBannerClick">
      <img :src="bannerImg">
      <div class='banner-info'>
        <div class='banner-title'>{{this.sightName}}</div>
        <div class='banner-number'><span class='iconfont banner-icon'>&#xe6ee;</span>{{bannerImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs='imgs'
                      v-show='showGallary'
                      @close='handleGalleryClose'></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
//导入组件
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_r_800x800_02fe7522.jpg', 'http://img1.qunarzz.com/sight/p0/1904/6d/6dd775aa7d985158a3.water.jpg_r_800x800_ba5cbbe0.jpg', 'http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_r_800x800_02fe7522.jpg', 'http://img1.qunarzz.com/sight/p0/1904/6d/6dd775aa7d985158a3.water.jpg_r_800x800_ba5cbbe0.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true;
    },
    handleGalleryClose () {
      this.showGallary = false;
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>
<style lang="stylus" scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    padding-left: 0.2rem;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
    }

    .banner-number {
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      line-height: 0.4rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);

      .banner-icon {
        font-size: 0.24rem;
        padding: 0.05rem;
      }
    }
  }
}
</style>
