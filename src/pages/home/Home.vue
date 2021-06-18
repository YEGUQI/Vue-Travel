<template>
  <div>
    <home-header></home-header>
    <home-swiper :list='data.swiperList'></home-swiper>
    <home-icons :list='data.iconList'></home-icons>
    <home-recommend :list='data.recommendList'></home-recommend>
    <home-weekend :list='data.weekendList'></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header.vue";
import HomeSwiper from "./components/Swiper.vue";
import HomeIcons from "./components/Icons.vue";
import HomeRecommend from "./components/Recommend.vue";
import HomeWeekend from "./components/Weekend.vue";
import { useStore } from "vuex";
import axios from "axios";
import { reactive, onMounted } from "vue";
export default {
  name: "HomeHomeHeaders",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  setup() {
    const data = reactive({
      swiperList: [],
      recommendList: [],
      weekendList: [],
      iconList: []
    });
    // vueX
    const store = useStore();
    const city = store.state.city;

    // methods
    async function getHomeInfo() {
      let res = await axios.get("/api/index.json?city=" + city.value);
      res = res.data;
      if (res.ret && res.data) {
        const result = res.data;
        data.swiperList = result.swiperList;
        data.recommendList = result.recommendList;
        data.weekendList = result.weekendList;
        data.iconList = result.iconList;
      }
    }
    // mounted
    onMounted(() => {
      getHomeInfo();
    });
    return { data, city };
  }
};
</script>

<style>

</style>
