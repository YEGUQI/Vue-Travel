<template>
  <div>
    <div
      class="banner"
      @click="handelGallaryShow"
    >
      <img
        :src="bannerImg"
        alt=""
        class="banner-img"
      >
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6df;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <!--  -->
    <fade-animation>
      <common-gallary
        @close='handelGallaryClose'
        v-if="gallaryShow"
        :imgs='bannerImgs'
      ></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    bannerImg: String,
    sightName: String,
    bannerImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      gallaryShow: false,
      gallaryImgs: this.bannerImgs
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
