/* 展示模板 */
<template>
  <div class='list wrapper' ref='wrapper'>
    <div class='content'>
      <div class='area'>
        <div class='title border-topbottom'>当前城市</div>
        <div class='button-list'>
          <div class='button-wrapper'>
            <div class='button'>北京</div>
          </div>
        </div>
      </div>
      <div class='area'>
        <div class='title border-topbottom'>热门城市</div>
        <div class='button-list'>
          <div class='button-wrapper'>
            <div class='button'>北京</div>
          </div>
          <div class='button-wrapper'>
            <div class='button'>北京</div>
          </div>
          <div class='button-wrapper'>
            <div class='button'>北京</div>
          </div>
          <div class='button-wrapper'>
            <div class='button'>北京</div>
          </div>
        </div>
      </div>
      <div class='area'>
        <div class='title border-topbottom'>A</div>
        <div class='item-list'>
          <div class='item border-bottom'>
            阿拉尔
          </div>
          <div class='item border-bottom'>
            阿拉尔
          </div>
          <div class='item border-bottom'>
            阿拉尔
          </div>
        </div>
      </div>
      <div class='area'>
        <div class='title border-topbottom'>A</div>
        <div class='item-list'>
          <div class='item border-bottom'>
            阿拉尔
          </div>
          <div class='item border-bottom'>
            阿拉尔
          </div>
          <div class='item border-bottom'>
            阿拉尔
          </div>
        </div>
      </div>
      <div class='area'>
        <div class='title border-topbottom'>A</div>
        <div class='item-list'>
          <div class='item border-bottom'>
            阿拉尔
          </div>
          <div class='item border-bottom'>
            阿拉尔
          </div>
          <div class='item border-bottom'>
            阿拉尔
          </div>
        </div>
      </div>
      <div class='area'>
        <div class='title border-topbottom'>A</div>
        <div class='item-list'>
          <div class='item border-bottom'>
            阿拉尔
          </div>
          <div class='item border-bottom'>
            阿拉尔
          </div>
          <div class='item border-bottom'>
            阿拉尔
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//导入组件
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted(){
    this.scroll=new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibies.styl';

.border-topbottom {
  &:before {
    border-color: #cccccc;
  }

  &:after {
    border-color: #cccccc;
  }
}

.border-bottom {
  &:before {
    border-color: #cccccc;
  }
}

.list {
  position: absolute;
  overflow: hidden;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.44rem;
    background: #eeeeee;
    padding-left: 0.2rem;
    font-size: 0.26rem;
    color: #666;
  }

  .button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        text-align: center;
        margin: 0.1rem;
        padding: 0.1rem 0;
        border-radius: 0.03rem;
        border: 0.02rem solid #cccccc;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
