<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12"
        v-for="appartment in appartments"
        :key="appartment.id"
        @click="goToShowPage(appartment.id)"
        style="cursor: pointer"
      >
        <div class="card">
          <div class="card-header">
            <h3>{{ appartment.name }}</h3>
          </div>
          <div class="card-body">
            <div>
              <div v-if="appartment.photos && appartment.photos.length > 0">
                <img
                  class="cover"
                  :src="`http://127.0.0.1:8000/storage/${appartment.photos[0].path}`"
                  alt=""
                />
              </div>
              <div v-else>
                <img src="https://picsum.photos/200/300" alt="" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 d-flex align-items-center ml-3">
                <div>
                  <p><strong>Indirizzo:</strong> {{ appartment.address }}</p>
                  <p>
                    <strong>Numero di Camere:</strong> {{ appartment.rooms }}
                  </p>
                  <!-- <p><strong>Numero di Letti:</strong> {{ appartment.beds }}</p>
                  <p>
                    <strong>Numero di Bagni:</strong> {{ appartment.bathrooms }}
                  </p> -->
                  <p><strong>Metri Quadri:</strong> {{ appartment.mq }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      axios
        .get("http://127.0.0.1:8000/api/appartments?only_sponsored=true")
        .then((response) => {
          this.appartments = response.data;
          console.log(this.appartments);
        });
    },
    goToShowPage(id, userId) {
      this.$router.push({ name: "home.show", params: { id, user_id: userId } });
    },
  },
  mounted() {
    this.fechAppartments();
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 20px;
}

.cover {
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
