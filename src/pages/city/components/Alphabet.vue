<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handelChangeLetter"
      @touchstart="handeltouchstart"
      @touchmove="handeltouchmove"
      @touchend="handeltouchend"
    >{{item}}</li>

  </ul>
</template>

<script>
export default {
  name: 'CityHeader',
  props: {
    cities: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      touchStatus: false,
      // 获取 A 字母距离顶端的距离
      statrY: 0,
      timer: false
    }
  },
  computed: {
    letters () {
      let letters = []
      for (let item in this.cities) {
        letters.push(item)
      }
      return letters
    }
  },
  methods: {
    handelChangeLetter (e) {
      this.$emit('changeLetter', e.target.innerText)
    },
    handeltouchstart () {
      this.touchStatus = true
    },
    handeltouchmove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.statrY = this.$refs['A'][0].offsetTop
          // 手指距离顶部的距离 -79顶部 header 的高度
          let touchY = e.touches[0].clientY - 79
          // 当前处于第几个字母 手指距离顶部的距离  - 首字母距离顶部的高度 / 字母本身的高度
          let index = Math.floor((touchY - this.statrY) / 20)
          if (index >= 0 && index <= this.letters.length) {
            this.$emit('changeLetter', this.letters[index])
          }
        }, 16)
      }
    },
    handeltouchend () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl';
.list
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item
    text-align: center;
    line-height: 0.4rem;
    color: $bgColor;
</style>
