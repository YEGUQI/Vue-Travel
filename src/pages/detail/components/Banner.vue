<template>
  <div>
    <div
      class="banner"
      @click="handelGallaryShow"
    >
      <img
        src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
        alt=""
        class="banner-img"
      >
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6df;</span>
          39
        </div>
      </div>
    </div>
    <!--  -->
    <common-gallary
      @close='handelGallaryClose'
      v-if="gallaryShow"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      gallaryShow: false
    }
  },
  methods: {
    handelGallaryClose () {
      this.gallaryShow = false
    },
    handelGallaryShow () {
      this.gallaryShow = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img
    width: 100%;
  .banner-info
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    line-height: 0.6rem;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    color: #fff;
    .banner-title
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    .banner-number
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0rem 0.4rem;
      border-radius: 0.25rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
      .banner-icon
        font-size: 0.24rem;
</style>
