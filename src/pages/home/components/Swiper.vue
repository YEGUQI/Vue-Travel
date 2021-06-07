<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide
        v-for="item in swiperList"
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
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
      }
      ]
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
