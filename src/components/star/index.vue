<template>
  <div class="starContainer">
    <span class="iconfont icon-xing star all" v-for="(item,index) in starArr.count" :key="index"></span>
    <span class="iconfont icon-banxing star half" v-if="starArr.half"></span>
    <span class="iconfont icon-xing1 star" v-for="(item,index) in starArr.gray" :key="index + 5"></span>
  </div>
</template>

<script>
export default {
  name: 'Star',
  props: ['rating'],
  computed: {
    starArr() {
      // 3.7 3个星 1个半星 1个灰星
      // 3 3个星 2个灰星
      let count = 0
      let gray = 0
      let half = false
      const { rating } = this
      // 判断整数
      const isInteger = Math.floor(rating) === rating
      // const isInteger = rating % 1 === 0
      if (isInteger) {
        count = rating
      } else {
        count = Math.floor(rating)
        half = true
      }
      gray = 5 - count - (half ? 1 : 0)
      return {
        // 整星
        count,
        // 半星
        half,
        // 灰星
        gray,
      }
    },
  },
}
</script>

<style scoped lang='less'>
.star {
  font-size: 12px;
  vertical-align: top;
}
.all {
  color: #f90;
}
.half {
  color: #f90;
}
</style>