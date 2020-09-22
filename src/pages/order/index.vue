<template>
  <div>
    <div class="orderContainer" v-for="(shopItem, index) in shopList" :key="index">
      <div class="order-card">
        <div class="cardImg">
          <img :src="shopItem.image_path" />
        </div>

        <div class="cardContent">
          <div class="cardTitle">
            <span>{{shopItem.name}}</span>
          </div>

          <div class="old">商家</div>
          <div class="cardTime">2020-09-23 {{shopItem.next_business_time}}</div>

          <div class="cardMessage">
            <div class="radio">
              <input class="rad" type="radio"  :checked="shopItem.checked" @click="checkedOne(index)" />
            </div>
            <div class="goods">{{shopItem.support_tags[0].text}}等三件商品</div>
            <div class="cardPrice">￥{{shopItem.piecewise_agent_fee.rules[0].price}}</div>

          </div>

          <!-- <button class="btn">再来一单</button> -->
          <van-stepper  theme="round" button-size="22" v-model='shopItem.value' disable-input @change="onChange($event,shopItem.id)"/> 
         <!--<div class="num">
            <p class="btn-update"> - </p>
            <p>1</p>
            <p class="btn-update"> + </p>
         </div>
         -->
        </div>
      </div>
    </div>

    <div class="bottom" >
      <van-checkbox v-model="allChecked"></van-checkbox>
      <span class="checked">已选{{count}}件</span>
      <span class="line">/</span>
      <span class="all">总共{{shopList.length}}件</span>
      <span class="price">总价￥{{allPrice}}元</span> 
      <button class="pay">去结算</button>
    </div>
  </div>
</template>

<script>
import OrderCard from "@/components/orderCard";
import cxh from "@/api";
import setImagePath from "@/utils/imagePath";
export default {
  name: "",
  data() {
    return {
      shopList: [],
      checkShop: [],
      value:1,
      currentIndex:-1,
      num:1
    };
  },
  async mounted() {
    // console.log(cxh)
    const result = await cxh.cxh.reqShopList();
    // console.log(result)
    this.shopList = setImagePath(result.data.items);
   
  },
  components: {
    OrderCard
  },
  methods: {
    // 单选
    checkedOne(index) {
      this.$set(this.shopList[index],'checked',!this.shopList[index].checked)
      //  this.shopList[index].checked = !this.shopList[index].checked;

    },

    // 商品数量的增减
    onChange(options,id){

      this.shopList.forEach(item => {

        if(item.id === id){

            item.value = options

            console.log(item.value)

            
        }
      })

    
    }
  },

  computed: {
    // 统计已选商品数量
    count() {
      // console.log(this.shopList.filter(item => item.checked).length);
      // return this.shopList.filter(item => item.checked).length;

      let result = this.shopList.filter(item => item.checked)
      console.log(result.length)

      this.checkShop = result
      return result.length
    },

    //  计算总价
    allPrice() {
      return this.checkShop.reduce((pre, item) => {
        return (pre += item.piecewise_agent_fee.rules[0].price * item.value);
      }, 0);
    },

    // //全选功能
    allChecked: {
      get() {
        return this.shopList.every(item => item.checked);
      },

      set(checked) {
        console.log(checked);
        this.shopList.forEach(item => (item.checked = checked));
      }
    }
  }
};
</script>

<style lang="less" scoped>
.orderContainer {
  margin-bottom: 60px;
  position: relative;

   /deep/ .van-stepper--round .van-stepper__minus {

    color: #039bf3;
    border: 2px solid #2395ff;
   }

   /deep/ .van-stepper--round .van-stepper__plus{
         background-color:  #2395ff;
   }


  /deep/ .van-stepper{
    position: absolute;
    top:110px;
    right: 20px;
  
  }

  .num{
    width: 175px;
    height: 39px;
    font-size: 39px;
    text-align: center;
    display: flex;
    position: absolute;
    right: -85px;
  }

  .btn-update{
    width:20px;
    height:20px;
    line-height: 30px;
    text-align: center;
    font-size: 35px;
    background: #2395ff;
    border-radius: 50%;
    color:white
  }
}
.order-card {
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid #f2f2f2;
  height: 150px;
  margin-bottom: -60px;
}
.order-card .cardImg {
  width: 40px;
  height: 40px;
  margin-top: 15px;
  margin-left: 12px;
  img {
    width: 30px;
    height: 30px;
  }
}

.cardContent {
  height: 150px;
  width: 400px;
  margin-left: 5px;
  position: relative;
  .cardTitle {
    font-size: 14px;
    margin-top: 15px;
    &:first-child {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: 140px;
    }
  }

  .old {
    position: absolute;
    top: 16px;
    right: 20px;
  }
}

.cardTime {
  color: #acacac;
  font-size: 10px;
  line-height: 15px;
}

.cardMessage {
  display: flex;
  margin-top: 30px;
  position: relative;
  .goods {
    color: #666;
    font-size: 12px;
  }

  .cardPrice {
    position: absolute;
    top: 0px;
    right: 20px;
    color: black;
    font-weight: bold;
  }
}
.btn {
  position: absolute;
  bottom: 10px;
  right: 20px;
  height: 28px;
  width: 60px;
  border: 1px solid #2395ff;
  color: #2395ff;
  background: none;
}

.radio {
  margin-right: 15px;
  margin-top: -3px;
  // background: #2395ff;
  width: 20px;
  border-radius: 50%;
   .rad{
     position: absolute;
     top:0.5px;
     left: 3px;
    background: #2395ff;
    color: white;
  }
}

.bottom {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 55px;
  background: #333;
  box-sizing: border-box;
  font-size: 14px;
  .checked {
    position: absolute;
    color: white;
    left: 50px;
  }

  .line {
    position: absolute;
    color: white;
    left: 105px;
    top: 12px;
    font-size: 26px;
  }

  .all {
    position: absolute;
    color: white;
    left: 120px;
  }

  .price {
    position: absolute;
    color: #1989FA;
    // color: white;
    font-weight: bold;
    font-size: 17px;
    line-height: 16px;
    left: 180px;
  }

  .pay{
    position: absolute;
    color: white;
    background: #1989FA;
    font-weight: bold;
    font-size: 17px;
    line-height: 16px;
    right:0px;
    top:0;
    width: 90px;
    height: 50px;
    border: none;
  }
}

/deep/ .bottom .van-checkbox__icon--checked .van-icon {
  position: absolute;
  top: 18px;
  left: 20px;
}

/deep/ .bottom .van-checkbox__icon--round .van-icon {
  position: absolute;
  top: 18px;
  left: 20px;
}
</style>
