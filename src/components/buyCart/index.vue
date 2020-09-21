<template>
  <div class="buyCartContainer">
    <div class="cartContainer">
        <div class="cartInner">
        
           <van-icon name="cart" />
        </div>
    </div>

    <div class="goods">未选购商品</div>

    <div class="price">￥15元起送</div>

   
  </div>
</template>

<script>
import {Icon} from 'vant'
export default {
  name: '',
  components:{
    [Icon.name]:Icon
  }
}
</script>

<style lang="less" scoped>
.buyCartContainer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: #535356;
  display: flex;

  .cartContainer{
    position: relative;
    width: 50px;
    height: 50px;
    background: #444444;
    margin-left: 20px;
    margin-top: -20px;
    border-radius: 50%;
  }

  .cartInner{
    position: absolute;
    width: 30px;
    height: 30px;
    background: #363636;
    border-radius: 50%;
    left: 10px;
    top: 10px;
  }

  /deep/ .van-icon-cart::before{
    position: absolute;
    left: 2px;
    top:-8px;
    color: #5F5F63;
    font-size: 24px;
  }

  .goods{
    color: #818181;
    font-size: 14px;
    margin-left: 20px;
    line-height: 45px;
  }

  .price{
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    margin-left: 30%;
    line-height: 45px;
  }
}
</style>
