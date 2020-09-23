<template>
  <div>
    <router-view ></router-view>
    <Footer style="border-top:2px #eee solid;overflow: hidden;"></Footer>
  </div>
</template>

<script>
import Footer from './components/footer'
export default {
  name: '',
  components:{Footer}
}
</script>

<style lang="less" scoped>
 
</style>
