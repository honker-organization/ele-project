<template>
  <van-dropdown-menu class="selectitem">
    <van-dropdown-item @change="selectItem" v-model="currentSort" :options="option1" />
  </van-dropdown-menu>
</template>

<script>
export default {
  name: 'Sort',
  data() {
    return {
      currentSort: 0, // 当前选中的默认排序 --> 综合排序
      // 绑定的下拉数据列表
      option1: [
        { text: '综合排序', value: 0 },
        { text: '好评优先', value: 1 },
        { text: '起送价最低', value: 2 },
        { text: '配送最快', value: 3 },
        { text: '配送费最低', value: 4 },
        { text: '人均从低到高', value: 5 },
        { text: '人均从高到低', value: 6 },
        { text: '通用排序', value: 7 },
      ],
    }
  },
  methods: {
    selectItem(value) {
      this.$emit('sendValue', value)
    },
  },
}
</script>

<style scoped lang='less'>
/deep/.van-dropdown-item__option--active,
/deep/.van-dropdown-item__option--active .van-dropdown-item__icon,
/deep/.van-dropdown-menu__title--active::after {
  color: #0093ff;
}
</style>