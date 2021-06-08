<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in imgList"
        :key='item.id'
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
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      imgList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
          title: '故宫',
          desc: '东方宫殿建筑代表，世界宫殿建筑典范'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
          title: '故宫',
          desc: '东方宫殿建筑代表，世界宫殿建筑典范'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg',
          title: '故宫',
          desc: '东方宫殿建筑代表，世界宫殿建筑典范'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg',
          title: '故宫',
          desc: '东方宫殿建筑代表，世界宫殿建筑典范'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg',
          title: '故宫',
          desc: '东方宫殿建筑代表，世界宫殿建筑典范'
        }

      ]
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
