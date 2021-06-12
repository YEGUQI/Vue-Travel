<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-back">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xeb6d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl';
.header
  display: flex;
  line-height: $hearderHeight;
  background: $bgColor;
  color: #fff;
  .header-left
    width: $hearderHeight;
    float: left;
    .icon-back
      font-size: 0.4rem;
      text-align: center;
  .header-input
    flex: 1;
    background: #fff;
    border-radius: 0.1rem;
    margin: 0.12rem 0 0 0.2rem;
    height: 0.64rem;
    line-height: 0.64rem;
    padding-left: 0.2rem;
    color: #ccc;
  .header-right
    width: 1.24rem;
    float: right;
    text-align: center;
    color: #ff;
    .arrow-icon
      margin-left: -0.04rem;
      font-size: 0.24rem;
</style>
