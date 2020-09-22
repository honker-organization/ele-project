<template>
  <div class="recommendContainer">
    <div class="title">—— 推荐商家 ——</div>
    <!-- 排序 -->
    <div class="selectContainer">
      <Sort @sendValue="getValue" />
      <div class="selectitem">距离最近</div>
      <div class="selectitem">销量最高</div>
      <div class="selectitem">
        筛选
        <van-icon name="filter-o" />
      </div>
    </div>

    <div class="shopContainer" v-for="(shop,index) in sortShopList" :key="index">
      <van-skeleton :loading="loading" avatar-shape="square" animate title avatar :row="3">
        <div class="shopItem" >
          <div class="photoContainer">
            <img :src="shop.image_path" />
            <div class="detail">
              <div class="detail-top">
                <div class="shopName">{{shop.name}}</div>
                <div class="monthcontainer">
                  <Star :rating="shop.rating" />
                  <div class="five">{{shop.rating}}</div>
                  <div class="count">月销售{{shop.recent_order_num}}单</div>
                </div>
                <div class="otherContainer">
                  <div class="left">
                    <span class="send">¥{{shop.piecewise_agent_fee.rules[0].price}}起送</span>
                    <span>|</span>
                    <span>配送¥{{shop.piecewise_agent_fee.rules[0].fee}}</span>
                  </div>
                  <div class="right">
                    <span>{{shop.distance}}m</span>
                    <span>|</span>
                    <span>{{shop.order_lead_time}}分钟</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="other">
              <span>{{shop.support_tags[0].text}}</span>
            </div>
            <span class="dash"></span>
            <div class="tags">
              <div class="more-container">
                <div class="more" v-for="(item,inx) in shop.activities" :key="inx">
                  <div v-if="inx < 2 || isShowActivity">
                    <span
                      class="jian"
                      :style="{backgroundColor:`#${item.icon_color}`}"
                    >{{item.icon_name}}</span>
                    <span class="man">{{item.description}}</span>
                  </div>
                </div>
              </div>
              <div class="activityLength" v-if="shop.activities.length > 2">
                <span @click="showActivity">{{shop.activities.length}}个活动</span>
                <span @click="showActivity" class="trig" :class="{active:isShowActivity}"></span>
              </div>
            </div>
          </div>
        </div>
      </van-skeleton>
    </div>
  </div>
</template>
<script>
import Sort from '@/components/sort'
import Star from '@/components/star'
import setImagePath from '@/utils/imagePath'
export default {
  name: '',
  components: {
    Sort,
    Star,
  },
  data() {
    return {
      shopList: [], // 获取商铺列表
      isShowActivity: false, // 默认不显示全部的活动
      loading: true,
      /**
       * 0 => 综合排序
       * 1 => 好评优先
       * 2 => 起送价最低
       * 3 => 配送最快
       * 4 => 配送费最低
       * 5 => 人均从低到高
       * 6 => 人均从高到低
       * 7 => 通用排序(综合)
       */
      value: 0,
    }
  },

  computed: {
    sortShopList() {
      const { value, shopList } = this
      // 根据value值进行排序
      switch (value) {
        case 1:
          return this.sortArr(1)
        case 2:
          return this.sortArr(2)
        case 3:
          return this.sortArr(3)
        case 4:
          return this.sortArr(4)
        default:
          return shopList
      }
    },
  },
  beforeDestroy() {
    clearTimeout(this.timeId)
  },
  mounted() {
    // 发送请求，请求商铺列表
    this.getShopList()
  },
  methods: {
    // 获取商铺列表
    async getShopList() {
      const res = await this.$api.cxh.reqShopList()
      if (res.code === 200) {
        const shopList = setImagePath(res.data.items)
        this.shopList = shopList
        this.timeId = setTimeout(() => {
          this.loading = false
        }, 1000)
      }
    },
    showActivity() {
      this.isShowActivity = !this.isShowActivity
    },
    // 拿到当前选中到下拉框到value值
    getValue(value) {
      this.value = value
    },
    // 排序方法
    sortArr(type) {
      const { shopList } = this
      let newShopList = [...shopList]
      switch (type) {
        case 1:
          return newShopList.sort((a, b) => b.rating - a.rating)

        case 2:
          return newShopList.sort(
            (a, b) =>
              a.piecewise_agent_fee.rules[0].price -
              b.piecewise_agent_fee.rules[0].price
          )
        case 3:
          return newShopList.sort(
            (a, b) => a.order_lead_time - b.order_lead_time
          )
        case 4:
          return newShopList.sort(
            (a, b) =>
              a.piecewise_agent_fee.rules[0].fee -
              b.piecewise_agent_fee.rules[0].fee
          )
        default:
          return newShopList
      }
    },
  },
}
</script>
<style scoped lang="less">

.star {
  font-size: 14px;
}

.recommendContainer {
  /deep/.van-skeleton__avatar {
    width: 65px !important;
    height: 65px !important;
  }
  /deep/.van-skeleton__avatar + .van-skeleton__content {
    padding-top: 0;
  }
  /deep/.van-skeleton__row:not(:first-child) {
    margin-top: 7px;
  }

  .title {
    height: 72/2px;
    width: 100%;
    line-height: 72/2px;
    text-align: center;
    font-size: 30/2px;
    margin-top: 70/2px;
  }
  .selectContainer {
    position: sticky;
    top:0px;
    z-index:99;
    display: flex;
    width: 100%;
    background: white;
    margin: 0 auto;
  
    justify-content: space-between;
    .selectitem {
      display: flex;
      align-items: center;
      font-size: 28/2px;
      color: #666;
      height: 38px;
      text-align: center;
    }
  }
  /deep/.van-dropdown-menu__bar {
    box-shadow: none;
  }
  /deep/.van-ellipsis {
    font-size: 28/2px;
    color: #666;
    height: 38px;
    line-height: 38px;
  }
  .shopContainer {
    margin: 15px 0;
    &::after {
      content: '';
      display: block;
      border-bottom: 1px solid #ccc;
      transform: scaleY(0.3);
      margin-top: 10px;
    }

    .photoContainer {
      padding: 0 0 0 20/2px;
      display: flex;
      img {
        width: 65px;
        height: 65px;
      }
      .detail {
        padding: 0 10px;
        flex: 1;
        .detail-top {
          height: 130/2px;
          .shopName {
            font-size: 16px;
            color: #333;
          }
          .monthcontainer {
            display: flex;
            color: #666;
            margin-top: 15/2px;
            .five {
              font-size: 12px;
              margin: 0 8/2px 8/2px 8/2px;
            }
            .count {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  .otherContainer {
    display: flex;
    justify-content: space-between;
    .left,
    .right {
      span {
        font-size: 12px;
      }
    }
    .left {
      color: #666;
    }
    .right {
      color: #999;
      & > span:nth-child(2) {
        margin: 5px;
      }
    }
  }
  .bottom {
    position: relative;
    padding: 0 0 0 170/2px;
    .other {
      margin-top: 10px;
      border: 1px solid #666;
      display: inline-block;
      height: 26/2px;
      border-radius: 5/2px;

      span {
        display: block;
        line-height: 26/2px;
        text-align: center;
        padding: 0 12/2px;
        font-size: 12px;
        color: #666;
      }
    }
    .dash {
      display: block;
      width: calc(100vw - 115px);
      height: 1px;
      background-color: #ccc;
      margin-top: 10px;
      transform: scaleY(0.3);
    }
  }
  .tags {
    display: flex;
    margin-top: 10px;
    margin-top: 30/2px;
    .activityLength {
      position: relative;
      & > span:first-child {
        font-size: 12px;
        color: #999;
        margin-top: 4px;
      }
      .trig {
        position: absolute;
        top: 4px;
        right: -13px;
        border: 5px solid transparent;
        border-bottom: 5px solid #999;
        transition: all 0.5s linear;
        &.active {
          transform: rotate(180deg) translateY(-6px);
        }
      }
    }
  }

  .more-container {
    width: 70%;
  }

  .more {
    .jian {
      display: inline-block;
      width: 28/2px;
      height: 28/2px;
      background-color: rgb(240, 115, 115);
      color: #ffffff;
      text-align: center;
      line-height: 28/2px;
      font-size: 10px;
      border-radius: 5/2px;
      margin-right: 10/2px;
    }
    .man {
      font-size: 22/2px;
      color: #666;
      overflow: hidden;
      white-space: nowrap;
      display: inline-block;
      width: 80%;
      text-overflow: ellipsis;
      vertical-align: middle;
    }
  }
  .less {
    padding-top: 10/2px;
    .pei {
      margin-right: 10/2px;
      display: inline-block;
      width: 28/2px;
      height: 28/2px;
      background-color: rgb(112, 188, 70);
      color: #ffffff;
      text-align: center;
      line-height: 28/2px;
      font-size: 10px;
      border-radius: 5/2px;
    }
    .three {
      font-size: 22/2px;
      color: #666;
    }
  }
}
</style>
