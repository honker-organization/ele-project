<template>
  <!--选择收货地址页-->
  <div class="selectShippingAddress">
  <!--头部-->
    <van-nav-bar title="选择收货地址" right-text="新增地址"  left-arrow>
     
    </van-nav-bar>

  <!--搜索-->
    <div class="selectShippingAddress-search">
      <div class="selectShippingAddress-search-address">
           <span class="selectShippingAddress-search-AT">南昌</span>
           <van-icon name="arrow-down" />
      </div>
     
     <div class="selectShippingAddress-search-input">
      <input type="text" placeholder="请输入地址"/>
      <van-icon name="search" />
     </div>
    </div>

    <!-- 当前地址 -->
    <div class="currentAddress">
        <div class="selectShippingCurrentAddress-title">
            当前地址
        </div>

        <div class="selectShippingCurrentAddress-content">
            <div class="selectShippingCurrentAddress-address">深圳市宝安区</div>
            <div class="selectShippingCurrentAddress-icon">
                <van-icon name="aim" /> 
                <span>重新定位</span>
            </div>
        </div>
    </div>

     <!-- 收货地址 -->
    <div class="shippingAddress">
        <div class="shippingAddress-title">
            收货地址
        </div>

        <div class="shippingAddress-content">
            <div class="shippingAddress-messsage">
                <div class="shippingAddress-name">
                    黄某某
                </div>
                <div class="shippingAddress-call">先生</div>
                <div class="shippingAddress-phone">19155789878</div>
            </div>

            <div class="address">深圳市宝安区</div>
        </div>

        <div class="shippingAddress-content">
            <div class="shippingAddress-messsage">
                <div class="shippingAddress-name">
                    黄某某
                </div>
                <div class="shippingAddress-call">先生</div>
                <div class="shippingAddress-phone">19155789878</div>
            </div>

            <div class="address">深圳市宝安区</div>
        </div>

        <div class="shippingAddress-content">
            <div class="shippingAddress-messsage">
                <div class="shippingAddress-name">
                    黄某某
                </div>
                <div class="shippingAddress-call">先生</div>
                <div class="shippingAddress-phone">19155789878</div>
            </div>

            <div class="address">深圳市宝安区</div>
        </div>

        <div class="shippingAddress-content">
            <div class="shippingAddress-messsage">
                <div class="shippingAddress-name">
                    黄某某
                </div>
                <div class="shippingAddress-call">先生</div>
                <div class="shippingAddress-phone">19155789878</div>
            </div>

            <div class="address">深圳市宝安区</div>
        </div>
    </div>

    
  </div>
</template>

<script>
import { NavBar,Icon } from 'vant';
export default {
  name: '',
  components:{
    [NavBar.name]:NavBar,
    [Icon.name]:Icon
  }
}
</script>

<style lang="less" scoped>
  /deep/ .van-nav-bar{
    background-color: #2395FF;
    border-bottom: 1px solid #000;
  }

  /deep/ .van-icon::before{
    color:white;
    font-size: 25px;
  }

  /deep/ .van-nav-bar__title{
    color:white;
    font-size: 16px;
  }

  /deep/ .van-nav-bar__text{
    color:white;
    font-size: 14px;
  }


  .selectShippingAddress-search{
    height: 50px;
  
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .selectShippingAddress-search-AT{
    font-size:12px;
  }

  /deep/  [data-v-5e0cc2f9]  .van-icon-arrow-down::before{
    color:#333;
    font-size: 10px;
  }

  .selectShippingAddress-search-input{
    width: 270px;
    height: 30px;
    position: relative;
    right:30px;
  }

  .selectShippingAddress-search-input input{
    width: 100%;
    height: 100%;
    border: none;
    background: #F2F2F2;
    padding-left:30px;
    
  }

  /deep/  [data-v-5e0cc2f9]  .van-icon-search::before{
    position: absolute;
    z-index: 99;
    top:-35px;
    left:10px;
    color:#A0A0A0;
    font-size: 18px;
  }
  

  .selectShippingCurrentAddress-title{
    background: #F2F2F2;
    font-size: 13px;
    height: 40px;
    line-height: 40px;
    padding-left: 18px;
  }

  .selectShippingCurrentAddress-content{
    position: relative;
    display: flex;
   
    height: 35px;
    line-height: 35px;
    color: black;
    font-size: 13px;
    padding-left: 18px;
    font-weight: bold;
  }

  .selectShippingCurrentAddress-icon{
   color:#2395FF;
   font-size: 13px;
  }

  .selectShippingCurrentAddress-icon span{
    position: absolute;
    left:270px;
    top:1.5px;
  }

  /deep/ .van-icon-aim::before{
    position: absolute;
     color:#2395FF;
     font-size: 16px;
     left:150px;
     top:-12px;
  }

  .shippingAddress-title{
    background: #F2F2F2;
    font-size: 13px;
    height: 40px;
    line-height: 40px;
    padding-left: 18px;
  }


  .shippingAddress-content{
    height: 50px;
    border-bottom: 1px #F2F2F2 solid;
  }

  .shippingAddress-messsage{
    display: flex;
    padding-left: 18px;
    padding-top: 8px;
    line-height: 10px;
    height: 15px;
    align-items: center;
  }

  .shippingAddress-name{
    font-size:13px;
    color: block;
    font-weight:bold;
    margin-right: 10px;
  }

  .shippingAddress-call{
    font-size:11px;
    margin-right: 5px;
    padding-top: 3px;
  }

  .shippingAddress-phone{
     padding-top: 3px;
     font-size:11px;
  }

  .address{
    font-size:11px;
    padding-left: 18px;
    padding-top: 5px;
  }
</style>
