<template>
  <div class="personal">
    <div class="header">
      <div class="header-center">
        <div class="avatar">
          <img src="../public/images/touxiang.webp" alt="">
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
    </div>
    <div class="to">
      <div class="leftBox"><p>0个</p>红包</div>
      <div class="rightBox"><p>0个</p>金币</div>
    </div>
    <div class="details-column">
      <ul class="address">
        <li>
          <van-icon class="manager" name="manager-o" />
          <p>我的地址</p>
          <van-icon class="arrow" name="arrow" />
        </li>
      </ul>
      <ul class="gold">
        <li>
          <van-icon class="manager" name="manager-o" />
          <p>我的地址</p>
          <van-icon class="arrow" name="arrow" />
        </li>
        <li>
          <van-icon class="manager" name="manager-o" />
          <p>我的地址</p>
          <van-icon class="arrow" name="arrow" />
        </li>
      </ul>
      <ul class="customer-service">
        <li>
          <van-icon class="manager" name="manager-o" />
          <p>我的地址</p>
          <van-icon class="arrow" name="arrow" />
        </li>
        <li>
          <van-icon class="manager" name="manager-o" />
          <p>我的地址</p>
          <van-icon class="arrow" name="arrow" />
        </li>
        <li>
          <van-icon class="manager" name="manager-o" />
          <p>我的地址</p>
          <van-icon class="arrow" name="arrow" />
        </li>
      </ul>
    </div>
    <div class="privacy">隐私政策</div>
    <div class="tabbar">
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
  </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style lang="less" scoped>
  .personal{
    position: relative;
    width: 100%;
    height: 1334px;
    background-color: #F5F5F5;
    .header{
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #008FFF;
      .header-center{
        width: 690px;
        height: 120px;
        display: flex;
        justify-content: space-between;
        align-items: center;
          .avatar{
          width: 120px;
          height: 120px;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
      .personal-information{
        width: 510px;
        height: 95px;
        color: #fff;
        .username{
          font-size: 40px;
          font-weight: 600;
        }
        .phone{
            margin-top:10px;
          }
      }
      .arrow{
        color: #fff;
      }
    }
    .to{
      width: 100%;
      height: 168px;
      background-color: #fff;
      display: flex;
      margin-bottom: 20px;
      .leftBox, .rightBox{
        border-right: 1px solid #ddd;
        width: 50%;
        font-size: 40px;
        text-align: center;
        margin-top: 30px;
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
    .details-column{
      .address{
        margin-bottom: 40px;
        li{
          width: 100%;
          height: 90px;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .manager{
            padding-left: 10px;
            font-size: 40px;
            color: blue;
          }
          p{
            text-indent:-300px;
            font-size: 30px;
            color: #333;
          }
          .arrow{
            padding-right: 30px;
          }
        }
      }
      .gold{
        margin-bottom: 40px;
        li{
          width: 100%;
          height: 90px;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .manager{
            padding-left: 10px;
            font-size: 40px;
            color: blue;
          }
          p{
            text-indent:-300px;
            font-size: 30px;
            color: #333;
          }
          .arrow{
            padding-right: 30px;
          }
        }
      }
      .customer-service{
        margin-bottom: 40px;
        li{
          width: 100%;
          height: 90px;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .manager{
            padding-left: 10px;
            font-size: 40px;
            color: blue;
          }
          p{
            text-indent:-300px;
            font-size: 30px;
            color: #333;
          }
          .arrow{
            padding-right: 30px;
          }
        }
      }
    }
    .privacy{
      color: #4da6f0;
      font-size: 30px;
      text-align: center;
      padding-top: 30px;
    }
    .tabbar{
      position: absolute;
      width: 100%;
      height: 100px;
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
          font-size: 40px;
          margin: auto;
        }
      }
    }
  }
</style>

