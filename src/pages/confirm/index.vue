<template>
  <div class="root">
    <div class="header">
      <van-icon name="arrow-left" />
      <span class="title">确认订单</span>
    </div>
    <div class="checkout-viewbody">
      <div class="main">
        <a href="#">
          <div class="cart-address">
            <div class="cart-item">
              <p>订单配送至</p>
              <p>选择收货地址</p>
            </div>
          </div>
        </a>
      </div>
      <div class="footer">

      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name: '',
}
</script>

<style lang="less" scoped>
 .header{
   width: 100%;
   height: 44px;
   background-color: #008CFF;
   color: #fff;
   font-size: 18px;
   font-weight: bold;
   display: flex;
   align-items: center;
   .title{
    margin: auto;
    text-indent: -20px;
   }
 }
 .checkout-viewbody{
   width: 100%;
   height: 939px;
   position: relative;
   .main{
     width: 362px;
     height: 885px;
     border: red 1px solid;
     margin: 0 auto;
   }
   .cart-address{
     height: 86px;
   }
   .footer{
     width: 375px;
     height: 44px;
     border: 1px solid #bfa;
     position: absolute;
     bottom: 0;
   }
 }
 
</style>