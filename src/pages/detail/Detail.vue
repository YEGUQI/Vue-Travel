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
import { useRoute } from "vue-router";
import { ref } from "vue";
import axios from "axios";
import DetailBanner from "./components/Banner.vue";
import DetailHeader from "./components/Header.vue";
import DetailList from "./components/List.vue";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  setup() {
    const bannerImg = ref("");
    const sightName = ref("");
    const list = ref([]);
    const gallaryImgs = ref([]);
    const route = useRoute();
    async function getDetailInfo() {
      let res = await axios.get("/api/detail.json", {
        params: { id: route.params.id }
      });
      res = res.data;
      if (res.data && res.ret) {
        const data = res.data;
        bannerImg.value = data.bannerImg;
        sightName.value = data.sightName;
        gallaryImgs.value = data.gallaryImgs;
        list.value = data.categoryList;
      }
    }
    onMounted(() => {
      getDetailInfo();
    });
    return { bannerImg, sightName, gallaryImgs, list };
  }
};
</script>

<style lang="stylus" scoped>
.tes
  height: 50rem;
</style>
