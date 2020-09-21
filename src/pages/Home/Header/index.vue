
<template>
  <div class="wrapper">
    <!-- 头部 -->
    <div class="headerContainer">
      <!-- #0093ff -->
      <div class="word" @click="$router.push('/changeAddress')">
        <van-icon size="20px" name="location" color="#fff" />
        <span class="text" v-if="!position.name">正在识别地址</span>
        <span class="text" v-else>{{position.name}}</span>
        <van-icon name="arrow-down" color="#fff" />
      </div>
      <van-search class="search" placeholder="请输入搜索关键词" input-align="center" />
    </div>
    <!-- 导航栏 -->
    <div class="navContainer">
      <div class="navItem" v-for="item in foodList" :key="item.id">
        <van-skeleton
          :loading="foodLoading"
          title-width="45px"
          row-width="45px"
          avatar-shape="square"
          animate
          title
          :row="1"
        >
          <img :src="item.imgUrl" />
          <span>{{item.name}}</span>
        </van-skeleton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      position: {}, // 位置相关信息
      foodList: [], // 食品分类
      foodLoading: true,
    }
  },
  beforeDestroy() {
    clearTimeout(this.timeId)
  },
  mounted() {
    // 发送请求，请求当前位置详情
    this.getPosition()
    // 发送请求，请求食品分类数据
    this.getFoodList()
  },
  methods: {
    getPosition() {
      // 通过一系列操作改变data中的经纬度
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
      }
    },
    // 获取当前坐标
    async showPosition(detail) {
      const {
        coords: { latitude, longitude },
      } = detail
      // 发送请求，携带改变完成的经纬度
      const position = await this.$api.cxh.reqPosition(latitude, longitude)
      this.position = position
      console.log(this.position)
    },
    async getFoodList() {
      const res = await this.$api.cxh.reqFoodCategory()
      const foodList = res.data.items
      this.foodList = foodList
      this.timeId = setTimeout(() => {
        this.foodLoading = false
      }, 1000)
    },
  },
}
</script>

<style scoped lang="less">
/deep/.van-search {
  padding: 0;
}
/deep/.van-skeleton__title {
  height: 45px;
}

.wrapper {
  // 头部样式
  .headerContainer {
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0093ff;
    .word {
      font-size: 12px;
      width: 90%;
      margin-bottom: 10px;
    }

    .text {
      display: inline-block;
      width: 160px;
      font-size: 16px;
      color: #ffffff;
      vertical-align: top;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .search {
      width: 90%;
      .van-cell {
        font-size: 12px;
      }
      // /deep/.van-icon {
      //   font-size: 30px;
      // }
      // /deep/.van-field__left-icon {
      //   display: flex;
      //   align-items: center;
      // }
    }
  }
  // 导航栏样式
  .navContainer {
    display: flex;
    flex-wrap: wrap;
    .navItem {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 22px 0 0;
      img {
        width: 45px;
        height: 45px;
      }
      span {
        margin: 10px 0 0;
      }
    }
  }
}
</style>
