
<template>
  <!-- by程小惠 -->
  <!-- 选择收货地址头部 -->
  <div>
    <div class="container">
      <van-icon name="arrow-left" size="30px" color="#fff" @click="$router.back()" />
      <div class="word">选择收货地址</div>
      <div class="newAddress" @touchend="$router.push('/addNewAddress')">新增地址</div>
    </div>
    <Addr />
  </div>
</template>

<script>
import Addr from '../Addr'
// 点击地址跳转的选择收货地址的页面
export default {
  name: '',
  components: {
    Addr,
  },
}
</script>

<style scoped lang="less">
.container {
  height: 44px;
  background: #0093ff;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .newAddress {
    color: #fff;
    font-weight: 200;
  }
  .word {
    color: #fff;
    font-size: 18px;
  }
  .newAddress {
    font-size: 16px;
  }
}
</style>
