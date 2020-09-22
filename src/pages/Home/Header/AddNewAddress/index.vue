<template>
  <div class="container">
    <div class="header">
      <van-icon name="arrow-left" size="30px" color="#fff" @click="$router.back()" />
      <div class="word">添加地址</div>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="联系人"
        placeholder="姓名"
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
     
      <van-field
        v-model="phone"
        name="电话"
        label="电话"
        placeholder="手机号码"
        :rules="[{ required: true, message: '请填写手机号码' }]"
      />
      <van-field
        v-model="address"
        name="地址"
        label="地址"
        placeholder="小区/写字楼/学校等"
        :rules="[{ required: true, message: '请填写地址' }]"
      />
      <van-field
        v-model="homeHouse"
        name="门牌号"
        label="门牌号"
        placeholder="10号楼5层501室222"
        :rules="[{ required: true, message: '请填写门牌号' }]"
      />
       <div class="sex">
        <button :class="call === 1 ? 'active' : ''" @touchstart='hangdleCall(1)'>先生</button>
        <button :class="call === 2 ? 'active' : ''" @touchstart='hangdleCall(2)'>女士</button>
      </div>

      <div style="margin: 16px;" >
        <button type="submit" class="sub" @touchstart="hangdleSubmit">确定</button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {reqUpadteShippingAddress} from '@/api'
export default {
  data() {
    return {
      username: '', // 用户名
      phone: '', // 手机号
      address: '', // 地址
      homeHouse: '', // 门牌号
      call:1,//称呼
      id:"",
    }
  },
  mounted(){
    this.upadteAddress()
  },
  methods: {
    // 更新地址
    upadteAddress(){
      
        
        if( this.$route.query.myAddress){

             const addressData = this.$route.query.myAddress

            console.log(JSON.parse(addressData))
            
            
      
            let  {name, id, sex, address, phone, homeHouse} = JSON.parse(addressData)
            this.username = name
            this.phone = phone
            this.call = sex
            this.homeHouse = homeHouse
            this.id = id
            this.address = address
        }
       
       
    },

    // 切换称呼事件回调
    hangdleCall(call){
      // console.log(call)
      this.call = call
    },

    // 添加地址
   async hangdleSubmit(){

      let id =  Date.now()

      let {username,phone,address,call,homeHouse} = this
      // console.log(username,phone,address,homeHouse,call)
      const name = username
      const sex = call
    
      let res = await reqUpadteShippingAddress({name,id,sex,address,phone,homeHouse})

      console.log(res)
      
      // Toast.success('添加地址成功');
     
      this.$router.push('/selectShippingAddress?address=true')
    },
    onSubmit() {},
  },
}
</script>

<style scoped lang='less'>
/deep/.van-icon-arrow-left {
  height: 44px;
  line-height: 44px;
}
.header {
  height: 44px;
  background: #0093ff;
  display: flex;
  text-align: center;
  align-items: center;
  // justify-content: space-around;

  .word {
    color: #fff;
    font-size: 18px;
    margin-left: 120px;
  }
}
/deep/.van-field__label {
  font-weight: bold;
  font-size: 16px;
  color: #333;
}

.sex {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  /deep/button {
    width: 80px;
    height: 30px;
    margin-right: 10px;
    background: none;
    border:0;
    border: 1px solid #333;

    &.active{
      background: #1989FA;
       border:0;
       color: #fff;
    }
  }

  
}

.sub{
    width: 100%;
    height: 40px;
     background: #1989FA;
    border:0;
    color: #fff;
    font-size: 15px;
  }
</style>