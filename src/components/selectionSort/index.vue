<template>
  <!-- 选择分类组件-->
  <div class="selectonSort">
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>

    <div class="selectonSort-header">
        <van-popup 
            v-model="show"
            closeable
            position="top"
            :style="{ height: '70%' }"
            line-style="color:pink"
            selected-icon 
            height="100"
            >
          <span class="selectonSort-title" >请选择分类</span>

          <van-tree-select
            :items="items"
            :active-id.sync="activeId"
            :main-active-index.sync="activeIndex"
          />
        </van-popup>
    </div>

    
    
  </div>
</template>

<script>
import { Popup,TreeSelect} from 'vant';
export default {
  name: '',
  data(){
    return{
       show: false,
       items:[
         { text: `美食`,badge: 640 , children: [{ text:'全部',id:1},{text:'简餐便当',id:2},{text:'汉堡披萨',id:3},{text:'香锅冒菜',id:4},{text:'小吃炸串',id:5},{text:'地方菜系',id:6}] },
         { text: `快餐便当`, badge: 726 ,children: [{text:'全部',id:1},{text:'其他快餐',id:2},{text:'米粉米线',id:3},{text:'盖浇饭',id:4},{text:'麻辣烫/关东煮',id:5},{text:'汉堡薯条',id:6},{text:'黄焖鸡米饭',id:7},{text:'面馆',id:8}] },
         { text: `特色菜系`, badge: 196 ,children: [{text:'全部',id:1},{text:'川湘菜',id:2},{text:'江西菜',id:3},{text:'其他菜系',id:4},{text:'江浙菜',id:5},{text:'浏阳蒸菜',id:6},{text:'海鲜',id:7},{text:'私房菜',id:8}] },
         { text: `全球美食`, badge: 84 ,children: [{text:'全部',id:1},{text:'韩国炸鸡',id:2},{text:'日韩料理',id:3},{text:'日式简餐',id:4},{text:'披萨',id:5},{text:'其他西餐',id:6},{text:'刺身寿司',id:7},{text:'牛排',id:8}] },
         { text: `甜品饮品`, badge: 335 ,children: [{text:'全部',id:1},{text:'甜品',id:2},{text:'咖啡厅',id:3},{text:'奶茶果汁',id:4},{text:'面包蛋糕',id:5}] },
         { text: `小吃夜宵`, badge: 299 ,children: [{text:'全部',id:1},{text:'烧烤',id:2},{text:'炸鸡炸串',id:3},{text:'其它小吃',id:4},{text:'小龙虾',id:5},{text:'卤味鸭脖',id:6},{text:'花甲粉',id:7},{text:'卤煮/炒肝',id:8}] },
         { text: `商店超市`, badge: 116 ,children: [{text:'全部',id:1},{text:'便利店',id:2},{text:'宠物超市',id:3},{text:'日用百货',id:4},{text:'休闲零食',id:5},{text:'饮料冰品',id:6},{text:'大型超市',id:7},{text:'名酒坊',id:8},{text:'水站',id:9},{text:'茶行',id:10},{text:'美妆个护',id:11}] },
         { text: `鲜花绿植`, badge: 60 ,children: [{text:'全部',id:1},{text:'鲜花',id:2}] },
                  
         ],
      activeId: 1,
      activeIndex: 0,
    }
  },
  components:{
    [Popup.name]:Popup,
    [TreeSelect.name]:TreeSelect
  },
  methods:{
    showPopup() {
      this.show = true;
    },
  }
}
</script>

<style lang="less" scoped>
.selectonSort .selectonSort-header{
  height:40px;
 
}
.selectonSort .selectonSort-title{
  display:block;
  padding:16px;
  padding-left: 20px;
  font-size:16px;
  font-weight:bold;
  color: #333333;
   background: #F9F9F9;

}

/deep/ .van-tree-select{
  height: 800px!important;
}

/deep/ .van-sidebar-item{
  font-size: 16px;
  color: #666;
}

/deep/ .van-tree-select__item{
   font-size: 16px;
    color: #666;
}

/deep/ .van-sidebar-item--select::before{
  background-color: #2395FF;

}

/deep/ .van-info{
  background-color: #F7F8FA;
  color:#D3D3D3;
  top:8px;
  left:50px;
  width:40px
}


/deep/ .van-icon-success::before{
  color: #2395FF;

}
</style>
