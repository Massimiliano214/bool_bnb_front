<template>
  <div>
    <h1>ciao</h1>
    <ul v-for="appartment in appartments">
      <li><strong>Nome appartamento: </strong>{{ appartment.name }}</li>
      <li><strong>Indirizzo: </strong>{{ appartment.address }}</li>
      <li><strong>Numero di Camere: </strong>{{ appartment.rooms }}</li>
      <li><strong>Numero di Letti: </strong>{{ appartment.beds }}</li>
      <li><strong>Numero di Bagni: </strong>{{ appartment.bathrooms }}</li>
      <li><strong>Metri Quadri: </strong>{{ appartment.mq }}</li>

      <li v-if="appartment.photos">
        <strong>Foto: </strong><img src="{{ appartment.photos[0] }}" alt="" />
      </li>
      <li v-else>
        <strong>Foto: </strong
        ><img
          src="https://picsum.photos/200/300
 "
          alt=""
        />{{ appartment.photos[0] }}
      </li>
    </ul>
  </div>
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
        this.appartments = response.data;
        console.log(this.appartments);
      });
    },
  },
  mounted() {
    this.fechAppartments();
  },
};
</script>
<style lang="scss" scoped></style>
