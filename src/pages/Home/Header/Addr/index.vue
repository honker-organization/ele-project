<template>
  <div class="wrap">
    <div class="addNameWrap" @click="$router.push('/province')">
      <div class="letf">香港...</div>
      <van-icon name="arrow-down" class="arrow-down" />
    </div>
    <van-search placeholder="请输入地址" />
  </div>
</template>

<script>
export default {
  name: '',
}
</script>
<style lang='less' scoped>
/deep/.van-search__content {
  padding: 0 50px;
}
.wrap {
  display: flex;
  justify-content: space-around;
}
.addNameWrap {
  display: flex;
  height: 55px;
  line-height: 55px;
}
.arrow-down {
  line-height: 55px;
}
</style>

