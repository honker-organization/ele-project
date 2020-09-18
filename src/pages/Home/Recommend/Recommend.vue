<template>
  <div class="recommendContainer">
    <div class="title">—— 推荐商家 ——</div>
    <!-- 排序 -->
    <div class="selectContainer">
      <!-- <div class="selectitem">综合排序</div> -->
      <van-dropdown-menu class="selectitem">
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
      <div class="selectitem">距离最近</div>
      <div class="selectitem">销量最高</div>
      <div class="selectitem">
        筛选
        <van-icon name="filter-o" />
      </div>
    </div>
    <div class="shopContainer">
      <div class="shopItem">
        <div class="photoContainer">
          <img
            src="https://cube.elemecdn.com/6/E6/B9A64B1CC4A679685DC2AEF234C9Dpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
            alt
          />
          <div class="detail">
            <div class="detail-top">
              <div class="shopName">鑫丰一品香(崇文门店)</div>
              <div class="monthcontainer">
                <van-icon name="star" color="#ffbd00" class="star" />
                <van-icon name="star" color="#ffbd00" class="star" />
                <van-icon name="star" color="#ffbd00" class="star" />
                <van-icon name="star" color="#ffbd00" class="star" />
                <van-icon name="star" color="#ffbd00" class="star" />

                <div class="five">5</div>
                <div class="count">月销售58单</div>
              </div>
              <div class="otherContainer">
                <div class="left">
                  <span class="send">¥20起送</span>
                  <span>|</span>
                  <span>配送¥0.5</span>
                </div>
                <div class="right">
                  <span>1.59km</span>
                  <span>|</span>
                  <span>30分钟</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="other">
            <span>其他小吃</span>
          </div>
          <div class="more">
            <span class="jian">减</span>
            <span class="man">满20元减14元，满40元减26元，满60元减46元</span>
          </div>
          <div class="less">
            <span class="pei">配</span>
            <span class="three">配送费立减三元</span>
          </div>
        </div>
      </div>
    </div>
    <div class="shopContainer">
      <div class="shopItem">
        <div class="photoContainer">
          <img
            src="https://cube.elemecdn.com/6/5a/2c90927ab9f7c0cb40d386d34df46png.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
            alt
          />
          <div class="detail">
            <div class="detail-top">
              <div class="shopName">眉州小吃(崇文门店)</div>
              <div class="monthcontainer">
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <div class="five">5</div>
                <div class="count">月销售58单</div>
              </div>
              <div class="otherContainer">
                <div class="left">
                  <span class="send">¥20起送</span>
                  <span>|</span>
                  <span>配送¥0.5</span>
                </div>
                <div class="right">
                  <span>1.59km</span>
                  <span>|</span>
                  <span>30分钟</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="other">
            <span>其他小吃</span>
          </div>
          <div class="more">
            <span class="jian">减</span>
            <span class="man">满20元减14元，满40元减26元，满60元减46元</span>
          </div>
          <div class="less">
            <span class="pei">配</span>
            <span class="three">配送费立减三元</span>
          </div>
        </div>
      </div>
    </div>
    <div class="shopContainer">
      <div class="shopItem">
        <div class="photoContainer">
          <img
            src="https://cube.elemecdn.com/e/64/d3681cf5b588a148e81691e3ebc3dpng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
          />
          <div class="detail">
            <div class="detail-top">
              <div class="shopName">星巴克专星送</div>
              <div class="monthcontainer">
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <div class="five">5</div>
                <div class="count">月销售58单</div>
              </div>
              <div class="otherContainer">
                <div class="left">
                  <span class="send">¥20起送</span>
                  <span>|</span>
                  <span>配送¥0.5</span>
                </div>
                <div class="right">
                  <span>1.59km</span>
                  <span>|</span>
                  <span>30分钟</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="other">
            <span>其他小吃</span>
          </div>
          <div class="more">
            <span class="jian">减</span>
            <span class="man">满20元减14元，满40元减26元，满60元减46元</span>
          </div>
          <div class="less">
            <span class="pei">配</span>
            <span class="three">配送费立减三元</span>
          </div>
        </div>
      </div>
    </div>
    <div class="shopContainer">
      <div class="shopItem">
        <div class="photoContainer">
          <img
            src="https://cube.elemecdn.com/4/36/22f50cdc27d298699cfe05c2b0a01png.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
          />
          <div class="detail">
            <div class="detail-top">
              <div class="shopName">兄弟东北菜(广渠门店)</div>
              <div class="monthcontainer">
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <div class="five">5</div>
                <div class="count">月销售58单</div>
              </div>
              <div class="otherContainer">
                <div class="left">
                  <span class="send">¥20起送</span>
                  <span>|</span>
                  <span>配送¥0.5</span>
                </div>
                <div class="right">
                  <span>1.59km</span>
                  <span>|</span>
                  <span>30分钟</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="other">
            <span>其他小吃</span>
          </div>
          <div class="more">
            <span class="jian">减</span>
            <span class="man">满20元减14元，满40元减26元，满60元减46元</span>
          </div>
          <div class="less">
            <span class="pei">配</span>
            <span class="three">配送费立减三元</span>
          </div>
        </div>
      </div>
    </div>
    <div class="shopContainer">
      <div class="shopItem">
        <div class="photoContainer">
          <img
            src="https://cube.elemecdn.com/4/04/ab58c7906633bf898466174978965jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
          />
          <div class="detail">
            <div class="detail-top">
              <div class="shopName">黄焖鸡(崇文门店)</div>
              <div class="monthcontainer">
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <div class="five">5</div>
                <div class="count">月销售58单</div>
              </div>
              <div class="otherContainer">
                <div class="left">
                  <span class="send">¥20起送</span>
                  <span>|</span>
                  <span>配送¥0.5</span>
                </div>
                <div class="right">
                  <span>1.59km</span>
                  <span>|</span>
                  <span>30分钟</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="other">
            <span>其他小吃</span>
          </div>
          <div class="more">
            <span class="jian">减</span>
            <span class="man">满20元减14元，满40元减26元，满60元减46元</span>
          </div>
          <div class="less">
            <span class="pei">配</span>
            <span class="three">配送费立减三元</span>
          </div>
        </div>
      </div>
    </div>
    <div class="shopContainer">
      <div class="shopItem">
        <div class="photoContainer">
          <img
            src="https://cube.elemecdn.com/8/B2/6266479FA45E1B60F562CF1BCC38Bjpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"
          />
          <div class="detail">
            <div class="detail-top">
              <div class="shopName">德克士(虎坊桥店)</div>
              <div class="monthcontainer">
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <van-icon name="star" color="#ffbd00" />
                <div class="five">5</div>
                <div class="count">月销售58单</div>
              </div>
              <div class="otherContainer">
                <div class="left">
                  <span class="send">¥20起送</span>
                  <span>|</span>
                  <span>配送¥0.5</span>
                </div>
                <div class="right">
                  <span>1.59km</span>
                  <span>|</span>
                  <span>30分钟</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="other">
            <span>其他小吃</span>
          </div>
          <div class="more">
            <span class="jian">减</span>
            <span class="man">满20元减14元，满40元减26元，满60元减46元</span>
          </div>
          <div class="less">
            <span class="pei">配</span>
            <span class="three">配送费立减三元</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon, DropdownMenu, DropdownItem } from 'vant'
export default {
  name: '',
  components: {
    [Icon.name]: Icon,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
  },
  data() {
    return {
      value1: 0,
      option1: [
        { text: '综合排序', value: 0 },
        { text: '好评优先', value: 1 },
        { text: '起送价最低', value: 3 },
        { text: '配送最快', value: 4 },
        { text: '配送费最低', value: 5 },
        { text: '人均从低到高', value: 6 },
        { text: '人均从高到低', value: 7 },
        { text: '通用排序', value: 8 },
      ],
    }
  },
}
</script>
<style scoped lang="less">
* {
  font-size: 14px;
}
// #0093ff
/deep/.van-dropdown-item__option--active,
/deep/.van-dropdown-item__option--active .van-dropdown-item__icon,
/deep/.van-dropdown-menu__title--active::after {
  color: #0093ff;
}
.star {
  font-size: 14px;
}
.recommendContainer {
  .title {
    height: 72/2px;
    width: 100%;
    line-height: 72/2px;
    text-align: center;
    font-size: 30/2px;
    margin-top: 70/2px;
  }
  .selectContainer {
    display: flex;
    width: 90%;
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
    padding: 30/2px 0;
    width: 90%;
    .photoContainer {
      padding: 0 0 0 20/2px;
      display: flex;
      img {
        width: 65px;
        height: 65px;
      }
      .detail {
        padding: 0 0 0 20/2px;
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
        color: #666;
      }
    }
  }
  .bottom {
    padding: 0 0 0 170/2px;
    .other {
      margin-top: 10/2px;
      border: 1px solid #666;
      width: 90/2px;
      height: 26/2px;
      border-radius: 5/2px;

      span {
        display: block;
        line-height: 26/2px;
        text-align: center;
        padding: 0 12/2px;
        font-size: 8px;
        color: #666;
      }
    }
  }
  .more {
    margin-top: 30/2px;
    padding-top: 10/2px;
    border-top: 1px dotted #666;
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
