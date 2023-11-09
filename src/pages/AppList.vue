<template>
  <h1>ciao</h1>
  <!-- SWITCH RICERCA AVANZATA -->
  <div class="form-check form-switch">
    <input
      class="form-check-input scb-switch"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
      v-model="showAllApartments"
      @change="fechAppartments"
    />
    <label class="form-check-label" for="flexSwitchCheckDefault">
      ricerca avanzata</label
    >
  </div>
  <!-- RICERCA PER NOME APPARTAMENTO -->
  <div class="form-group mt-3">
    <label for="searchInput">Ricerca per nome appartamento:</label>
    <input
      type="text"
      class="form-control"
      id="searchInput"
      v-model="searchNameAppartment"
      @input="searchApartments"
    />
  </div>
  <!-- RICERCA PER INDIRIZZO -->
  <div class="form-group mt-3">
    <label for="addressInput">Ricerca per indirizzo:</label>
    <input
      type="text"
      class="form-control"
      id="addressInput"
      v-model="searchAddress"
      @input="searchApartments"
    />
  </div>
  <!-- RICERCA PER STANZE -->
  <div class="form-group mt-3">
    <label for="roomsSelect">Seleziona il numero di stanze:</label>
    <select
      id="roomsSelect"
      class="form-select"
      v-model="searchRooms"
      @change="searchApartments"
    >
      <option
        v-for="room in sortedUniqueRooms"
        :key="room"
        :value="room"
        v-if="room !== 0"
      >
        {{ room }} stanze
      </option>
    </select>
  </div>

  <div class="container mt-5">
    <div class="row">
      <div
        :class="['col-12', 'col-md-6', 'd-flex', 'align-items-center', 'mb-3']"
        v-for="appartment in appartments"
        :key="appartment.id"
        @click="goToShowPage(appartment.id)"
        style="cursor: pointer"
      >
        <div class="card h-100 flex-grow-1">
          <div class="card-header">
            <h3>{{ appartment.name }}</h3>
          </div>
          <div class="card-body d-flex align-items-center">
            <div class="me-3">
              <div v-if="appartment.photos && appartment.photos.length > 0">
                <img
                  class="cover w-100"
                  :src="`http://127.0.0.1:8000/storage/${appartment.photos[0].path}`"
                  alt=""
                />
              </div>
              <div v-else>
                <img
                  src="https://picsum.photos/200/300"
                  alt=""
                  class="cover w-100"
                />
              </div>
            </div>
            <div class="ml-3">
              <p><strong>Indirizzo:</strong> {{ appartment.address }}</p>
              <p><strong>Numero di Camere:</strong> {{ appartment.rooms }}</p>
              <p><strong>Metri Quadri:</strong> {{ appartment.mq }}</p>
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
  name: "AppList",
  data() {
    return {
      allAppartments: [],
      appartments: [],
      links: [],
      lastPage: 0,
      currentPage: 1,
      showAllApartments: true,
      searchNameAppartment: "",
      searchAddress: "",
      searchRooms: "",
      uniqueRooms: [],
    };
  },
  methods: {
    fechAppartments() {
      let apiUrl = "http://127.0.0.1:8000/api/appartments";

      if (!this.showAllApartments) {
        apiUrl += "?only_sponsored=true";
      }

      axios.get(apiUrl).then((response) => {
        this.allAppartments = response.data;
        this.getUniqueRooms();
        this.searchApartments();
      });
    },
    getUniqueRooms() {
      const allRooms = this.allAppartments.map(
        (appartment) => appartment.rooms
      );
      this.uniqueRooms = Array.from(new Set(allRooms));
    },
    // RICERCA PER NOME APPARTAMENTO, INDIRIZZO E NUMERO DI STANZE
    searchApartments() {
      this.appartments = this.allAppartments.filter((appartment) => {
        const nameMatch =
          !this.searchNameAppartment ||
          appartment.name
            .toLowerCase()
            .includes(this.searchNameAppartment.toLowerCase());

        const addressMatch =
          !this.searchAddress ||
          appartment.address
            .toLowerCase()
            .includes(this.searchAddress.toLowerCase());

        const roomsMatch =
          !this.searchRooms || appartment.rooms >= this.searchRooms;

        return nameMatch && addressMatch && roomsMatch;
      });
    },
    goToShowPage(id, userId) {
      this.$router.push({ name: "home.show", params: { id, user_id: userId } });
    },
  },
  computed: {
    sortedUniqueRooms() {
      const filteredRooms = this.uniqueRooms.filter((room) => room !== 0);

      return filteredRooms.slice().sort((a, b) => a - b);
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
.scb-switch {
  width: 3rem;
  height: 1.5rem;
}
</style>
