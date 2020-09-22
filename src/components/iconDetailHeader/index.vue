<template>
  <!-- icon详情页 hhb -->
  <div class="headerContainer">
    <van-tabs
      background="#0093FF"
      line-width="50px"
      line-height="2px"
      color="white"
      class="van-tabs"
      style="height:80px"
    >
      <van-tab
        title-active-color="red"
        title-style="color:#FFFFFF;font-size:30px;height:70px;background:#0093FF"
        v-for="(item,index) in tab"
        :title="item"
        :key="index+1"
      >
        <!--           
          <div class="down">
              <button>
                <van-icon name="arrow-down" />
              </button>
          </div>
        -->

        <div class="navContainer">
          <!-- <van-dropdown-menu  active-color="#3190E8">
                <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>-->
          <Sort @sendValue="getValue"></Sort>
          <div class="navItem">距离最近</div>
          <div class="navItem">销量最高</div>
          <div class="navItem" @touchend="isShow=true">
            筛选
            <van-icon name="filter-o" />
          </div>
        </div>

        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div style="margin-top:90px">
            <Card v-for="(shopItem, index) in sortShoplist" :key="shopItem.id" :shopItem="shopItem"></Card>
          </div>
        </van-pull-refresh>
        <!--  <Screen class="screen" :class="isShow ? 'active' : ''"></Screen> -->
      </van-tab>
    </van-tabs>

    <!-- <div class="tabs" v-for="(item,index) in tab" :title="item" :key='index+1'>
          <div class="tab">{{item}}</div>
    </div>-->
  </div>
</template>

<script>
import Card from '@/components/card'
import Screen from '@/components/screen'
import Sort from '@/components/sort'
import { Tab, Tabs, Icon, Tag, Button, DropdownMenu, DropdownItem } from 'vant'
import { mapState } from 'vuex'
export default {
  name: 'iconDetailHeader',
  data() {
    return {
      isShow: false,
      isLoading: false,
      value: 0,
      value1: 0,
      value2: 'a',
      option1: [
        { text: '综合排序', value: 0 },
        { text: '好评有优先', value: 1 },
        { text: '起送价最低', value: 2 },
        { text: '配送最快', value: 3 },
        { text: '配送费最低', value: 4 },
        { text: '人均从低到高', value: 5 },
        { text: '人均从高到低', value: 6 },
        { text: '通用排序', value: 7 },
      ],
      active: 2,
      tab: [
        '全部',
        '面食粥点',
        '简餐便当',
        '汉堡披萨',
        '香锅冒菜',
        '小吃炸串',
        '地方菜系',
        '日韩料理',
        '轻食简餐',
      ],
    }
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Icon.name]: Icon,
    [Card.name]: Card,
    [Tag.name]: Tag,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Button.name]: Button,
    Screen,
    Sort,
    Card,
  },

  methods: {
    getValue(value) {
      this.value = value
    },

    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
        this.sortShoplist()
      }, 1000)
    },

    // 排序
    sortArr(type) {
      // const {shopList} = this
      let newShopList = [...this.shopList]
      console.log(this.shopList)
      switch (type) {
        case 1: //好评优先
          return newShopList.sort((a, b) => b.rating - a.rating)

        case 2: //起送价最低
          return newShopList.sort(
            (a, b) =>
              a.piecewise_agent_fee.rules[0].price -
              b.piecewise_agent_fee.rules[0].price
          )

        case 3: //配送最快
          return newShopList.sort(
            (a, b) => a.order_lead_time - b.order_lead_time
          )

        case 4: //配送费最低
          return newShopList.sort(
            (a, b) =>
              a.piecewise_agent_fee.rules[0].price -
              b.piecewise_agent_fee.rules[0].price
          )

        case 5: //人均从低到高
          return newShopList.sort(
            (a, b) =>
              a.piecewise_agent_fee.rules[0].fee -
              b.piecewise_agent_fee.rules[0].fee
          )

        case 6: //人均从高到底
          return newShopList.sort(
            (a, b) =>
              b.piecewise_agent_fee.rules[0].fee -
              a.piecewise_agent_fee.rules[0].fee
          )

        case 7: //通用排序
          return newShopList.sort(
            (a, b) => b.recent_order_num - a.recent_order_num
          )

        default:
          return newShopList
      }
    },
  },
  computed: {
    ...mapState({ shopList: (state) => state.cxh.shopList }),
    sortShoplist() {
      const { value } = this
      console.log(this.shopList)
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
        case 5:
          return this.sortArr(5)
        case 6:
          return this.sortArr(6)
        case 7:
          return this.sortArr(7)
        default:
          return this.shopList
      }
    },
  },
}
</script>

<style lang="less" scoped>
.headerContainer {
  /deep/.van-tabs--line .van-tabs__wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }

  /deep/ .van-cell__title,
  .van-cell__value {
    margin-left: 10px;
  }
  /deep/ .van-tab__text {
    font-size: 14px;
  }

  /deep/.van-ellipsis {
    font-size: 28/2px;
    color: #666;
    height: 38px;
    line-height: 38px;
  }

  /deep/ .van-tabs__wrap--scrollable .van-tabs__nav--complete .van-tab {
    margin-top: -10px;
  }

  .navContainer {
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    position: fixed;
    top: 45px;
    background: #fff;
    z-index: 99;
    width: 100%;

    /deep/ .van-dropdown-menu__bar {
      height: 30px;
      margin-top: 10px;
    }
    /deep/ .van-dropdown-menu__item {
      height: 40px;
      line-height: 40px;

      .van-ellipsis {
        height: 40px;
        line-height: 35px;
        font-size: 14px;
      }
    }
    .navItem {
      color: #676767;
      font-size: 14px;
      line-height: 55px;
      &.active {
        color: #3190e8;
        font-weight: bold;
      }
    }
  }

  .down {
    position: absolute;
    top: 11px;
    right: 6px;
    z-index: 999;
    box-shadow: rgba(0, 0, 0, 0.1) -3px 0px;
    button {
      width: 50px;
      height: 30px;
      background: #0093ff;
      color: white;
      border: 0;
    }
  }
}

.screen {
  display: none;

  &active {
    display: block;
  }
}
</style>
