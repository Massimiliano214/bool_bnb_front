<script>
import axios from "axios";

export default {
  name: "AppList",
  data() {
    return {
      appartments: [],
      links: [],
      lastPage: 0,
      currentPage: 1,
    };
  },
  methods: {
    fechAppartments() {
      axios
        .get("http://127.0.0.1:8000/api/appartments")
        .then((response) => {
          this.appartments = response.data;
          console.log(this.appartments);
        });
    }
  },
  mounted() {
    this.fechAppartments();
  },
};
  

</script>
<template>
    <h1>ciao</h1>
</template>
<style lang="scss"></style>
