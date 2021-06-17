<template>
  <div>
    <div class="Search">
      <input
        type="text"
        class="search-input"
        placeholder="请输入城市名或拼音"
        v-model="keyValue"
      >
    </div>
    <div
      class="serach-content"
      ref="serach"
      v-show="keyValue"
    >
      <ul>
        <li
          class="item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handelClickCity(item.name)"
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
import { mapMutations } from "vuex";
import Scroll from "better-scroll";
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
  data() {
    return {
      keyValue: "",
      timer: false,
      list: []
    };
  },
  mounted() {
    this.scroll = new Scroll(this.$refs.serach, {
      click: true
    });
  },
  updated() {
    this.scroll.refresh();
  },
  methods: {
    handelClickCity(city) {
      // this.$store.commit('change', city)
      this.change(city);
      this.$router.push("/");
    },
    ...mapMutations(["change"])
  },
  computed: {
    isShow() {
      return !this.list.length;
    }
  },
  watch: {
    keyValue() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      // 搜索框内容为空时 清空列表
      if (!this.keyValue) {
        this.list = [];
        return;
      }
      // 节流/防抖
      this.timer = setTimeout(() => {
        const result = [];
        for (const i in this.cities) {
          this.cities[i].forEach(item => {
            if (
              item.name.indexOf(this.keyValue) > -1 ||
              item.spell.indexOf(this.keyValue) > -1
            ) {
              result.push(item);
            }
          });
        }
        this.list = result;
      }, 100);
    }
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
