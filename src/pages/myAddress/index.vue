<template>
  <div class="myAddress">
    <header class="myAddress_header">
      <!--<div class="myAddress_headerContainer">
        <div class="myAddress_headerImage">
          
        </div> 
            <h1 class="myAddress_headerTitle">我的地址</h1> 
      </div> -->
       <!--头部-->
      <van-nav-bar title="我的地址"   left-arrow @click-left = "$router.push('/home')" @click-right = "$router.push('/addNewAddress')">
      
      </van-nav-bar>
    </header>
    
     <!-- 我的地址 -->
    <div class="shippingAddress">
        <div class="shippingAddress-title">
            收货地址
        </div>

        <div class="shippingAddress-content" v-for="(myAddress, index) in selectShippingAddressList" :key="myAddress.id">
            <div class="shippingAddress-messsage">
                <div class="shippingAddress-name">
                   {{myAddress.name}}
                </div>
                <div class="shippingAddress-call">{{myAddress.sex === 2 ? '女士' : '先生'}}</div>
                <div class="shippingAddress-phone">{{myAddress.phone}}</div>
            </div>

            <div class="address">{{myAddress.address}}</div>
            <van-icon name="records" @touchend="toUpdateAddress(myAddress)"/>
            <van-icon name="delete" @touchend="deleteMyaddress(myAddress.id)"/>
        </div>

        
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import {reqDeleteMyaddress} from '@/api'
export default {
  name: '',
  mounted(){

    this.getSelectShippingAddressList()
  
  },
  methods:{
    getSelectShippingAddressList(){
      this.$store.dispatch('getSelectShippingAddressList')
    },

    // 删除我的地址
    async deleteMyaddress(id){
      // console.log(event)
       await this.$store.dispatch('deleteMyaddress',id)

      this.getSelectShippingAddressList()

      // console.log(id)
      // let result = await reqDeleteMyaddress(id)
      // console.log(result)
    },

    // 更新我的地址
   toUpdateAddress(myAddress){
     let address = JSON.stringify(myAddress)
      this.$router.push('/addNewAddress?myAddress=' + address)
   }

  },
  computed:{
    ...mapState({selectShippingAddressList:state => state.selectShippingAddress.selectShippingAddressList}),
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
    font-size: 18px;
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
    position: relative;
  }

  .selectShippingAddress-search-input input{
    width: 100%;
    height: 100%;
    border: none;
    background: #F2F2F2;
    padding-left:30px;
    
  }

  .search{
    position: absolute;
    width:299px;
    background: white;
    top:87px;
    left:57px;
    z-index: 99;
    .keyword{
      width: 100%;
      height: 40px;
      background: white;
      font-size: 16px;
      font-weight: bold;
      padding-left: 20px;
      padding-top: 10px;
    }

    .keywordChild{
      width: 100%;
      background: white;
      padding: 4px 0;
      font-size: 12px;
      color: #999;
    }
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
    position: relative;
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
    color: black;
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

  /deep/ [data-v-6be48e57] .van-icon-records::before{
    color: #999;
    position: absolute;
    top:-41px;
    left:290px
  }

  /deep/ [data-v-6be48e57] .van-icon-delete::before{
    color: #999;
    position: absolute;
    top:-40px;
    left:330px
  }
</style>
