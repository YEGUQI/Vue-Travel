<template>
  <div
    class="list"
    ref="wrapper"
    v-if="cities"
  >
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item in hotCities"
            :key="item.id"
            @click="handelClickCity(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item,key) of cities"
        :key="key"
        :ref="elem => elems[key] = elem"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div
          class="item-list"
          v-for="innerItem of item"
          :key="innerItem.id"
        >
          <div
            class="item border-bottom"
            @click="handelClickCity(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { useStore } from "vuex";
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "CityList",
  props: {
    cities: Object,
    hotCities: {
      type: Array,
      default: () => {
        return [];
      }
    },
    letter: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const currentCity = store.state.city;
    const elems = ref([""]);
    const wrapper = ref(null);
    let scroll = null;

    function handelClickCity(city) {
      store.commit("change", city);
      router.push("/");
    }

    watch(
      () => props.letter,
      (letter, prevLetter) => {
        if (letter && scroll) {
          const element = elems.value[letter];
          scroll.scrollToElement(element);
        }
      }
    );

    onMounted(() => {
      scroll = new Bscroll(wrapper.value, {
        click: true
      });
    });

    return { elems, wrapper, currentCity, handelClickCity };
  }
};
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl';
.border-topbottom
  &:before
    background-color: #ccc;
  &:after
    background-color: #ccc;
.border-bottom
  &:before
    background-color: #ccc;
.list
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .title
    line-height: 0.54rem;
    background-color: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  .button-list
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    .button-wrapper
      float: left;
      width: 33.33%;
      .button
        margin: 0.1rem;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 0.06rem;
        padding: 0.1rem 0;
  .item-list
    .item
      line-height: 0.7rem;
      padding-left: 0.2rem;
</style>
