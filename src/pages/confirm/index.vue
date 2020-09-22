<template>
  <div class="root">
    <div class="header">
      <van-icon name="arrow-left" />
      <span class="title">确认订单</span>
    </div>
    <div class="checkout-viewbody" v-if="confirmOrder[0]">
      <div class="main">
        <!-- <a href="#"> -->
          <div class="cart-address">
            <div class="cart-item">
              <p>订单配送至 </p>
              <p>选择收货地址</p>
            </div>
          </div>
          <div class="key-card">
            <p>送到时间<span>选择预定送达时间</span></p>
            <p>支付方式<span>在线支付</span></p>
          </div>
          <ul class="cart-group-iChki">
            <h3>
              <span>{{confirmOrder[0].shopName}}</span>
              <span>{{confirmOrder[0].address}}</span>
            </h3>
            <li>
              <p>{{confirmOrder[0].order}} <span>*{{confirmOrder[0].numberOfCopies}}</span> <span style="text-decoration:line-through">￥{{confirmOrder[0].orderTotalPrice*confirmOrder[0].numberOfCopies}}</span> <span>￥{{confirmOrder[0].orderActualPrice*confirmOrder[0].numberOfCopies}}</span></p>      
            </li>
            <li>
              <p>包装费<span>￥{{confirmOrder[0].packagingFee}}</span></p>
            </li>
            <li>
              <p>配送费<span style="text-decoration:line-through">￥{{confirmOrder[0].deliveryFee}}</span><span>￥{{confirmOrder[0].actualDeliveryFee}}</span></p>
            </li>
            <li>
              <p>首次光顾立减<span>- ￥{{confirmOrder[0].firstReduction}}</span></p>
            </li>
            <li>
              商品折扣与满减优惠不同享
            </li>
            <li>
              <p>红包/抵用券 &nbsp;
                <span>{{confirmOrder[0].availableRedEnvelopes}}个可用> 
                  <button v-if="confirmOrder[0].actualPrice" @click="useAvailableRedEnvelopes">使用红包</button>
                  <button v-else @click="noUseAvailableRedEnvelopes" >不使用红包</button>
                </span>
              </p>
            </li>
            <li>
              <p>优惠说明
                <span>
                  小计￥{{confirmOrder[0].actualPrice || confirmOrder[0].useAvailableRedEnvelopesActualPrice}}
                </span>
              </p>
            </li>
          </ul>
        <!-- </a> -->
      </div>
      <div class="footer">
        <button>去支付</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { mapGetters, mapState } from 'vuex';
export default {
  name: 'confirm',
  data() {
    return {
     msg:''
    }
  },
  mounted() {
    // console.log(111)
    this.getConfirmOrderInfo()
  },
  methods:{
    noUseAvailableRedEnvelopes(){
      this.confirmOrder[0].availableRedEnvelopes += 1
      this.confirmOrder[0].actualPrice = this.msg
      this.msg = this.confirmOrder[0].useAvailableRedEnvelopesActualPrice
    },
    useAvailableRedEnvelopes(){
      if(this.confirmOrder[0].availableRedEnvelopes > 0){
        this.confirmOrder[0].availableRedEnvelopes -= 1
        this.msg = this.confirmOrder[0].actualPrice
        this.confirmOrder[0].actualPrice = ''
      }
    },
     getConfirmOrderInfo(){
       this.$store.dispatch('getConfirmOrderInfo')
    }
  },
  computed: {
    ...mapGetters(['confirmOrder'])
  },
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