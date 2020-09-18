<template>
  <div>
    <div class="topAd">
      <img
        src="https://cube.elemecdn.com/a/0f/29ce988126f5e8146cf6d1d4f05f2png.png?x-oss-process=image/format,webp/resize,w_686"
        alt=""
      />
    </div>
    <div class="recommend">
      <p class="title">商家推荐</p>
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        :width="292"
        :loop="false"
        indicator-color="white"
      >
        <van-swipe-item>
          <div class="swipItem">
            <img
              src="https://cube.elemecdn.com/b/46/0aab566e756d1fa5bf2fb4ce6595cjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_241/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
              alt=""
            />
            <div class="dishes">
              <div class="cartTitle">招牌黄焖鸡+香菇+土豆+豆腐丝+米饭</div>
              <p class="foodCart">月售16 好评率0%</p>
              <div class="cartBottom">
                <p class="price">￥19.9</p>
                <van-icon name="add" />
              </div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="swipItem">
            <img
              src="https://cube.elemecdn.com/b/46/0aab566e756d1fa5bf2fb4ce6595cjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_241/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
              alt=""
            />
            <div class="dishes">
              <div class="cartTitle">招牌黄焖鸡+香菇+土豆+豆腐丝+米饭</div>
              <p class="foodCart">月售16 好评率0%</p>
              <div class="cartBottom">
                <p class="price">￥19.9</p>
                <van-icon name="add" />
              </div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="swipItem">
            <img
              src="https://cube.elemecdn.com/b/46/0aab566e756d1fa5bf2fb4ce6595cjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_241/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
              alt=""
            />
            <div class="dishes">
              <div class="cartTitle">招牌黄焖鸡+香菇+土豆+豆腐丝+米饭</div>
              <p class="foodCart">月售16 好评率0%</p>
              <div class="cartBottom">
                <p class="price">￥19.9</p>
                <van-icon name="add" />
              </div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="swipItem">
            <img
              src="https://cube.elemecdn.com/b/46/0aab566e756d1fa5bf2fb4ce6595cjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_241/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
              alt=""
            />
            <div class="dishes">
              <div class="cartTitle">招牌黄焖鸡+香菇+土豆+豆腐丝+米饭</div>
              <p class="foodCart">月售16 好评率0%</p>
              <div class="cartBottom">
                <p class="price">￥19.9</p>
                <van-icon name="add" />
              </div>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="swipItem">
            <img
              src="https://cube.elemecdn.com/b/46/0aab566e756d1fa5bf2fb4ce6595cjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_241/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
              alt=""
            />
            <div class="dishes">
              <div class="cartTitle">招牌黄焖鸡+香菇+土豆+豆腐丝+米饭</div>
              <p class="foodCart">月售16 好评率0%</p>
              <div class="cartBottom">
                <p class="price">￥19.9</p>
                <van-icon name="add" />
              </div>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="orderPage">
      <div class="navigation" id="resetNav">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item class="asideItem" title="热销" />
          <van-sidebar-item class="asideItem" title="优惠" />
          <van-sidebar-item class="asideItem" title="必选品" />
        </van-sidebar>
      </div>
      <div class="menu">
        <van-swipe style="height: 200px;" vertical :loop="false">
          <van-swipe-item class="menuItem">
            <div class="image">
              <img
                src="https://cube.elemecdn.com/b/8b/5d5838426a19b575fdd4599f19f08jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_141,h_141/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp"
                alt=""
              />
            </div>
            <div class="menuInfo">
              <p class="infoTitle">招牌黄焖鸡+土豆+青菜+米饭</p>
              <p class="material">
                主要原料：鸡肉
              </p>
              <p class="sales"><span>月售67份</span><span>好评率100%</span></p>
              <p class="activity">
                <span>5.1折</span><span>每单限1份优惠</span
                ><span class="limit">剩7份</span>
              </p>
              <div id="infoPrice">
                <p>
                  <span>￥19.9</span>
                  <del>￥38.88</del>
                </p>
                <van-icon name="add" />
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
import "./index.styl";
import { Swipe, SwipeItem } from "vant";
import { Icon } from "vant";
import { Sidebar, SidebarItem } from "vant";
export default {
  name: "",
  data() {
    return {
      activeKey: 0,
    };
  },
  methods: {},
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Icon.name]: Icon,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
  },
};
</script>

<style lang="less" scoped></style>
