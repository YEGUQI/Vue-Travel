<template>
  <div class="icons">
    <swiper>
      <swiper-slide
        v-for="(page,index) in pages"
        :key="index"
      >
        <div
          class="icon"
          v-for="item in page"
          :key='item.id'
        >
          <div class="icon-img">
            <img
              :src="item.imgUrl"
              class="icon-img-content"
            >
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    // 判断分页显示
    pages () {
      const pages = []
      // 循环遍历图片数组中的值
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl';
@import '~style/mixins.styl';
.icons >>> .swiper-container
  height: 0;
  padding-bottom: 50%;
.icons
  margin-top: 0.2rem;
.icon
  position: relative;
  overflow: hidden;
  width: 25%;
  float: left;
  padding-bottom: 25%;
  .icon-img
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.1rem;
    .icon-img-content
      height: 100%;
      margin: 0 auto;
      display: block;
  .icon-desc
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.44rem;
    height: 0.44rem;
    text-align: center;
    color: $darkTextColor;
    ellissis();
</style>
