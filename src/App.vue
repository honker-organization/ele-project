<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Delicious from "@/pages/Delicious";
import Detail from "@/pages/Detail";
export default {
  name: "App",
  components: { Delicious, Detail },
};
</script>

<style></style>
