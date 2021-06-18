<template>
  <div>
    <div class="Search">
      <input
        type="text"
        class="search-input"
        placeholder="请输入城市名或拼音"
        v-model="keyword "
      >
    </div>
    <div
      class="serach-content"
      ref="search"
      v-show="keyword "
    >
      <ul>
        <li
          class="item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li
          class="item border-bottom"
          v-show="isShow"
        >没有匹配的数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, watch, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Bscroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    cities: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup(props) {
    const keyword = ref("");
    const list = ref([]);
    const search = ref(null);
    let timer = null;
    const store = useStore();
    const router = useRouter();
    const isShow = computed(() => {
      return !list.length;
    });

    watch(keyword, (keyword, prevKeyword) => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      if (!keyword) {
        list.value = [];
        return;
      }
      timer = setTimeout(() => {
        const result = [];
        console.log(props.cities);
        for (const i in props.cities) {
          props.cities[i].forEach(value => {
            if (
              value.spell.indexOf(keyword) > -1 ||
              value.name.indexOf(keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        list.value = result;
      }, 100);
    });

    function handleCityClick(city) {
      store.commit("change", city);
      router.push("/");
    }

    onMounted(() => {
      new Bscroll(search.value, { click: true });
    });

    return { keyword, list, search, isShow, handleCityClick };
  }
};
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl';
.Search
  height: 0.72rem;
  background-color: $bgColor;
  padding: 0 0.1rem;
  .search-input
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    padding: 0 0.1rem;
.serach-content
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  z-index: 1;
  .item
    line-height: 0.6rem;
    padding-left: 0.2rem;
    background-color: #fff;
    color: #665;
</style>
