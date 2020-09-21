<template>
  <div>
    <van-icon name="arrow-left" size="30px" color="#666" />
    <van-search show-action placeholder="请输入商家、商品名称">
      <template #action>
        <div>搜索</div>
      </template>
    </van-search>
    <div class="hot">热门搜索</div>
    <div class="list">鲜花</div>
  </div>
</template>

<script>
export default {
  name: '',
}
</script>

<style scoped lang="less">
.hot {
  font-family: poison, PingFang SC, Helvetica Neue, Arial, sans-serif;
  font-size: 16px;
  color: #666;
  padding: 10px 20px;
}
.list {
  width: 60px;
  height: 30px;
  background: #f7f8fa;
  line-height: 30px;
  text-align: center;
  margin: 10px 10px;
}
</style>
