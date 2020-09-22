<template>
  <div>
    <!-- <Detail /> -->
    <router-view></router-view>
    <!-- <Delicious /> -->
    <!-- <router-view></router-view> -->
    <!--<Myaddress></Myaddress> -->

    <Footer></Footer>

    <!--<Evaluate></Evaluate> -->
  </div>
</template>

<script>
// import Delicious from '@/pages/Delicious'
// import Detail from '@/pages/Detail'
import Footer from '@/components/footer'
export default {
  name: 'App',
  components: {
    Footer,
  },
  // components: { Delicious, Detail },
}
</script>

<style></style>
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
