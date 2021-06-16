<template>
  <div>
    <detail-header></detail-header>
    <detail-banner
      :bannerImg='bannerImg'
      :sightName='sightName'
      :bannerImgs='gallaryImgs'
    ></detail-banner>

    <div class="tes">
      <detail-list :list='list'></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      bannerImg: '',
      sightName: '',
      list: [],
      gallaryImgs: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(
        this.getDetailSucc
      )
    },
    getDetailSucc (res) {
      res = res.data
      if (res.data && res.ret) {
        const data = res.data
        this.bannerImg = data.bannerImg
        this.sightName = data.sightName
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
.tes
  height: 50rem;
</style>
