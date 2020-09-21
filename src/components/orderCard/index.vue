<template>
  <div class="orderContainer">
     <div class="order-card">
        <div class="cardImg">
            <img src="https://cube.elemecdn.com/0/a0/dca6909f4f3acc7a805fa906759ffjpeg.jpeg?x-oss-process=image/format,webp/resize,w_64,h_64,m_fixed">
        </div>

        <div class="cardContent">
          <div class="cardTitle">
            <span>日月永和传统快餐(横岗店)</span>
           
          </div>

           <div class="old">已送达</div>
          <div class="cardTime">
            2020-06-23 18:39
          </div>

          <div class="cardMessage">
            <div class="goods">
              三丝炒面等三件商品
            </div>
            <div class="cardPrice">
              ￥46.90
            </div>
          </div>

          <button class="btn">再来一单</button>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: '',
}
</script>

<style lang="less" scoped>
  .order-card{
    display: flex;
    margin-top: 10px;
    border-bottom: 1px solid #f2f2f2 ;
    height: 150px;
  }
  .order-card .cardImg{
    width: 40px;
    height: 40px;
    margin-top: 15px;
    margin-left: 12px;
    img{
      width: 30px;
      height:30px
      
    }

    
  }

  .cardContent{
   height: 150px;
    width: 400px;
      margin-left: 5px;
      position: relative;
      .cardTitle{
        font-size: 14px;
        margin-top: 15px;
        &:first-child{
          text-overflow:ellipsis;
          white-space: nowrap;
          overflow: hidden;
          width: 140px;
        }

      }

      .old{
        position: absolute;
        top:16px;
        right: 20px;
      }
    }

    .cardTime{
      color: #ACACAC;
      font-size: 10px;
      line-height: 15px;
    }

    .cardMessage{
      display: flex;
      margin-top: 30px;
      position: relative;
      .goods{
        color: #666;
        font-size:12px
      }

      .cardPrice{
        position: absolute;
        top:0px;
        right: 20px;
        color: black;
        font-weight: bold;
      }
    }
    .btn{
      position: absolute;
      bottom:10px;
       right: 20px;
      height: 28px;
      width: 60px;
      border: 1px solid #2395ff;
      color: #2395ff;
      background: none;
    }
</style>
