/* 展示模板 */
import { setTimeout } from 'timers';
<template>
  <div id='app'>
    <div v-html='imgs'></div>
    <img src="../../static/img/2.JPG"
         alt=""
         preview='1'>
  </div>
</template>
<script>
//导入组件
export default {
  name: 'App',
  data () {
    return {
      imgs: '',
      i: 1,
    }
  },
  created () {

  },
  mounted () {
    //异步插入的图片
    setTimeout(() => {
      this.imgs = "<img preview='1' src='../../static/img/1.JPG' /><img preview='1' src='../../static/img/3.JPG'/>"

      this.$previewRefresh()
    }, 4000)

    //图片查看器打开后，打印本次查看器的实例（事件、方法、属性的示例）
    this.$preview.on('imageLoadComplete', (e, item) => {
      console.log(this.$preview.self)
    })
  }
}
</script>
<style>
/* 样式代码 */
#app {
  width: 500px;
  height: 500px;
}
img {
  width: 100%;
  height: 100%;
}
</style>