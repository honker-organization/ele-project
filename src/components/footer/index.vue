<template>
  <van-tabbar route placeholder>
    <van-tabbar-item replace to="/home" icon="home-o">
      首页
    </van-tabbar-item>
    <van-tabbar-item replace to="/supermarket" icon="like-o">
      超市
    </van-tabbar-item>
    <van-tabbar-item replace to="/order" icon="description">
      订单
    </van-tabbar-item>
    <van-tabbar-item replace to="/personal" icon="manager-o">
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'Footer',
  data(){
    return {
      // active:0
    }
  }
}
</script>

<style lang="less" scoped>

</style>
