/* 展示模板 */
import { setTimeout } from 'timers';
<template>
  <div>
    <div class='search'>
      <input type="text"
             placeholder="输入城市名或拼音"
             class='search-input'
             v-model="keyword">
    </div>
    <div class='search-content'
         ref="search"
         v-show='keyword'>
      <ul>
        <li class='search-item border-bottom'
            v-for="(item,index) of list"
            :key='index'>{{item.name}}</li>
        <li class='search-item border-bottom'
            v-show="hasNoData">
          没有找到匹配的数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
//导入组件
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibies.styl';

.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    padding: 0 0.1rem;
    box-sizing: border-box;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}

.search-content {
  position: absolute;
  overflow: hidden;
  z-index: 2;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background: #eee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
  }
}
</style>
