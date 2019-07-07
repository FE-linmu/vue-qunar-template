/* 展示模板 */
import { clearInterval } from 'timers';
import { setInterval } from 'timers';
<template>
  <div id='app'>
    <div class='one'
         ref="one">
      <span @click='one()'>tab1</span>
      <span @click='two()'>tab2</span>
      <div class='line'
           ref="line"></div>
    </div>
  </div>
</template>
<script>
//导入组件
export default {
  name: 'App',
  data () {
    return {
      po: 0
    }
  },
  created () {
    console.log(this.$refs.line)
  },
  methods: {
    one () {
      // this.hell();
      if (this.po > 0) {

        var i = setInterval(() => {


          this.$refs.line.style.left = this.$refs.line.offsetLeft - 1 + 'px';
          this.po--

        }, 16)      } else {
        clearInterval(i)
      }

    },
    hell () {

      if (this.po > 0) {

        this.$refs.line.style.left = this.$refs.line.offsetLeft - 1 + 'px';
        this.po--
      }
    },
    two () {
      this.hio()
      // if (this.po < 60) {
      // for (let j = 0; j < 60; j++) {
      // var i = setInterval(() => {
      // this.$refs.line.style.left = this.$refs.line.offsetLeft + 1 + 'px';
      // this.po++
      // }, 1)
      // }
      // } else {
      //   clearInterval(i)
      // }
    },
    hio () {
      if (this.po < 60) {
        var test = requestAnimationFrame(this.hio());
        this.$refs.line.style.left = this.$refs.line.offsetLeft + 1 + 'px';
        this.po++
      } else {
        cancelAnimationFrame(test);
      }
    }
  }
}
</script>
<style>
/* 样式代码 */
#app {
  width: 100%;
  height: 60px;
  background: chartreuse;
  display: flex;
  justify-content: center;
  line-height: 40px;
}
.one {
  padding: 10px 0px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.line {
  position: absolute;
  bottom: 0;
  width: 28px;
  height: 2px;
  background: red;
}
</style>