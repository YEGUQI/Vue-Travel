<template>
  <div
    class="cantion"
    @click="handelGallaryClose"
  >
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="(item,index) in imgs"
          :key='index'
        >
          <img
            :src="item"
            class="gallary-img"
          >
        </swiper-slide>

      </swiper>
    </div>
    <div
      class="swiper-pagination"
      slot="pagination"
    ></div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'

        }
      }
    }
  },
  methods: {
    handelGallaryClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.cantion >>> .swiper-pagination
  overflow: inherit;
.cantion
  display: flex;
  z-index: 99;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  .wrapper
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    .gallary-img
      width: 100%;
  .swiper-pagination
    color: #fff !important;
    position: relative;
    bottom: -1rem !important;
</style>
