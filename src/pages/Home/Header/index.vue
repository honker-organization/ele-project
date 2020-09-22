
<template>
  <div class="wrapper">
    <!-- 头部 -->
    <div class="headerContainer">
      <!-- #0093ff -->
      <div class="word" @touchend="$router.push('/changeAddress')">
        <van-icon size="20px" name="location" color="#fff" />
        <span class="text" v-if="!position.name">正在识别地址</span>
        <span class="text" v-else>{{position.name}}</span>
        <van-icon name="arrow-down" color="#fff" />
      </div>
      <div class="searchToTop" :class="{toTop:isFixed}">
        <van-search
          class="search"
          placeholder="请输入关键词"
          input-align="center"
          @click="$router.push('/hotSearch')"
        />
      </div>
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
      isFixed: false,
    }
  },
  mounted() {
    // 发送请求，请求当前位置详情
    this.getPosition()
    // 发送请求，请求食品分类数据
    this.getFoodList()

    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    getPosition() {
      // 通过一系列操作改变data中的经纬度
      // console.log(navigator.geolocation)
      if (navigator.geolocation) {
        console.log(navigator.geolocation.getCurrentPosition)
        navigator.geolocation.getCurrentPosition(this.showPosition, (err) => {
          console.log(err)
        })
      }
    },
    // 获取当前坐标
    async showPosition(detail) {
      const {
        coords: { latitude, longitude },
      } = detail
      console.log(detail)
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

    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      var offsetTop = document.querySelector('.searchToTop').offsetTop
      if (scrollTop > offsetTop) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    },
  },
}
</script>

<style scoped lang="less">
.searchToTop {
  height: 60px;
  display: flex;
  align-items: center;
}
.toTop {
  background: #0093ff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
/deep/.van-search__content--square {
  padding: 5px 110px;
}
/deep/.van-search {
  padding: 0px;
  margin: 12px auto;
  border-radius: 5px;
}
/deep/.van-skeleton__title {
  height: 45px;
}

// .toTop {
//   width: 100%;
//   position: fixed;
//   z-index: 1000;
// }

.wrapper {
  // 头部样式
  .headerContainer {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0093ff;
    .word {
      font-size: 12px;
      width: 90%;
      margin: 10px 0;
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