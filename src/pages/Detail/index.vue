<template>
  <div class="container">
    <!-- 店铺头部 -->
    <div class="header">
      <div class="logo">
        <div class="logoBg"></div>
        <img
          src="https://cube.elemecdn.com/5/84/9B3AB309F4BC594A8C36F80AC9F21jpeg.jpeg?x-oss-process=image/format,webp/resize,w_150"
          alt
          class="logoImg"
        />
      </div>
      <div class="shop">
        <div class="title">
          <p>{{rstInfo.name}}</p>
          <van-icon class="arrow"  />
        </div>
        <div class="sign">
          <span>评价4.6</span>
          <span>{{'月售1079单'}}</span>
          <span>{{rstInfo.delivery_mode.text}}约40分钟</span>
        </div>
        <div class="coupon">
          <div class="vipCoupon">
            <p class="price">{{redpackInfo[0].value}}</p>
            <p>{{redpackInfo[0].title_detail}}</p>
            <p>领取</p>
          </div>
          <div class="ordinaryCoupon">
            <p class="price">{{redpackInfo[1].value}}</p>
            <p>{{redpackInfo[1].title_detail}}</p>
            <p>领取</p>
          </div>
        </div>
        <div class="reduction">
          <div class="left">
            <p v-for="(item, index) in rstInfo.activity_tags" :key="index">
              <span>{{item.text}}</span>
            </p>
          </div>

          <div class="right">
            <p>{{rstInfo.activities.length+'个优惠'}}</p>
          </div>
        </div>
        <div class="notice">
          <p>{{rstInfo.promotion_info}}</p>
        </div>
      </div>
    </div>
    <!-- 店铺详情 -->
    <div class="detaiContainer">
      <van-tabs class="tabs" title-active-color="black" title-style="30px">
        <van-tab class="title" title="点餐">
          <!-- 点餐页 -->
    <Order />
        </van-tab>
        <van-tab class="title" title="评价"> <!-- 评价页 -->
    <!-- <Evaluate /> --></van-tab>
        <van-tab class="title" title="商家"><!-- 商家页 -->
    <!-- <Business /> --></van-tab>
      </van-tabs>
    </div>
    
   
    
    <!-- 底部提交 -->
    <div class="footer">
      <div class="shopping">
        <div class="fulldep">
          <span>满25减18元</span>
          <span>满50减23元</span>
          <span>满95减44元</span>
        </div>
        <div class="shopping-list">
          <div class="shopping-list-title">
            <span class="left">已选商品</span>
            <span class="right">清空</span>
          </div>
          <div class="shopping-list-group">
            <div class="shopping-list-detail">
              <p class="name">雪碧</p>
              <p class="price">
                <del>￥25</del>
                <span>￥24.9</span>
              </p>
              <p class="num">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="cart">
        <span>未选购商品</span>
        <span>$满20起送</span>
        <!-- <span>未点必选品</span> -->
      </div>
    </div>
  </div>


  <!-- 封装需求
    1.底部向上弹窗
    2.滚动（横+纵）  
   -->
</template>


<script>
import "./index.stylus";
import '../../config/rem-detail'

import Order from "./Order";
import Evaluate from "./Evaluate";
import Business from "./Business";
import { mapGetters } from 'vuex';
export default {
  name: "Delicious",
  data() {
    return {
      show: false,
    };
  },
  mounted(){
    this.getShopInfo()
  },
  computed:{
    ...mapGetters(['redpackInfo','rstInfo'])
  },
  methods: {
    showPopup() {
      this.show = true;
    },

    getShopInfo(){
      this.$store.dispatch('getShopInfo')
    }
  },
  components: {
    Order,
    Evaluate,
    Business,
  },
};
</script>

<style lang="stylus" scoped></style>
