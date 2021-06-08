<template>
  <div class="wrapper">
    <swiper
      :options="swiperOption"
      v-if="showSwiper"
    >
      <!-- slides -->
      <swiper-slide
        v-for="item in list"
        :key="item.id"
      >
        <img
          :src="item.imgUrl"
          class="swiper-img"
        >
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: {
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
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// >>> 样式穿透 只要 wrapper下面的子组件中出现 swiper-pagination-bullet-active 都生效
.wrapper >>> .swiper-pagination-bullet-active
  background-color: #fff;
.wrapper
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.2%;
  background-color: #eee;
  .swiper-img
    width: 100%;
</style>
