/* 展示模板 */
<template>
  <div>
    <detail-banner :sightName='sightName'
                   :bannerImg='bannerImg'
                   :bannerImgs='gallaryImgs'></detail-banner>
    <detail-header></detail-header>
    <div class='content'>
      <detail-list :list='list'></detail-list>
    </div>
  </div>
</template>
<script>
//导入组件
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (r) {
      console.log(r.data);
      let res = r.data
      if (res.ret && res.data) {
        let data = res.data;
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo();
  }
}
</script>
<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>
