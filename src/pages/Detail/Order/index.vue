<template>
  <div>
    <div class="topAd">
      <img
        src="https://cube.elemecdn.com/a/0f/29ce988126f5e8146cf6d1d4f05f2png.png?x-oss-process=image/format,webp/resize,w_686"
        alt
      />
    </div>
    <div class="recommend">
      <p class="title">{{recommendInfo[0].name}}</p>
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        :width="130"
        :loop="false"
        indicator-color="white"
      >
        <van-swipe-item v-for="(item, index) in recommendInfo[0].items" :key="index">
          <div class="swipItem">
            <img
              src="https://cube.elemecdn.com/b/46/0aab566e756d1fa5bf2fb4ce6595cjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_241/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
              alt
            />
            <div class="dishes">
              <div class="cartTitle">{{item.name}}</div>
              <p class="foodCart">{{`月售9 好评率${item.satisfy_rate_text}%`}} </p>
              <div class="cartBottom">
                <p class="price">￥{{item.price}}</p>
                <van-icon name="add" />
              </div>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="orderPage">
      <div class="navigation" id="resetNav">
        <ul>
          <li class="asideItem" title="" v-for="(item, index) in menuInfo" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
      <div class="menu">
        <div  v-for="(item, index) in menuInfo" :key="item.id">
          <div>
            <span class="name">{{item.name_desc}}</span>
            <span class="desc">{{item.description}}</span>
          </div>
          <div class="menuItem" v-for="(food, index) in item.foods" :key="index">
            <div class="image">
              <img
                src="https://cube.elemecdn.com/b/8b/5d5838426a19b575fdd4599f19f08jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_141,h_141/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
                alt
              />
            </div>
            <div class="menuInfo">
              <p class="infoTitle">{{food.name}}</p>
              <p class="material">{{food.description}}</p>
              <p class="sales">
                <span>月售{{food.month_sales_text}}份</span>
                <span>好评率{{food.satisfy_rate_text}}%</span>
              </p>
              <p class="activity">
                <span>{{food.discount_rate}}折</span>
                <span>{{food.activity&&food.activity.applicable_quantity_text}}</span>
                <span class="limit">剩7份</span>
              </p>
              <div id="infoPrice">
                <p>
                  <span>￥{{food.price}}</span>
                  <del>￥{{food.origin_price}}</del>
                </p>
                <van-icon name="add" />
              </div>
            </div>
        </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import "./index.styl";
import { Swipe, SwipeItem } from "vant";
import { Icon } from "vant";
import { Sidebar, SidebarItem } from "vant";
import { mapGetters } from 'vuex';
export default {
  name: "Order",
  data() {
    return {
      activeKey: 0,
    };
  },
  computed:{
    ...mapGetters(['menuInfo','recommendInfo'])
  },
  methods: {},
  components: {
  },
};
</script>

<style lang="less" scoped></style>
