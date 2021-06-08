<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in imgList"
        :key='item.id'
      >
        <div class="item-img-wrapper">
          <img
            :src="item.imgUrl"
            class="item-img"
          >
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
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
          imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
          title: '故宫',
          desc: '东方宫殿建筑代表，世界宫殿建筑典范'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          title: '故宫',
          desc: '东方宫殿建筑代表，世界宫殿建筑典范'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '故宫',
          desc: '东方宫殿建筑代表，世界宫殿建筑典范'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
          title: '故宫',
          desc: '东方宫殿建筑代表，世界宫殿建筑典范'
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg',
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
.item-img-wrapper
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;
  .item-img
    width: 100%;
.item-info
  padding: 0.1rem;
  .item-title
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellissis();
  .item-desc
    line-height: 0.4rem;
    color: #ccc;
    ellissis();
</style>
