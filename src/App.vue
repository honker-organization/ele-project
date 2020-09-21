<template>
  <div id="app">
    <SuperMarket></SuperMarket>
  </div>
</template>

<script>
import SuperMarket from './pages/supermarket'
export default {
  name: 'App',
  components: {
    SuperMarket
  }
}
</script>

<style lang="less" scoped>
  #app{
    height: 100%;
  }
</style>
