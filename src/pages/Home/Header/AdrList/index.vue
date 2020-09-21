<template>
  <div>
    <div class="container">
      <van-icon name="arrow-left" size="30px" color="#fff" @click="$router.back()" />
      <div class="word">城市选择</div>
    </div>
    <van-search shape="round" background="#0093ff" placeholder="请输入搜索关键词" />
    <div class="first">当前定位城市</div>
    <div class="second">香港特别行政区</div>
    <Province />
  </div>
</template>

<script>
import Province from '../Province'
export default {
  name: '',
  components: {
    Province,
  },
}
</script>

<style scoped lang="less">
// 15px margin
.container {
  height: 44px;
  background: #0093ff;
  display: flex;
  align-items: center;
  .word {
    font-weight: 200;
    font-size: 18px;
    color: #fff;
    margin-left: 120px;
    height: 44px;
    line-height: 44px;
  }
}
.first {
  background: #f5f5f5;
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
}
.second {
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
}
</style>
