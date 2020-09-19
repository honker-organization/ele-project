<template>
  <div>
    <IconDetailhHeader></IconDetailhHeader>
    <Card style="margin-top:150px"></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
  </div>
</template>

<script>
import IconDetailhHeader from '@/components/iconDetailHeader'
import Card from '@/components/card'
export default {
  name: 'iconDetail',
  components:{
    IconDetailhHeader,
    Card
  }
}
</script>

<style lang="less" scoped>

</style>
