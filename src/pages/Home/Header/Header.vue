
<template>
  <div class="wrapper">
    <!-- 头部 -->
    <div class="headerContainer">
      <!-- #0093ff -->
      <div class="word">
        <van-icon name="location" color="#fff" />
        <span class="text">宝安区西部硅谷前...</span>
        <van-icon name="arrow-down" color="#fff" />
      </div>
      <van-search class="search" placeholder="请输入搜索关键词" input-align="center" />
    </div>
    <!-- 导航栏 -->
    <div class="navContainer">
      <div class="navItem">
        <img
          src="https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
          alt
        />
        <span>美食</span>
      </div>
      <div class="navItem">
        <img
          src="https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
          alt
        />
        <span>大牌惠吃</span>
      </div>
      <div class="navItem">
        <img
          src="https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
          alt
        />
        <span>跑腿代购</span>
      </div>
      <div class="navItem">
        <img
          src="https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
          alt
        />
        <span>汉堡披萨</span>
      </div>
      <div class="navItem">
        <img
          src="https://cube.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
          alt
        />
        <span>甜品饮料</span>
      </div>
      <div class="navItem">
        <img
          src="https://cube.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
          alt
        />
        <span>速食简餐</span>
      </div>
      <div class="navItem">
        <img
          src="https://cube.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
          alt
        />
        <span>地方小吃</span>
      </div>
      <div class="navItem">
        <img
          src="https://cube.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
          alt
        />
        <span>米粉面馆</span>
      </div>
      <div class="navItem">
        <img
          src="https://cube.elemecdn.com/5/1a/dc885d2ce022d2ee60495acafb795jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
          alt
        />
        <span>包子粥店</span>
      </div>
      <div class="navItem">
        <img
          src="https://cube.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed"
          alt
        />
        <span>炸鸡炸串</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, Search } from 'vant'

export default {
  components: {
    [Icon.name]: Icon,
    [Search.name]: Search,
  },
  name: '',
}
</script>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 14px;
}
.wrapper {
  // 头部样式
  .headerContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20/2px 10/2px 20/2px;
    background-color: #0093ff;
    .word {
      width: 90%;
      height: 69/2px;
    }

    .text {
      font-size: 36/2px;
      color: #ffffff;
      display: inline-block;
      padding: 30/2px 10/2px;
    }
    .search {
      width: 90%;
      height: 69/2px;
      margin-top: 20/2px;
      .van-cell {
        font-size: 30/2px;
      }
      // /deep/.van-icon {
      //   font-size: 30/2px;
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
      height: 127/2px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 22/2px 0 0;
      img {
        width: 45px;
        height: 45px;
      }
      span {
        margin: 10/2px 0 0;
      }
    }
  }
}
</style>
