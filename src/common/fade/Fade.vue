/* 展示模板 */
<template>
  <div>
    <transition>
      <slot></slot>
    </transition>
  </div>
</template>
<script>
//导入组件
export default {
  name: 'Fade'
}
</script>
<style lang="stylus" scoped>
.v-enter,.v-leave-to 
  opacity:0
.v-enter-active,.v-leave-active
  transition:opacity .5s
</style>
