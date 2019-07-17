// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import store from './store'
import router from './router'
import fastClick from 'fastclick'
import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont/iconfont.css'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
var options = {
  fullscreenEl: false, //关闭全屏按钮
  clickToCloseNonZoomable: true,
}
Vue.use(preview, options)
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(MintUI)
// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
