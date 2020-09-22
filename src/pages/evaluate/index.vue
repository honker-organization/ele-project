<template>
  <!-- 评价页面 -->
  <div class="evaluateContainer">
      <div class="tagContainer"> 
        <van-tag size="large" color="#C1E3FA"  type="primary">全部12</van-tag>
        <van-tag size="large" color="#B4F7BC" type="success">最新1</van-tag>
        <van-tag size="large" color="#F7C4B4" type="danger">好评9</van-tag>
        <van-tag size="large" color="#FA797E" type="warning">差评2</van-tag>
        <van-tag size="large" color="#B4C4F7">有图6</van-tag>
      </div>

      <div class="commitContainer">
        <div class="commitItem" v-for="(commitItem, index) in commitList" :key="commitItem._id">
          <div class="commitImg">
            <img src="https://cube.elemecdn.com/c/6b/8384f98b8dedfd87fc1450926648cjpeg.jpeg?x-oss-process=image/format,webp/resize,w_60,h_60,m_fixed"/>
          </div>
          <div class="commitContent">
            <div class="message">
              <div class="username">{{commitItem.username}}</div>
              <div class="time">{{commitItem.rated_at}}</div>
            </div>

            <div class="commitStatus">
             <!-- <Star :rating="commitItem.rating_star"></Star> -->
              <div class="word">{{commitItem.rating_text}}</div>
            </div>
            
            <div class="question">
              评价：{{commitItem.time_spent_desc ? commitItem.time_spent_desc : '该用户默认好评'}}
            </div>

            <div class="anwser">
                
              商家回复：亲爱的顾客，非常抱歉影响您的用餐，感谢您的提醒与反馈，您反馈的问题我们会在下次服务中改进，期待您再次的光临！
    
            </div>

          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {reqGetCommit} from '@/api'
// import setImagePath from '@/utils/imagePath'
import Star from '@/components/star'
export default {
  name: '',
  data(){
    return{
      commitList:[]
    }
  },
  components:{
    Star
  },
   mounted(){
    
     this.getCommitList()
   
  },
  methods:{

    async getCommitList(){
        const commitList = await reqGetCommit()

         this.commitList = commitList

         console.log(this.commitList)
    }
  }

}
</script>

<style lang="less" scoped>
  .evaluateContainer{
    margin-top: 10px;

    .tagContainer{
      margin-top:30px;
      margin-left:25px ;
     
    }

    /deep/ .van-tag--large{
      padding: 8px;
      margin-right: 15px;
    }

    .commitItem{
      display: flex;
      width: 100%;
   
      margin-top: 20px;
      padding: 0 25px;

      padding-top:20px ;

      .commitImg{
        width: 50px;
        height: 50px;
        border-radius:50% ;
        img{
          width: 50px;
          border-radius:50% ;
        }

      }
    }
  }

  .commitContent{
    margin-left: 20px;

    .message{
      display: flex;
     
      height: 25px;
      line-height: 25px;
    }

    .username{
      font-size: 15px;
      font-weight: bold;
    }

    .time{
      margin-left: 140px;
    }
  }

  .commitStatus{
    display: flex;
    font-size: 13px;

    .word{
      margin-left: 20px;
    }

   
  }
   .question{
      margin-top: 10px;
      font-size: 14px;
      width: 230px;
      // background: #C9E3F5;
      color: #000;
      padding: 15px;
    }

  .anwser{
    margin-top: 15px;
    width: 230px;
    color: rosybrown;
    background: #f2f2f2;
    font-size: 14px;
    padding: 15px;
    
  }
</style>
