<script>
import HomeBnb from "./components/HomeBnb.vue";
import axios from "axios";
export default { components: { HomeBnb } };
</script>
<template>
  <!-- <HomeBnb /> -->
  <router-view> </router-view>
</template>
<style lang="scss">
@use "./style/general.scss";
</style>
