<script>
import HomeBnb from "../components/HomeBnb.vue";
export default {
  name: "AppHome",
  compponents: {
    HomeBnb,
  },
};
</script>
<template>
  <h1>HomePage d</h1>

  <HomeBnb />
  <router-link :to="{ name: 'prova' }">prova</router-link>
</template>
<style lang="scss"></style>
