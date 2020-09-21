<template>
  <div id="app">
   <IconDetail></IconDetail> 
  <!-- <selectionSort></selectionSort> -->
  <!--<SelectShippingAddress></SelectShippingAddress>-->
  <!--<Order></Order> -->
  <!--<Search></Search> -->
  <!--<buyCart></buyCart> -->
  </div>
</template>

<script>
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
   buyCart
  }
}
</script>

<style>

</style>
