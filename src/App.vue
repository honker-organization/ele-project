<template>
  <div id="app">
    <SuperMarket></SuperMarket>
   <!-- <IconDetail></IconDetail>  -->
  <!-- <selectionSort></selectionSort> -->
  <!--<SelectShippingAddress></SelectShippingAddress>-->
  <!--<Order></Order> -->
  <!--<Search></Search> -->
  <!--<buyCart></buyCart> -->
  </div>
</template>

<script>
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
  }
}
</script>

<style>

</style>
