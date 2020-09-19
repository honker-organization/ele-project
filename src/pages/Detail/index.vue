<template>
  <div>
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
          <p>黄焖鸡(草围店)</p>
          <van-icon class="arrow" name="play" />
        </div>
        <div class="sign">
          <span>评价4.6</span>
          <span>月售1110单</span>
          <span>蜂鸟快送约40分钟</span>
        </div>
        <div class="coupon">
          <div class="vipCoupon">
            <p class="price">￥6</p>
            <p>无门槛</p>
            <p>领取</p>
          </div>
          <div class="ordinaryCoupon">
            <p class="price">￥3</p>
            <p>满50可用</p>
            <p>领取</p>
          </div>
        </div>
        <div class="reduction">
          <div class="left">
            <p>
              <span>25减18</span>
            </p>
            <p>
              <span>50减23</span>
            </p>
            <p>
              <span>95减44</span>
            </p>
            <p>
              <span>配送费优惠</span>
            </p>
          </div>

          <div class="right">
            <p>6个优惠</p>
          </div>
        </div>
        <div class="notice">
          <p>公告公告高嘎嘎嘎嘎嘎啊噶阿哥</p>
        </div>
      </div>
    </div>
    <!-- 店铺详情 -->
    <div class="detaiContainer">
      <van-tabs class="tabs" title-active-color="black" title-style="30px">
        <van-tab class="title" title="点餐"></van-tab>
        <van-tab class="title" title="评价"></van-tab>
        <van-tab class="title" title="商家"></van-tab>
      </van-tabs>
    </div>
    <!-- 点餐页 -->
    <Order />
    <!-- 评价页 -->
    <!-- <Evaluate /> -->
    <!-- 商家页 -->
    <!-- <Business /> -->
    <!-- 底部提交 -->
    <div class="footer">
      <div class="fulldep">
        <span>满25减18元</span>
        <span>满50减23元</span>
        <span>满95减44元</span>
      </div>
      <div class="cart">
        <span>未选购商品</span>
        <div class="price">
          <span>$满20起送</span>
          <span>未点必选品</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
import { Tab, Tabs } from "vant";
import "./index.stylus";

import Order from "./Order";
import Evaluate from "./Evaluate";
import Business from "./Business";
export default {
  name: "",
  components: {
    Order,
    Evaluate,
    Business,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
};
</script>

<style lang="stylus" scoped></style>
