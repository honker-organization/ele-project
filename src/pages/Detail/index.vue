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
          <p>{{ rstInfo.name }}</p>
          <van-icon class="arrow" />
        </div>
        <div class="sign">
          <span>评价4.6</span>
          <span>{{ "月售1079单" }}</span>
          <span>{{ rstInfo.delivery_mode.text }}约40分钟</span>
        </div>
        <div class="coupon">
          <div class="vipCoupon">
            <p class="price">
              {{ redpackInfo[0].value }}
            </p>
            <p>
              {{ redpackInfo[0].title_detail }}
            </p>
            <p>领取</p>
          </div>
          <div class="ordinaryCoupon">
            <p class="price">{{ redpackInfo[1].value }}</p>
            <p>{{ redpackInfo[1].title_detail }}</p>
            <p>领取</p>
          </div>
        </div>
        <div class="reduction">
          <div class="left">
            <p v-for="(item, index) in rstInfo.activity_tags" :key="index">
              <span>{{ item.text }}</span>
            </p>
          </div>

          <div class="right">
            <p>
              {{ rstInfo.activities.length + "个优惠" }}
            </p>
          </div>
        </div>
        <div class="notice">
          <p>{{ rstInfo.promotion_info }}</p>
        </div>
      </div>
    </div>
    <!-- 店铺详情 -->
    <div class="detaiContainer">
      <van-tabs class="tabs" title-active-color="black" title-style="30px">
        <van-tab class="title" title="点餐">
          <!-- 点餐页 -->
          <!-- 传递加减菜品的方法和菜品数据 -->
          <Order
            @addFood="addFood"
            @depFood="depFood"
            :foods="foods"
            :foodNum="foodNum"
            ref="order"
          />
        </van-tab>
        <van-tab class="title" title="评价">
          <!-- 评价页 -->
          <!-- <Evaluate /> -->
        </van-tab>
        <van-tab class="title" title="商家">
          <!-- 商家页 -->
          <!-- <Business /> -->
        </van-tab>
      </van-tabs>
    </div>

    <!-- 底部提交 -->
    <div class="footer">
      <transition name="slide-fade">
        <div class="shopping" ref="collection" :style="collectionTop">
          <div class="fulldep">
            <span v-if="Reduced">{{ "已减" + Reduced }}</span>
            <span v-else>{{ rstInfo.activities[0].description }}</span>
          </div>
          <div class="shopping-list">
            <div class="shopping-list-title">
              <span class="left">已选商品</span>
              <span class="right" @touchstart="clearFood">清空</span>
            </div>
            <div class="shopping-list-group">
              <div
                class="shopping-list-detail"
                v-for="food in foods"
                :key="food.id"
              >
                <p class="name">{{ food.name }}</p>
                <p class="price">
                  <del>￥25</del>
                  <span>￥{{ food.price }}</span>
                </p>
                <div class="num">
                  <p class="btn-update" @touchstart="depFood(food.id)">
                    -
                  </p>
                  <p>{{ food.num }}</p>
                  <p class="btn-update" @touchstart="addFood(food, food.id)">
                    +
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <div class="cart">
        <div class="cart-order" @touchstart="collect">
          <p v-if="total">
            <span class="total">￥{{ total }}</span>
            <del v-show="delPrice !== total">￥{{ delPrice }}</del>
          </p>
          <p v-else>未选购商品</p>
        </div>

        <div class="cart-pay">
          <p class="settlement" v-if="delPrice >= startSend">去结算</p>
          <p v-else>满20起送</p>
          <!-- <span>未点必选品</span> -->
        </div>
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
import "../../config/rem-detail";

import Order from "./Order";
import Evaluate from "./Evaluate";
import Business from "./Business";
import { mapGetters, mapState } from "vuex";
import { resolve } from "path";
export default {
  name: "Detail",
  data() {
    return {
      show: false,
      collectionTop: {
        top: "600px",
      },
      foodNum: [],
      total: "",
      delPrice: "",
      startSend: 20,
      Reduced: "",
    };
  },
  mounted() {
    this.getShopInfo();
    this.getFoodsInfo();
  },
  computed: {
    ...mapGetters(["redpackInfo", "rstInfo"]),
    ...mapState({ foods: (state) => state.detail.foodInfo }),
    fullDep() {
      return this.rstInfo.activities[0].attribute;
    },
  },
  methods: {
    //计算价格
    totalPrice() {
      console.log("开始计算");
      let price = 0;
      let delPrice = 0;
      this.foods.forEach((item) => {
        let { num, actNum, Oriprice, actPrice } = item;
        //如果有限量优惠
        if (actNum) {
          if (num <= actNum) {
            price += num * actPrice;
          } else {
            //如果超过了限量，就要使用原价计算，并且超出部分会计入满减
            price += actNum * actPrice + (num - actNum) * Oriprice;
            price = this.fdComputed((num - actNum) * Oriprice, price);
          }
          //如果优惠不限量
        } else if (actPrice && !actNum) {
          price += num * actPrice;
        } else {
          price += num * Oriprice;
          price = this.fdComputed(price, price);
        }
        delPrice += num * Oriprice;
      });
      console.log("计算结束");
      this.total = Math.floor(price * 100) / 100;
      this.delPrice = delPrice;
    },

    //满减计算
    fdComputed(overPrice, price) {
      //获取满减信息
      const full = Object.keys(this.fullDep);
      const dep = Object.values(this.fullDep);
      for (let i = full.length; i > 0; i--) {
        if (overPrice > +full[i]) {
          price -= +dep[i].content;
          this.Reduced = dep[i].content;
          return price;
        }
      }
      return price;
    },

    showPopup() {
      this.show = true;
    },

    // 调用方法获取页面数据
    getShopInfo() {
      this.$store.dispatch("getShopInfo");
    },

    //点击购物车栏切换弹窗
    collect() {
      this.collectionTop.top =
        this.collectionTop.top === "600px" ? "300px" : "600px";
    },

    //点击加号创建菜品获取增加菜品数量
    async addFood({ food, foodId }) {
      // this.fullDepAct();
      console.log(food.name, food.price, foodId);
      //如果已经点过，那么只需要增加数量
      if (this.foodNum[foodId]) {
        console.log(2);
        let num = this.foodNum[foodId] + 1;
        await this.$store.dispatch("getUpdateFood", { foodId, num });
        this.getFoodsInfo();
        return;
      }
      console.log(3);
      //如果没有点过，那么需要创建一个餐品，因为点菜是在order页面，所以在主页是不会触发的
      //因为是本地的模拟服务器，所以需要收集菜品的id，数量，名称，价格来创建数据
      const { name, origin_price, activity } = food;
      const location = {};
      location.foodId = foodId;
      location.name = name;
      location.Oriprice = origin_price;
      //如果这个菜品有活动，就获取活动数量和活动价格
      if (activity) {
        const { applicable_quantity, fixed_price } = activity;
        location.actNum = applicable_quantity;
        location.actPrice = fixed_price;
      }
      location.num = 1;
      await this.$store.dispatch("getAddFood", location);
      this.getFoodsInfo();
    },

    //点击减号减少菜品数量获取删除菜品
    async depFood(foodId) {
      //如果没有点过，就不存在减少
      console.log("id:" + foodId);
      if (!this.foodNum[foodId]) return;
      //如果在数量为1的时候点击减少，就意味着要删除这个菜品
      if (this.foodNum[foodId] === 1) {
        console.log("删除");
        await this.$store.dispatch("delFood", { foodId });
        this.getFoodsInfo();
        return;
      }
      //如果数量大于1，就减少菜品的数量
      console.log("减少");
      let num = this.foodNum[foodId] - 1;
      await this.$store.dispatch("getUpdateFood", { foodId, num });
      this.getFoodsInfo();
    },

    //获取点餐信息
    async getFoodsInfo() {
      console.log("重新获取了数量");

      //发送请求获取点餐内容
      await this.$store.dispatch("getFoodsInfo");
      // 判断本地的计算属性，如果存在就更新点餐数据
      console.log(this.foods);

      if (this.foods) {
        this.foodNum = [];
        this.foods.forEach((item) => {
          //  响应式处理
          //这里设置的数据没有实时的删除
          this.$set(this.foodNum, item.id, item.num);
        });
        this.totalPrice();
        console.log(this.total);
      }
    },

    //清空点餐信息
    clearFood() {
      if (!this.foods) return;
      const promises = [];
      this.foods.forEach((item) => {
        promises.push(this.$store.dispatch("delFood", { foodId: item.id }));
      });
      Promise.all(promises).then((resolveed) => {
        this.getFoodsInfo();
        this.collect();
      });
    },
  },
  components: {
    Order,
    Evaluate,
    Business,
  },
};
</script>

<style lang="stylus" scoped></style>
