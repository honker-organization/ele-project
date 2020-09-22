<template>
  <div>
  <!--<Myaddress></Myaddress> -->

   <router-view></router-view>
    <Footer></Footer>
   
   <!--<Evaluate></Evaluate> -->
  </div>
</template>

<script>
import Footer from './components/footer'
import Myaddress from '@/pages/myAddress'
import Evaluate from '@/pages/evaluate'
export default {
  name: '',
  components:{
   Footer,
   Myaddress,
   Evaluate
    
  }
}
</script>

<style lang="less" scoped>

</style>
