<template>
  <div
    class="list"
    ref="wrapper"
  >
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
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
        :ref="key"
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
import Scroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: {
      type: Object,
      default: () => {
        return {}
      }
    },
    hotCities: {
      type: Array,
      default: () => {
        return []
      }
    },
    letter: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.scroll = new Scroll(this.$refs.wrapper, {
      click: true
    })
  },
  updated () {
    this.scroll.refresh()
  },
  activated () {
    this.scroll.refresh()
  },
  methods: {
    handelClickCity (city) {
      // this.$store.commit('change', city)
      this.change(city)
      this.$router.push('/')
    },
    ...mapMutations(['change'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  }
}
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
