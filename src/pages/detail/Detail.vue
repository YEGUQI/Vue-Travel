<template>
  <div>
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <div class="tes"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
.tes
  height: 50rem;
</style>
