<template>
  <div class="container">
    <div class="header">
      <van-icon name="arrow-left" size="30px" color="#fff" @click="$router.back()" />
      <div class="word">添加地址</div>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="联系人"
        placeholder="姓名"
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <div class="sex">
        <van-button type="default" @click.prevent>先生</van-button>
        <van-button type="info" @click.prevent>女士</van-button>
      </div>
      <van-field
        v-model="phone"
        name="电话"
        label="电话"
        placeholder="手机号码"
        :rules="[{ required: true, message: '请填写手机号码' }]"
      />
      <van-field
        v-model="address"
        name="地址"
        label="地址"
        placeholder="小区/写字楼/学校等"
        :rules="[{ required: true, message: '请填写地址' }]"
      />
      <van-field
        v-model="username"
        name="门牌号"
        label="门牌号"
        placeholder="10号楼5层501室222"
        :rules="[{ required: true, message: '请填写门牌号' }]"
      />

      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">确定</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '', // 用户名
      phone: '', // 手机号
      address: '', // 地址
      homeHouse: '', // 门牌号
    }
  },
  methods: {
    onSubmit() {},
  },
}
</script>

<style scoped lang='less'>
/deep/.van-icon-arrow-left {
  height: 44px;
  line-height: 44px;
}
.header {
  height: 44px;
  background: #0093ff;
  display: flex;
  text-align: center;
  align-items: center;
  // justify-content: space-around;

  .word {
    color: #fff;
    font-size: 18px;
    margin-left: 120px;
  }
}
/deep/.van-field__label {
  font-weight: bold;
  font-size: 16px;
  color: #333;
}

.sex {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  /deep/.van-button--normal {
    width: 80px;
    height: 30px;
    margin-right: 10px;
  }
}
</style>