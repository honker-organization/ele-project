<template>
  <div class="loginContianer">
    <div class="login">
    <div class="logo">
      <img src="./images/logo.png" alt="">
    </div>
    <div class="content-area">
      <van-form @submit="onSubmit"  ref="Form">
        <van-field
          v-model="username"
          name="username"
          label="手机号"
          :rules="[{ required: true, message: '请填写手机号' },{pattern,message: '请填写正确的手机号'}]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />

        <!-- <van-button  @click="getVerificationCode" 
        :disabled="isShow?false:true">{{isShow?'获取验证码':time+'秒后重发'}}</van-button> -->
        <!-- <input style="width:180px;height:30px;" type="text" placeholder="请输入验证码" v-model="captcha_code"> -->

        <van-field
          v-model="captcha_code"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-button size="small" 
            type="default"
            @click="getVerificationCode"
            :disabled="isShow?false:true">{{isShow?'获取验证码':time+'秒后重发'}}</van-button>
          </template>
        </van-field>
         <img :src="verificationCode" alt="">
        <div class="MessageLogin-15xD9">
          新用户登录即自动注册，并表示已同意
          <a href="#">《用户服务协议》</a>
          和
          <a href="#">《隐私权政策》</a>
        </div>
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" @click.native="login">
              登录
            </van-button>
        </div>
      </van-form>
    </div>
  </div>
  </div>
  
  
</template>

<script>
import {mapMutations, mapState} from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      captcha_code:'',
      password: '',
      pattern:/^1[3-9]\d{9}$/,
      time:5,
      isShow:true,
    };
  },
  mounted(){
    // console.log(this.$bus)
    // this.getVerificationCode()
  },  
  //组件销毁后将验证码设置为空
  destroyed(){
    this.clearVerificationCode()
  },
  methods: {
    onSubmit(values) {
      // console.log('submit', values);
    },
    //点击获取验证码事件
     getVerificationCode(){
      this.$refs.Form.validate('username').then(async res => {
        // console.log(this.username)
        // 请求验证码
          this.$store.dispatch('getVerificationCode')
        
        let show = setInterval(() => {
          this.isShow = false
          this.time -= 1
          if(this.time<=0){
            clearInterval(show)
            this.time = 5
            this.isShow = true
            this.clearVerificationCode()
          }
        },1000)
      })
    },
    ...mapMutations(['clearVerificationCode']),
    //登录
     login(){
        // let {username,password,captcha_code} = this
        // console.log('123')
        // let userInfo = {username,password,captcha_code}
        // console.log(userInfo);
        // await this.$store.dispatch('userLogin',userInfo)
        localStorage.setItem('USERNAME_KEY',JSON.stringify(this.username))
        this.$router.push('/personal')
    }
  },
  computed: {
    ...mapState({
      verificationCode:state => state.login.verificationCode
    })
  },
}
</script>

<style lang="less" scoped>
.loginContianer{
  background-color: #F7F8FA;
  width: 375px;
  height: 667px;
  .login{
    width: 300px;
    height: 38px;
    padding-top: 40px;
    margin: auto; 
    .MessageLogin-15xD9{
      margin-top:20px;
      font-size: 12px;
      color: #999;
      a{
        color: #00acf0
      }
    }
    img{
      width: 138px;
      height: 39px;
      transform: translateX(50%);
    }
    .primary-verification-code{
      margin-left:40px ;
    }
  }
}
  
</style>
