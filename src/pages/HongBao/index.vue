<template>
<div>
  <van-nav-bar
    title="我的优惠"
    left-text=""
    right-text="兑换红包"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  ></van-nav-bar>
  <van-tabs v-model="activeName">
    <van-tab title="红包 1" name="a">
      <RedEnvelope></RedEnvelope>
    </van-tab>
    <van-tab title="店铺红包 2" name="b">
      <ShopRedEnvelope></ShopRedEnvelope>
    </van-tab>
    <van-tab title="抵用券 3" name="c">
      <Voucher></Voucher>
    </van-tab>
  </van-tabs>
</div>
  
</template>

<script>
import RedEnvelope from './RedEnvelope'
import ShopRedEnvelope from './ShopRedEnvelope'
import Voucher from './Voucher'
import { Toast } from 'vant'
export default {
  name: 'HongBao',
  components:{
    RedEnvelope,
    ShopRedEnvelope,
    Voucher
  },
  data() {
    return {
      activeName: 'a',
      user_id:1,
      limit:20,
      offset:0
    }
  },
  mounted(){
    this.getAvailableHongBaoList()
  },
   methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
     getAvailableHongBaoList(){
       console.log(111)
      this.$store.dispatch('getAvailableHongBaoList',this.user_id)
    }
  }
}
</script>

<style lang="less" scoped>
  .van-hairline--bottom{
    background-color: #0090FF;
  }
  /deep/.van-tab{
    background-color: #0090FF;
  }
  .van-tabs--line{
    background-color: #F5F5F5;
  }
  /deep/.van-nav-bar__arrow,
  /deep/.van-nav-bar__title,
  /deep/.van-nav-bar__text,
  /deep/.van-tab__text{
    color: #fff;
  }
</style>
