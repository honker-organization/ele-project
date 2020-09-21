<template>
  <div id="app">
    <SuperMarket></SuperMarket>
<<<<<<< HEAD
=======
   <!-- <IconDetail></IconDetail>  -->
  <!-- <selectionSort></selectionSort> -->
  <!--<SelectShippingAddress></SelectShippingAddress>-->
  <!--<Order></Order> -->
  <!--<Search></Search> -->
  <!--<buyCart></buyCart> -->
>>>>>>> master
  </div>
</template>

<script>
<<<<<<< HEAD
import SuperMarket from './pages/supermarket'
export default {
  name: 'App',
  components: {
    SuperMarket
=======
import SuperMarket from '@/pages/supermarket'
import IconDetail from '@/pages/iconDetail'
import selectionSort from '@/components/selectionSort'
import SelectShippingAddress from '@/pages/selectShippingAddress'
import Order from '@/pages/order'
import Search from '@/pages/search'
import buyCart from '@/components/buyCart'
export default {
  name: 'App',
  components: {
   IconDetail,
   selectionSort,
   SelectShippingAddress,
   Order,
   Search,
   buyCart,
   SuperMarket
>>>>>>> master
  }
}
</script>

<<<<<<< HEAD
<style lang="less" scoped>
  #app{
    height: 100%;
  }
=======
<style>

>>>>>>> master
</style>
