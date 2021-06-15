<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showabs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showabs"
      :style="opctStytle"
    >
      <div class="header-fixed">
        景点详情
        <router-link to="/">
          <div class="iconfont header-fixed-back">&#xe624;</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showabs: true,
      opctStytle: {
        opacity: 0
      }
    }
  },
  methods: {
    handelScroll () {
      // 页面被卷去的头部
      const top = document.documentElement.scrollTop
      if (top > 60) {
        // eslint-disable-next-line no-unused-vars
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opctStytle = { opacity }
        this.showabs = false
      } else {
        this.showabs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handelScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handelScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl';
.header-abs
  z-index: 1;
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 0.4rem;
  background-color: rgba(0, 0, 0, 0.8);
  .header-abs-back
    color: #fff;
    font-size: 0.4rem;
.header-fixed
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  line-height: $hearderHeight;
  height: $hearderHeight;
  overflow: hidden;
  text-align: center;
  color: #fff;
  background-color: $bgColor;
  font-size: 0.3rem;
  .header-fixed-back
    position: absolute;
    left: 0;
    top: 0;
    width: 0.64rem;
    font-size: 0.4rem;
    color: #fff;
</style>
