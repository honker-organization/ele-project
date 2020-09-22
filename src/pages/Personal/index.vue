<template>
  <div class="personal">
    <!-- 登录时头部 -->
    <!-- <div class="header">
      <div class="header-center">
        <div class="avatar">
          <img src="./images/touxiang.webp" alt="">
        </div>
        <div class="personal-information">
          <div class="username">334a13c85</div>
          <div class="phone">
            <van-icon name="phone-o" />
            137****3909
          </div>
        </div>
        <van-icon class="arrow" name="arrow" />
      </div>
    </div> -->

    <!-- 未登录时头部 -->
    <div class="header">
      <router-link to="/login">
        <div class="header-center">
        <div class="avatar">
          <img src="./images/1.png" alt="">
        </div>
        <div class="personal-information">
          <div class="username">登录/注册</div>
          <div class="phone">
            <van-icon name="phone-o" />
            登录后享受更多特权
          </div>
        </div>
        <van-icon class="arrow" name="arrow" />
      </div>
      </router-link>
    </div>
    <!-- 红包金币 -->
    <div class="to">
      <div class="leftBox"><p>0个</p>红包</div>
      <div class="rightBox"><p>0个</p>金币</div>
    </div>
    <!-- 内容区 -->
    <div class="details-column">
      <ul class="address">
        <li @touchend="$router.push('/myAddress')">
          <van-icon class="manager" name="manager-o" />
          <p >我的地址</p>
          <van-icon class="arrow" name="arrow" />
        </li>
      </ul>
      <ul class="gold">
        <li>
          <van-icon class="manager" name="diamond" />
          <p>金币商城</p>
          <van-icon class="arrow" name="arrow" />
        </li>
        <li>
          <van-icon class="manager" name="point-gift" />
          <p>分享拿20元现金</p>
          <van-icon class="arrow" name="arrow" />
        </li>
      </ul>
      <ul class="customer-service">
        <li>
          <van-icon class="manager" name="service" />
          <p>我的客服</p>
          <van-icon class="arrow" name="arrow" />
        </li>
        <li>
          <van-icon class="manager" name="wap-home" />
          <p>下载饿了么APP</p>
          <van-icon class="arrow" name="arrow" />
        </li>
        <li>
          <van-icon class="manager" name="shop-collect" />
          <p>规则中心</p>
          <van-icon class="arrow" name="arrow" />
        </li>
      </ul>
    </div>
    <div class="privacy">隐私政策</div>
    <!-- 底部导航 -->
   <!-- <div class="tabbar">
      <div class="tabbar-switch">
        <van-icon class="manager" name="manager-o" />
        <div class="item active">首页</div>
      </div>
      <div class="tabbar-switch">
        <van-icon class="manager" name="manager-o" />
        <div class="item">发现</div>
      </div>
      <div class="tabbar-switch">
        <van-icon class="manager" name="manager-o" />
        <div class="item">订单</div>
      </div>
      <div class="tabbar-switch">
        <van-icon class="manager" name="manager-o" />
        <div class="item">我的</div>
      </div>
  </div>-->
  </div>
</template>

<script>
  export default {
    name: 'Personal',
    data() {
      return {
        msg:{}
      }
    },
    mounted(){
      // console.log(this.$bus)
      this.$bus.$on('showUserInfo', userInfo => this.msg = userInfo)
    },
    
  }
</script>

<style lang="less" scoped>
  .personal{
    position: relative;
    width: 100%;
    height: 667px;
    background-color: #F5F5F5;
    //  头部
    .header{
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #008FFF;
      .header-center{
        width: 345px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
          .avatar{
          width: 60px;
          height: 60px;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
      .personal-information{
        width: 255px;
        height: 47.5px;
        color: #fff;
        .username{
          font-size: 20px;
          font-weight: 600;
        }
        .phone{
            margin-top:5px;
          }
      }
      .arrow{
        color: #fff;
      }
    }
    //  红包金币
    .to{
      width: 100%;
      height: 84px;
      background-color: #fff;
      display: flex;
      margin-bottom: 10px;
      .leftBox, .rightBox{
        border-right: 1px solid #ddd;
        width: 50%;
        font-size: 20px;
        text-align: center;
        margin-top: 15px;
      }
      .leftBox{
        p{
          color: red;
          font-weight: 800;
        }
      }
      .rightBox{
        p{
          color: #6AC20B;
          font-weight: 800;
        }
      }
    }
    // 内容区
    .details-column{
      .address{
        margin-bottom: 20px;
        li{
          width: 100%;
          height: 45px;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .manager{
            padding-left: 5px;
            font-size: 20px;
            color: #2395FF;
          }
          p{
            text-indent:-150px;
            font-size: 15px;
            color: #333;
          }
          .arrow{
            padding-right: 15px;
          }
        }
      }
      .gold{
        margin-bottom: 20px;
        li{
          width: 100%;
          height: 45px;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .manager{
            padding-left: 5px;
            font-size: 20px;
            color: #2395FF;
          }
          p{
            text-indent:-150px;
            font-size: 15px;
            color: #333;
          }
          .arrow{
            padding-right: 15px;
          }
        }
      }
      .customer-service{
        margin-bottom: 20px;
        li{
          width: 100%;
          height: 45px;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .manager{
            padding-left: 5px;
            font-size: 20px;
            color: #2395FF;
          }
          p{
            text-indent:-150px;
            font-size: 15px;
            color: #333;
          }
          .arrow{
            padding-right: 15px;
          }
        }
      }
    }
    .privacy{
      color: #4da6f0;
      font-size: 15px;
      text-align: center;
      padding-top: 15px;
    }
    // 底部导航
    .tabbar{
      position: absolute;
      width: 100%;
      height: 50px;
      bottom: 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #fff;
      &-switch{
        display: flex;
        flex-direction: column;
        justify-content:space-evenly;
        .manager{
          font-size: 20px;
          margin: auto;
        }
      }
    }
  }
</style>

