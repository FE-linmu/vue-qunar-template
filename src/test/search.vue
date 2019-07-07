/* 展示模板 */
<template>
  <div id='app'>
    <div>
      <input type="text"
             v-model="key">
      <span @click="search()">搜索</span>
      <div v-html='ruleTitle'></div>
    </div>
  </div>
</template>
<script>
//导入组件
export default {
  name: 'App',
  data () {
    return {
      key: '',
      searchState: false,
      dataByAjax: [{ id: 1, text: 'adcccc' }]
    }
  },
  methods: {
    search () {
      this.searchState = true;
    }
  },
  computed: {
    ruleTitle () {
      if (this.searchState) {
        var d = this.dataByAjax
        var di = d[0].text;
        console.log(di)
        if (this.key && this.key.length > 0) {
          var replaceReg = new RegExp(this.key, 'g');
          var replaceString = "<span class='search-text'>" + this.key + "</span>"
          di = di.replace(replaceReg, replaceString)
        }

      }
      return di
    }
  }
}
</script>
<style>
/* 样式代码 */
.search-text {
  color: red;
}
</style>