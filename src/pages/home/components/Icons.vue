<template>
  <div class='icons'>
    <mt-swipe class='icons-swiper'>
      <mt-swipe-item class='icons-swiper'
                     v-for="(page,index) of pages"
                     :key='index'>
        <div class='icon'
             v-for='item of page'
             :key='item.id'>
          <div class='icon-img'>
            <img class='icon-img-content'
                 :src="item.imgUrl"></div>
          <p class='icon-desc'>{{item.desc}}</p>
        </div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibies.styl';
@import '~styles/mixins.styl';

.icons>>>.mint-swipe-items-wrap {
  height: 0;
  padding-bottom: 50%;
  background: #fff;
}

.icons>>>.is-active {
  // background: blue;
  opacity: 1;
}

.icon {
  position: relative;
  width: 25%;
  height: 0;
  float: left;
  padding-bottom: 25%;
  overflow: hidden;
  background: #fff;

  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.1rem;

    .icon-img-content {
      height: 100%;
      display: block;
      margin: 0 auto;
    }
  }

  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    color: $darkTextColor;
    text-align: center;
    ellipsis();
  }
}
</style>
