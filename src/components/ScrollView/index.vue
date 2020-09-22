<template>
  <div>
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide"><slot name="s1"></slot></div> -->
        <div class="swiper-slide">1</div>
        <div class="swiper-slide">2</div>
        <div class="swiper-slide">3</div>
        <div class="swiper-slide">4</div>
        <div class="swiper-slide">5</div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../config/rem";
import "./index.styl";

import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
export default {
  name: "",
  props: {
    viewNum: { type: Number, default: 3.5 },
    scrollList: { type: Array },
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      //    同屏显示数量
      slidesPerView: this.viewNum,
      //开启任意滚动位置
      freeMode: true,
      //释放后继续混动
      freeModeMomentum: true,
      //滚动到到边界反弹特效
      freeModeMomentumBounce: false,
    });
  },

  //   有动态数据数据时使用
  //   watch: {
  //     scrollList: {
  //       handle() {
  //         this.$nextTick(() => {
  //           new Swiper(this.$refs.swiper, {
  //             //    同屏显示数量
  //             slidesPerView : 3.5,
  //             //开启任意滚动位置
  //             freeMode : true,
  //             //释放后继续混动
  //             freeModeMomentum : true,
  //             //滚动到到边界反弹特性
  //             freeModeMomentumBounce : false,
  //           });
  //         });
  //       },
  //     immediate: true,
  //     },
  //   },
};
</script>

<style lang="stylus" scoped></style>
