import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home')

  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/City')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/pages/detail/Detail')
  },{
    path:'/search',
    name:'Search',
    component: () => import('./search.vue')
  }],
  scrollBehavior(to, from, savePostion) {
    return {
      x: 0,
      y: 0
    }
  }
})
