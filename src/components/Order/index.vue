<template>
<!--三个月有订单-->
<!--<div class="orderTops">
<div class="topiso">
<div class="order">订单</div>
<van-icon class="isinmages" name="search"/>
</div>
<div class="isTabs">
<van-tabs v-model="activeName" >
  <van-tab title="全部" name="a">
  <OrderOne></OrderOne>
</van-tab>
  <van-tab title="待销费" name="b"></van-tab>
  <van-tab title="待评价" name="c">jjj</van-tab>
  <van-tab title="退款" name="d"></van-tab>
</van-tabs>
</div>
</div>-->

<!--三个月无订单-->
<!--<div class="noOrder">
<div class="orderImges">
<img class= "inmages" src="../../assets/images/bbe5984003cb26fc7b445a4a15195png.png" alt="">
<div class="istest">近三个月无外卖订单</div>
</div>
</div>-->
<!--未登录-->
<div class="noOrders">
<div class="orderImgess">
<img class= "inmage" src="../../assets/images/weidenglu.png" alt="">
<div class="istests">登录后查看外卖订单</div>
<button class="but">立即登录</button>
</div>
</div>
</template>

<script>
import '../../config/rem.js'
// import OrderOne from '../../pages/Orderone'
export default {
  name: 'Order',
  data() {
    return {
      activeName: 'a',
    };
  },
  components: {
    // OrderOne
  }
}
</script>

<style lang="less" scoped>
//未登录
.noOrders{
  width: 100%;
  height: 100%; 
  display: flex;
  .orderImgess{
    margin: 0 auto;
    margin-top: 20%;
    .inmage{
      widows: 300px;
      height: 300px;
    }
    .istests{
      font-size: 18px;
      padding: 0 20%;
    } 
    .but{
      background-color:#56d176;
      color: #fff;
      width: 130px;
      height: 50px;
      border:  0px #fff;
      margin-top: 15px;
      margin-left: 24%;
 
    }
  }
}
//三个月无订单
.noOrder{
  width: 100%;
  height: 100%;
  display: flex;
  // position: relative;
  .orderImges{ 
    margin:0 auto;
    margin-top:50%;
      .inmages{
      widows: 200px;
      height: 200px;
      }
      .istest{
      font-size: 18px;
      padding: 0 20%;
      }
  }
}

//三个月有订单
.topiso{
  display: flex; 
  justify-content: space-between;
  padding: 0 9px;
  margin-top: 14px;
  box-sizing: border-box;
  .order{
    font-size: 20px;
    font-weight: 800;
  }
};
.isinmages{
  font-size: 25px;
  font-weight:700;
  color: black;
}
.isTabs{
  width:100%;
  position: relative;
}

/deep/.van-tabs__nav,.van-tabs__nav--line{
  height: 20px;
  margin-top: 20px;
 
  background-color: #eee;
}
/deep/.van-tab__text,.van-tab__text--ellipsis{
  font-size: 18px;
  margin-bottom: 12px;
}
/deep/.van-tabs__line{
  margin-top: 5px;
  background-color:skyblue;
}
</style>
