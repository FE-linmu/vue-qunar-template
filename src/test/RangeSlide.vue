/* 展示模板 */
<template>
  <div id='app'>
    <div class='a'>
      <input type="hidden"
             value="0, 450"
             id="range"
             class="slider-input" />
    </div>
    <div class='b'
         @click="change(1)">
      0-300
    </div>
    <div class='c'
         @click="change(2)">
      300-450
    </div>
    <div class='d'
         @click="change(3)">
      450以上
    </div>
  </div>
</template>
<script>
//导入组件
export default {
  name: 'App',
  data () {
    return {
      low: -1,
      high: -1
    }
  },
  methods: {
    change (v) {
      switch (v) {
        case 1:
          this.low = 0
          this.high = 300
          this.tes()
          break
        case 2:
          this.low = 300
          this.high = 450
          this.tes()
          break
        case 3:
          this.low = 0
          this.high = 450
          this.tes()
          break
        default:
          break
      }
    },
    tes () {
      let that = this
      console.log('tes', this.high)
      $('.slider-input').jRange({
        from: 0,   				//滑块范围的初始值
        to: 450,    				//滑块范围的终止值
        step: 1,   				//设置步长
        scale: [0, 20, 40, 60, 80], //滑动条下方的尺度变标签
        format: '%s',  			//数值格式
        width: 300, 			//进度条的宽度
        showLabels: true,  		//是否显示滑动条下方的尺寸标签
        showScale: false,  		//是否显示滑块上方的数值标签
        isRange: true,     		//是否为选取范围
        onstatechange: function (e) {    //滑块范围改变时触发的方法
          console.log(e);
        }
      });
      console.log('===========', that.low, that.high)
      $('.slider-input').jRange('setValue', `${that.low === -1 ? 0 : that.low},${that.high === -1 ? 450 : that.high}`);  //滑块赋值
    }
  },
  mounted () {
    this.tes()
  }
}
</script>
<style>
/* 样式代码 */
#app {
}
.a {
  padding: 20px;
}
.b,
.c,
.d {
  width: 50px;
  height: 50px;
  border: 1px solid red;
  float: left;
  margin: 0 20px;
}
</style>