<template>
  <h1>ciao</h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quos
    quas reiciendis voluptatum, nisi odio minus est. Quaerat aperiam voluptates
    distinctio iusto. Animi reiciendis amet sunt exercitationem. Exercitationem.
  </p>
</template>
<script>
import axios from "axios";

export default {
  name: "HomeBnb",
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
      axios.get("http://127.0.0.1:8000/api/appartments").then((response) => {
        let res = response.data;
        console.log(res);
      });
    },
  },
  mounted() {
    this.fechAppartments();
  },
};
</script>
<style lang="scss" scoped></style>
