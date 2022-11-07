<script setup>
import { ref, computed } from "vue";
import { useFetch } from "@/useFetch.js";
import { query } from "@/stores/query.js";
import TheSearch from "../components/TheSearch.vue";
import CharacterCard from "../components/CharacterCard.vue";
import HomeWorld from "../components/HomeWorld.vue";

const search = ref(query);
let url;
const baseUrl = "https://swapi.dev/api/people/?";
const id = ref("1");
url = computed(() => baseUrl + `${`page=` + id.value}`);

const { data, error } = useFetch(url);

let searched = ref([]);
const findCharacter = () => {
  // console.log(url.value);
  url = ref([`https://swapi.dev/api/people/?${`search=` + search.value.name}`]);
  fetch(url.value)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));
  searched.value.pop();
  searched.value.push(`Showing results for: ${search.value.name}`);
};

let planet = ref("");
const openModal = (e) => {
  document.getElementById("homeworldModal").style.display = "block";
  planet.value = e;
};
</script>

<template>
  <header class="my-5 container">
    <TheSearch @findCharacter="findCharacter" />
    <p class="mt-3 d-inline-block">
      {{ searched[0] }}
    </p>
    <p
      v-show="searched.length > 0"
      class="inline-block mb-0 clear-search"
      @click="
        id = 0;
        searched.pop();
        id = 1;
      "
    >
      <i class="bi bi-trash3 mr-1"></i>clear
    </p>
  </header>

  <main>
    <section class="container pb-5">
      <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
      <div v-else-if="data">
        <div v-show="data.count == 0">
          <h4>No results found</h4>
        </div>
        <div class="character-grid">
          <CharacterCard
            v-for="({ name, height, mass, homeworld }, index) in data.results"
            :key="name"
            :name="name"
            :mass="mass"
            :height="height"
            @openModal="openModal(homeworld)"
            data-aos="zoom-out"
            data-aos-easing="ease-out"
            data-aos-duration="800"
            :data-aos-delay="`${100 + index * 100}`"
          />
        </div>
      </div>
      <div
        v-else
        class="loading d-flex justify-content-center align-items-center"
      >
        <div>
          <div class="spinner-border text-blue text-center ml-3 mb-2"></div>
          <p class="text-center">Loading...</p>
        </div>
      </div>
    </section>

    <!-- HomeWorld  -->
    <HomeWorld :planet="planet" />

    <!-- Pagination  -->
    <section class="py-4 mb-4" v-show="searched.length == 0">
      <div class="container">
        <div class="row justify-content-end">
          <div v-if="data" class="col-8 col-sm-3 col-lg-2">
            <button
              id="prevBtn"
              type="button"
              class="page-btn"
              @click="id--"
              :disabled="!data.previous"
            >
              <i class="bi bi-chevron-left"></i></button
            ><span class="px-2">{{ id }} of 9</span>
            <button
              id="nextBtn"
              type="button"
              class="page-btn"
              @click="id++"
              :disabled="!data.next"
            >
              <i class="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.character-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem 2rem;
  justify-content: space-evenly;
}
@media (max-width: 991px) {
  .character-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 768px) {
  .character-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 576px) {
  .character-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
.loading {
  height: 60vh;
}
.page-btn {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 18px;
  &[disabled] {
    cursor: not-allowed;
  }
}
.clear-search {
  cursor: pointer;
}
</style>
