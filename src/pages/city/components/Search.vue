<template>
  <div class="Search">
    <input
      type="text"
      class="search-input"
      placeholder="请输入城市名或拼音"
    >
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
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
</style>
