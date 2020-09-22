<template>
   <!-- 商品卡片-->
    <div class="cardContainer">
        <div class="img">
          <img :src="shopItem.image_path">
        </div>

        <div class="word">
          <div class="title">
           {{shopItem.name}}
          </div>

          <div class="starContainer">
              <div class="star">
                <Star :rating="shopItem.rating"></Star>
                <span class="month">{{shopItem.rating}}月售{{shopItem.recent_order_num}}单
                  
                </span>
                
              </div>
              <div class="bee">
                蜂鸟配送
              </div>
              
          </div>
          
          <div class="distribution">
            <div class="price">
              ￥{{shopItem.piecewise_agent_fee.rules[0].price}}起送 | 配送￥{{shopItem.piecewise_agent_fee.rules[0].fee}}
            </div>
            <div class="minute">
              {{shopItem.distance}}km |{{shopItem.order_lead_time}}分钟
            </div>
          </div>
          <div class="rice">
            {{shopItem.flavors[0].name}}
          </div>

          <div class="tagContainer">
              <div class="tagItem">
              <van-tag  type="warning" size="small" style="margin-right:10px;font-size:11px">{{shopItem.supports[0].icon_name}}</van-tag>
              <span>{{shopItem.supports[0].description}}</span>
            </div>

            <!-- <div class="tagItem">
              <van-tag  type="primary" size="small" style="margin-right:10px;font-size:11px">配</van-tag>
              <span >配送费立减5元</span>
            </div> -->
          </div>
          
          
          
        </div>
      </div>

</template>

<script>
import { Icon, Card ,Tag } from 'vant';
import Star from '@/components/star'

export default {
  name: 'Card',
  components:{
    [Icon.name]:Icon,
    [Card.name]: Card,
    [Tag.name]: Tag,
    Star
  },
  props:['shopItem']
 
}
</script>

<style lang="less" scoped>
  
      // 商品卡片
      .cardContainer{
        width:100%;
        display: flex;
        margin-top: 10px;
        .img{
          width: 80px;
          height: 80px;

          img{
           width: 60px;
          height: 60px;
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
          height: 16px;
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
