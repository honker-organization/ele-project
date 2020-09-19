<template>
<div class="isOrder">
<div class="isOrderone">
    <div class="orderForm">
    <img class="imagess" src="../../assets/images/naichadian.webp" alt="">
    <div class="istest">蜜雪冰城·冰淇淋与茶<span class="isspan">></span></div> 
    <div class="istesttou">已送达</div> 
    </div>
    <div class="pinknam">
    <img class="image" src="../../assets/images/naicha.webp" alt="">
    <div class="istexts">霸霸红豆奶茶</div>
    <div class="moneys">
    <div class="money">￥16</div>
    <div class="hao">共2件</div>
    </div>
  </div>
</div>
<div class="isOrderone">
    <div class="orderForm">
    <img class="imagess" src="../../assets/images/naichadian.webp" alt="">
    <div class="istest">蜜雪冰城·冰淇淋与茶<span class="isspan">></span></div> 
    <div class="istesttou">已送达</div> 
    </div>
    <div class="pinknam">
    <img class="image" src="../../assets/images/naicha.webp" alt="">
    <div class="istexts">霸霸红豆奶茶</div>
    <div class="moneys">
    <div class="money">￥16</div>
    <div class="hao">共2件</div>
    </div>
  </div>
</div>
<div class="isOrderone">
    <div class="orderForm">
    <img class="imagess" src="../../assets/images/naichadian.webp" alt="">
    <div class="istest">蜜雪冰城·冰淇淋与茶<span class="isspan">></span></div> 
    <div class="istesttou">已送达</div> 
    </div>
    <div class="pinknam">
    <img class="image" src="../../assets/images/naicha.webp" alt="">
    <div class="istexts">霸霸红豆奶茶</div>
    <div class="moneys">
    <div class="money">￥16</div>
    <div class="hao">共2件</div>
    </div>
  </div>
</div>
 <div class="isdiv">仅显示最近三个月的订单</div>
</div>

</template>

<script>
export default {
  name: 'OrderOne',
}
</script>

<style scoped lang="less">

.isOrderone{
  width:364px;
  height:100%;
  background-color: #fff;
  margin: 0 5px;
  margin-top: 20px;
  border-radius: 5px;
  .orderForm {
    display: flex;
    .imagess{
      width: 45px;
      height: 45px;
      margin: 8px;
    }
  }
}
.istest{
  font-size: 15px;
  font-weight: 800;
  margin-top: 10px;
  .isspan{
    font-weight: 400;
    font-size: 20px;
    color: #948383;
    margin-left: 4px;
  }
}
.istesttou{
  font-size: 8px;
  color: #948383;
  margin-top: 14px;
  margin-left: 100px;
}
.pinknam{
  display: flex;
  .image{
    width: 70px;
    height: 70px;
    margin-left: 65px;
    margin-bottom: 9px;
  }
.istexts{
  font-size: 14px;
  margin-top: 28px;
}
.moneys{
  margin-top: 20px;
  margin-left: 94px;
  .money{
    font-size: 16px;
    font-weight: 700;
  }
  .hao{
    color: #948383;
    font-size: 13px;
  }
}
}

.isdiv{
  margin:20px 32%;
  font-size: 12px;
  color: #826e6e;
}



</style>
