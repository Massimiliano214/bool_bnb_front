<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h3>Dettagli dell'Appartamento : {{ appartment.name }}</h3>
          </div>
          <div class="card-body">
            <!-- immagini appartamento -->
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

            <div class="row mt-3 d-flex align-items-stretch">
              <!-- dettagli appartamento -->
              <div class="col-12 col-md-6 col-lg-4 flex-fill">
                <div class="card h-100">
                  <div class="card-header">
                    <h4
                      class="text-center text-uppercase fw-bolder text-danger"
                    >
                      Info generali
                    </h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      <strong>Dimensioni:</strong> {{ appartment.mq }} mq
                    </p>
                    <p class="card-text">
                      <strong>Stanze:</strong> {{ appartment.rooms }}
                    </p>
                    <p class="card-text">
                      <strong>Posti Letto:</strong> {{ appartment.beds }}
                    </p>
                    <p class="card-text">
                      <strong>Servizi Igienici:</strong>
                      {{ appartment.bathrooms }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- servizi-->
              <div class="col-12 col-md-6 col-lg-4 flex-fill">
                <div class="card h-100">
                  <div class="card-header">
                    <h4
                      class="text-center text-uppercase fw-bolder text-danger"
                    >
                      servizi
                    </h4>
                  </div>
                  <div class="card-body">
                    <template
                      v-if="
                        appartment.services && appartment.services.length > 0
                      "
                    >
                      <p
                        class="card-text"
                        v-for="service in appartment.services"
                        :key="service.id"
                      >
                        {{ service.name }}
                      </p>
                    </template>
                    <template v-else>
                      <p>Nessun servizio associato all'appartamento scelto.</p>
                    </template>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 flex-fill">
                <div class="card h-100">
                  <div class="card-header">
                    <h4
                      class="text-center text-uppercase fw-bolder text-danger"
                    >
                      Info di contatto
                    </h4>
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      <strong>Dimensioni:</strong>
                      {{ appartment.user }} mq
                    </p>
                  </div>
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
  name: "AppShow",
  data() {
    return {
      appartment: {},
    };
  },
  methods: {
    fetchAppartment() {
      const id = this.$route.params.id;

      axios
        .get(`http://127.0.0.1:8000/api/appartments/${id}`)
        .then((response) => {
          this.appartment = response.data;
          console.log(this.appartment);
        });
    },
  },
  mounted() {
    this.fetchAppartment();
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
