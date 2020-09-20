<template>
  <div>
    <van-tabs v-model="active" class="header-tab">
      <van-tab title="关注">
        <ScrollView/>
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
import ScrollView from '@/components/ScrollView'
export default {
  name: "",
  data() {
    return {
      active: 0,
    }
  },
    components:{
      ScrollView
    }
};
</script>

<style lang="less" scoped></style>
