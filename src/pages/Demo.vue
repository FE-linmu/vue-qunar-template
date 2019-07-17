/* 展示模板 */
<template>
  <div id='app'>
    <div class="demo"
         @click="cityShow">
      城市级联菜单
    </div>
    <v-distpicker type="mobile"
                  v-show="cityStatus"
                  class='city'></v-distpicker>
  </div>
</template>
<script>
//导入组件
import VDistpicker from 'v-distpicker'
export default {
  name: 'App',
  components: { VDistpicker },
  data () {
    return {
      cityStatus: false
    }
  },
  methods: {
    cityShow () {
      this.cityStatus = !this.cityStatus
    }
  }
}
</script>
<style>
/* 样式代码 */
#app {
}
.demo {
  width: 60px;
  height: 30px;
  border: 1px solid red;
}
.city{
  height:250px;
  overflow:auto;
}
</style>