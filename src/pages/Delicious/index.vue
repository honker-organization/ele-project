<template>
  <div>
    <van-tabs v-model="active" class="header-tab">
      <van-tab title="关注">
        <ScrollView :imgs="deliciousUrls">
          <!-- <template v-slot:s1>123</template>
          <template v-slot:s2>456</template>-->
        </ScrollView>
        <VirtualCollection
          :cellSizeAndPositionGetter="cellSizeAndPositionGetter"
          :collection="items"
          :height="500"
          :width="330"
        >
          <div slot="cell" slot-scope="props">{{ props.data }}</div>
        </VirtualCollection>
      </van-tab>
      <van-tab title="真香">内容 2</van-tab>
      <van-tab title="短视频">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
// import Swiper from "swiper";
// import "swiper/swiper-bundle.css";
import "./index.styl";
import ScrollView from "@/components/ScrollView";
import { deliciousInfo } from "@/api/delicious";
export default {
  name: "",
  data() {
    return {
      active: 0,
      deliciousUrls: [],
    };
  },
  mounted() {
    this.getDelicious();
  },
  methods: {
    async getDelicious() {
      let res = await deliciousInfo();
      this.deliciousUrls = res.data;
    },
  },
  components: {
    ScrollView,
  },
};
</script>

<style lang="less" scoped></style>
