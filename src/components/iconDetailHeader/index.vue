<template>
    <!-- icon详情页 hhb -->
  <div class="headerContainer">
    <van-tabs background="#0093FF" line-width="50px" line-height="2px" color="white" class="van-tabs" style="height:80px">
        <van-tab title-active-color="red" title-style="color:#FFFFFF;font-size:30px;height:70px;background:#0093FF" v-for="(item,index) in tab" :title="item" :key='index+1'>
          
          <!-- <div class="down">
              <button>
                <van-icon name="arrow-down" />
              </button>
          </div> -->

           <div class="navContainer">
             <van-dropdown-menu  active-color="#3190E8">
                <van-dropdown-item v-model="value1" :options="option1" />
              </van-dropdown-menu>
              <div class="navItem">
                  距离最近
              </div>
              <div class="navItem">
                  销量最高
              </div>
              <div class="navItem">
                  筛选<van-icon name="filter-o" />
              </div>
          </div>
 
         <Screen style="display:none"></Screen> 
        </van-tab>
      </van-tabs> 

     <!-- <div class="tabs" v-for="(item,index) in tab" :title="item" :key='index+1'>
          <div class="tab">{{item}}</div>
      </div> -->

     
      
  </div>
   

  
</template>

<script>
import Screen from '@/components/screen'
import { Tab, Tabs ,Icon, Card ,Tag,Button,DropdownMenu, DropdownItem } from 'vant';
export default {
  name: 'iconDetailHeader',
  data() {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '综合排序', value: 0 },
        { text: '好评有优先', value: 1 },
        { text: '起送价最低', value: 2 },
        { text: '配送最快', value: 3 },
        { text: '配送费最低', value: 4 },
        { text: '人均从低到高', value: 5 },
        { text: '通用排序', value: 6 }
      ],
      active: 2,
      tab:['全部','面食粥点','简餐便当','汉堡披萨','香锅冒菜','小吃炸串','地方菜系','日韩料理','轻食简餐']
    };
  },
  components:{
  [Tab.name]:Tab,
  [Tabs.name]:Tabs,
  [Icon.name]:Icon,
  [Card.name]: Card,
  [Tag.name]: Tag,
  [DropdownMenu.name]:DropdownMenu,
  [DropdownItem.name]: DropdownItem,
  [Button.name]:Button,
  Screen
  },

}
</script>

<style lang="less" scoped>
    .headerContainer{
        /deep/ .van-cell__title, .van-cell__value {
          margin-left: 10px;
      }
      /deep/ .van-tab__text{
        font-size: 14px;
        
      }

      /deep/ .van-tabs__wrap--scrollable .van-tabs__nav--complete .van-tab {
       margin-top: -10px;
      }

      
      .navContainer{
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;

        /deep/ .van-dropdown-menu__bar{
          height: 30px;
          margin-top: 10px;
        }
        /deep/ .van-dropdown-menu__item{
            height: 40px;
            line-height: 40px;

            .van-ellipsis{
              height: 40px;
              line-height: 35px;
              font-size:14px;
            }

                
          }
        .navItem{
          color: #676767;
          font-size: 14px;
          line-height: 55px;
          &.active{
            color: #3190E8;
            font-weight: bold;
          }
        }
      }

      .down{
      position: fixed;
      top:11px;
      right: 6px;
      z-index: 999;
      box-shadow: rgba(0, 0, 0, 0.1) -3px 0px;
      button{
          width: 50px;
          height: 30px;
          background: #0093FF;
          color: white;
          border: 0;
        }  
      }

    }

    
</style>
