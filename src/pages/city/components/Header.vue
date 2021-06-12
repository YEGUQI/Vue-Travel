<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl';
.header
  position: relative;
  line-height: $hearderHeight;
  height: $hearderHeight;
  overflow: hidden;
  text-align: center;
  color: #fff;
  background-color: $bgColor;
  font-size: 0.3rem;
  .header-back
    position: absolute;
    left: 0;
    top: 0;
    width: 0.64rem;
    font-size: 0.4rem;
    color: #fff;
</style>
