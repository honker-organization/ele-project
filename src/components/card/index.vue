<template>
   <!-- 商品卡片-->
    <div class="cardContainer">
        <div class="img">
          <img src="https://img.yzcdn.cn/vant/ipad.jpeg">
        </div>

        <div class="word">
          <div class="title">
            三两粉(福田店)
          </div>

          <div class="starContainer">
              <div class="star">
                <van-icon name="star"  color="#FCCA3C" />
                <van-icon name="star" color="#FCCA3C"/>
                <van-icon name="star" color="#FCCA3C"/>
                <van-icon name="star" color="#FCCA3C"/>
                <van-icon name="star-o" style="margin-right:20px"/>
                <span class="month">4.5 月售1700单
                  
                </span>
                
              </div>
              <div class="bee">
                蜂鸟配送
              </div>
              
          </div>
          
          <div class="distribution">
            <div class="price">
              ￥20起送 | 配送￥2
            </div>
            <div class="minute">
              1.94km | 40分钟
            </div>
          </div>
          <div class="rice">
            奶茶果汁
          </div>

          <div class="tagContainer">
              <div class="tagItem">
              <van-tag  type="warning" size="small" style="margin-right:10px;font-size:11px">减</van-tag>
              <span>满25元减9元，满40元减12元，满55元减18元，满88元减26元，满120元减36元</span>
            </div>

            <div class="tagItem">
              <van-tag  type="primary" size="small" style="margin-right:10px;font-size:11px">配</van-tag>
              <span >配送费立减5元</span>
            </div>
          </div>
          
          
          
        </div>
      </div>

</template>

<script>
import { Icon, Card ,Tag } from 'vant';
export default {
  name: '',
  components:{
    [Icon.name]:Icon,
    [Card.name]: Card,
    [Tag.name]: Tag,
  }
}
</script>

<style lang="less" scoped>
  
      // 商品卡片
      .cardContainer{
        width:100%;
        display: flex;
        margin-top: 10px;
        .img{
          width: 100px;
          height: 100px;

          img{
           width: 75px;
          height: 75px;
          }
        }

        .word{
          margin-top: 15px;
          width: 300px;
          margin-left: -10px;
          .title{
            color: #333333;
            font-size: 15px;
            font-weight: bold;
            width: 100%;
            
          }

        }
      }

      .starContainer{
            width:100%;
             display: flex;
             justify-content: space-between;
        .star{
          margin: 5px 0;
          /deep/ .van-icon{
            font-size:11px;
          }
          span{
            color: #666666;
            font-size: 11px;
          }
          
        } 

        .bee{
         
          margin: 5px 0;
          background: #0097FF;
          margin-right: 10px;
          color: white;
          font-size: 10px;
          line-height: 18px;
          width: 50px;
          text-align: center;
        } 
      }

      .distribution{
         width:300px;
          margin-bottom: 5px;
          font-size: 11px;
          color: #666666;
          display: flex;
          justify-content: space-between;
          .minute{
           margin-right:10px
          }

          
        }

      .rice{
        font-size: 10px;
        border: 1px solid #666666;
        width: 40px;
        text-align: center;
        margin-bottom: 5px;
      }

      .tagContainer{
        margin-top: 10px;
        .tagItem{
          font-size:11px;
           width: 180px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin: 5px;
            height: 20px;
            line-height: 20px;
        }
      }
</style>
