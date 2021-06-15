<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item in list"
        :key='item.id'
        :to="'detail/' + item.id"
      >
        <img
          :src="item.imgUrl"
          class="item-img"
        >
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>

  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl';
.title
  line-height: 0.8rem;
  background-color: #eee;
  margin-top: 0.2rem;
  text-indent: 0.2rem;
.item
  height: 1.9rem;
  overflow: hidden;
  display: flex;
  .item-img
    height: 1.7rem;
    width: 1.7rem;
    padding: 0.1rem;
  .item-info
    flex: 1;
    padding: 0.1rem;
    min-width: 0;
    .item-title
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellissis();
    .item-desc
      line-height: 0.4rem;
      color: #ccc;
      ellissis();
    .item-btn
      line-height: 0.44rem;
      background-color: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
      margin-top: 0.16rem;
</style>
