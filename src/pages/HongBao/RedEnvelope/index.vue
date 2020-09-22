<template>
    <div>
      <div class="evenodd"> 
        <div class="evenodd-box1">
          <van-icon name="gift" class="gift"/>
          <span class="evenodd-span1">推荐有奖</span>
        </div>
        <span class="evenodd-span2">15元现金拿不停></span>
      </div>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-button size="mini">按钮</van-button>
          <van-button size="mini">按钮</van-button>
        </template>
      </van-card>
    </div>
      
  
</template>

<script>
export default {
  name: 'RedEnvelope',
}
</script>

<style lang="less" scoped>
  .evenodd{
    width: 354px;
    height: 41px;
    background-color: #fff;
    margin: 5px auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .evenodd-box1{
    display: flex;
    align-items: center;
  }
  .gift{
      font-size: 20px;
      color: hotpink;
    }
  .evenodd-span1{
    font-size: 14px;
    padding-left:5px ;
  }
  .evenodd-span2{
    font-size: 10px;
    color: #333;
    padding-right: 5px;
  }
  .van-card{
    width: 95%;
    margin: 10px auto 0;
  }
  .van-card{
    width: 95%;
    margin: 10px auto 0;
  }
</style>
