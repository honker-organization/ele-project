<template>
  <div>
    <!-- <van-index-bar v-for="(key, value) in cityList.data" :key="key">
      <van-index-anchor :index="key" />
      <van-cell v-for="item in value" :title="item.name" :key="item.id" />
    </van-index-bar>-->

    <van-index-bar :index-list="cityName">
      <div v-for="(name, index) in cityName" :key="index">
        <van-index-anchor :index="name">{{name}}</van-index-anchor>
        <van-cell :title="item.name" v-for="item in cityList[name]" :key="item.id" />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      cityList: {}, //城市列表
      cityName: [],
    }
  },
  mounted() {
    this.getCityList()
  },
  methods: {
    async getCityList() {
      const cityList = await this.$api.cxh.reqCityList()
      this.cityList = cityList.data
      this.cityName = Object.keys(cityList.data)
      // console.log(this.cityList)
    },
  },
}
</script>

<style scoped>
</style>
