/* 展示模板 */
<template>
  <div id='app'>
    <input type="tel"
           v-focus
           maxlength="4"
           v-model="num">
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
    <div class='box'></div>
  </div>
</template>
<script>
import axios from 'axios'
//导入组件
export default {
  name: 'App',
  data () {
    return {
      num: ''
    }
  },
  watch: {
    num (val) {
      if (val.length === 4) {
        axios.get('/api/index.json?city=' + this.city)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>
<style>
/* 样式代码 */
#app {
  display: flex;
  width: 100%;
  position: relative;
}
input {
  position: absolute;
  padding-left: 44px;
  width: 400px;
  height: 60px;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  color: black;
  letter-spacing: 86px;
  z-index: 98;
}
.box {
  width: 56px;
  height: 56px;
  border: 1px solid red;
  position: relative;
  z-index: 1;
  margin: 0 20px;
}
</style>