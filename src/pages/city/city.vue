<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list
      :cities=cities
      :hotCities=hotCities
      :letter=letter
    ></city-list>
    <city-alphabet
      :cities=cities
      @changeLetter='changeLetter'
    ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.data && res.ret) {
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
      }
    },
    changeLetter (letter) {
      this.letter = letter
    }
  }
}
</script>

<style lang="stylus" scoped></style>
