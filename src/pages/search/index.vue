<template>
  <div class="searchContainer">
    <van-nav-bar
      left-arrow
    />

    <div class="searchInput">
      <div class="search-input">
          <input type="text" placeholder="请输入商家、商品名称"/>
          <van-icon name="search" />
          <div class="search-word">搜索</div>
      </div>
    </div>

    <div class="search-row">热门搜索</div>

    <div class="searchRow-content">
      <div class="searchItem">
        轻食
      </div>

      <div class="searchItem">
        炒饭
      </div>

       <div class="searchItem">
        饭团
      </div>

      <div class="searchItem">
        湘菜
      </div>

       <div class="searchItem">
        肯德鸡
      </div>

       <div class="searchItem">
        炸鸡
      </div>

      <div class="searchItem">
        水果捞
      </div>

       <div class="searchItem">
        正新鸡排
      </div>

      <div class="searchItem">
        叫了个炸鸡
      </div>

      <div class="searchItem">
        猪脚饭
      </div>
    </div>
  </div>
</template>

<script>
import { NavBar,Icon } from 'vant';
export default {
  name: '',
  components:{
    [NavBar.name]:NavBar,
    [Icon.name]:Icon
  }
}
</script>

<style lang="less" scoped>
  /deep/ [data-v-7ce016af] .van-icon-arrow-left::before{
    font-size: 20px;
    color: #979797;
  }
    .searchinput{
      position: relative;
      width: 400px;
    }

   .search-input{
    display: flex;
    width: 290px;
    height: 30px;
    
    right:30px;
    margin-left: 20PX;
    margin-top: 10PX;
  }

  .search-input input{
    width: 100%;
    height: 100%;
    border: none;
    background: #F2F2F2;
    padding-left:30px;
    
  }

  /deep/    .van-icon-search::before{
    position: absolute;
    z-index: 99;
    top:5px;
    left:-282px;
    color:#A0A0A0;
    font-size: 20px;
  }
  
  .search-word{
    width: 80px;
    position: absolute;
    top:64px;
    right: -30px;
    color: block;
    font-size: 14px;
    font-weight: bold;
  }

  .search-row{
    margin-top: 30px;
    margin-left: 20px;
    color: #666;
    font-size: 14px;
  }

  .searchRow-content{
    display: flex;
    
    margin-left: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
    width: 320px;
   
  }

  .searchItem{
    background: #f7f7f7;
    height: 25px;
    line-height: 25px;
    text-align: center;
    color: #666;
    padding: 0 10px;
    margin-right: 15px;
    margin-bottom: 10px;
    
  }

</style>
