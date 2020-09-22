<template>
  <div class="searchContainer">
    <van-nav-bar left-arrow />

    <div class="searchInput">
      <div class="search-input">
        <input type="text" placeholder="请输入商家、商品名称" v-model="searchValue" />
        <van-icon name="search" />
        <div class="search-word">搜索</div>
      </div>
    </div>
    <div v-if="!searchValue">
      <div class="search-row">热门搜索</div>

      <div class="searchRow-content">
        <div class="searchItem">轻食</div>

        <div class="searchItem">炒饭</div>

        <div class="searchItem">饭团</div>

        <div class="searchItem">湘菜</div>

        <div class="searchItem">肯德鸡</div>

        <div class="searchItem">炸鸡</div>

        <div class="searchItem">水果捞</div>

        <div class="searchItem">正新鸡排</div>

        <div class="searchItem">叫了个炸鸡</div>

        <div class="searchItem">猪脚饭</div>
      </div>
    </div>
    <ul v-else class="searchShopContainer">
      <li class="searchShopItem" v-for="(item,index) in searchShopList" :key="index">
        <div class="left">
          <img :src="item.image_path" alt />
          <div class="shopName">
            <div class="shopNameHeader">
              <span class="shopNameHeaderName">{{item.name}}</span>
              <span>满减</span>
              <span>蜂鸟</span>
            </div>
            <span class="order">接受预定，9:20开始配送</span>
          </div>
        </div>
        <div class="right">
          <span>评价{{item.rating}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { NavBar, Icon } from 'vant'
export default {
  name: 'HotSearch',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
  },
  data() {
    return {
      searchValue: '',
    }
  },
  computed: {
    ...mapState({
      shopList: (state) => state.cxh.shopList,
    }),
    searchShopList() {
      const { searchValue, shopList } = this
      return shopList.filter((item) => item.name.indexOf(searchValue) !== -1)
    },
  },
}
</script>

<style lang="less" scoped>
/deep/ [data-v-7ce016af] .van-icon-arrow-left::before {
  font-size: 20px;
  color: #979797;
}
.searchinput {
  position: relative;
  width: 400px;
}
.left {
  display: flex;
}
.searchShopContainer {
  padding: 20px;
  .searchShopItem {
    position: relative;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    &::after {
      position: absolute;
      content: '';
      width: 90%;
      height: 1px;
      background-color: #e3e3e3;
      right: 0;
      bottom: -5px;
      transform: scaleY(0.6);
    }
    img {
      width: 24px;
      height: 24px;
      margin-right: 16px;
    }
    .shopName {
      .shopNameHeader {
        display: flex;
        align-items: center;
        margin-bottom: 7px;
        .shopNameHeaderName {
          font-size: 14px;
          color: #333;
        }
        span:nth-child(2),
        span:nth-child(3) {
          font-size: 10px;
          color: #fff;
          padding: 3px;
          transform: scale(0.9);
        }
        span:nth-child(2) {
          background-color: #fa7047;
          margin-left: 5px;
        }
        span:nth-child(3) {
          background-color: #2395ff;
        }
      }
      .order {
        font-size: 9px;
        color: #00e066;
        padding: 3px;
        border: 1px solid #00e066;
        border-radius: 10px;
        text-align: center;
        transform: scale(0.9);
        display: inline-block;
        margin-left: -8px;
      }
    }
    span {
      font-size: 12px;
      color: #999;
    }
  }
}

.search-input {
  display: flex;
  width: 290px;
  height: 30px;

  right: 30px;
  margin-left: 20px;
  margin-top: 10px;
}

.search-input input {
  width: 100%;
  height: 100%;
  border: none;
  background: #f2f2f2;
  padding-left: 30px;
}

/deep/ .van-icon-search::before {
  position: absolute;
  z-index: 99;
  top: 5px;
  left: -282px;
  color: #a0a0a0;
  font-size: 20px;
}

.search-word {
  width: 80px;
  position: absolute;
  top: 64px;
  right: -30px;
  color: block;
  font-size: 14px;
  font-weight: bold;
}

.search-row {
  margin-top: 30px;
  margin-left: 20px;
  color: #666;
  font-size: 14px;
}

.searchRow-content {
  display: flex;

  margin-left: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
  width: 320px;
}

.searchItem {
  background: #f7f7f7;
  height: 25px;
  line-height: 25px;
  text-align: center;
  color: #666;
  padding: 0 10px;
  margin-right: 15px;
  margin-bottom: 10px;
}
</style>
