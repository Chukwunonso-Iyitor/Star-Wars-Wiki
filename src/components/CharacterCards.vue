<script setup>
import { ref } from "vue";
const openModal = () => {
  document.getElementById("homeworldModal").style.display = "block";
};

const data = ref(null);
const error = ref(null);

fetch("https://swapi.dev/api/people/")
  .then((res) => res.json())
  .then((json) => (data.value = json))
  .catch((err) => (error.value = err));

// console.log(data);

// const characters = ref([
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     homeworld: "https://swapi.dev/api/planets/1/",
//   },
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     homeworld: "https://swapi.dev/api/planets/1/",
//   },
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     homeworld: "https://swapi.dev/api/planets/1/",
//   },
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     homeworld: "https://swapi.dev/api/planets/1/",
//   },
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     homeworld: "https://swapi.dev/api/planets/1/",
//   },
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     homeworld: "https://swapi.dev/api/planets/1/",
//   },
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     homeworld: "https://swapi.dev/api/planets/1/",
//   },
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     homeworld: "https://swapi.dev/api/planets/1/",
//   },
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     homeworld: "https://swapi.dev/api/planets/1/",
//   },
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     homeworld: "https://swapi.dev/api/planets/1/",
//   },
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     homeworld: "https://swapi.dev/api/planets/1/",
//   },
//   {
//     name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     homeworld: "https://swapi.dev/api/planets/1/",
//   },
// ]);
</script>

<template>
  <section class="container pb-5">
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
    <div v-else-if="data">
      <!-- <pre>{{ data.results }}</pre> -->
      <div class="character-grid">
        <div
          v-for="({ name, height, mass }, index) in data.results"
          :key="name"
          class="character-card bg-grey p-3 shadowed"
          data-aos="zoom-out"
          data-aos-easing="ease-out"
          data-aos-duration="800"
          :data-aos-delay="`${100 + index * 100}`"
        >
          <img
            src="../assets/img/avatar.svg"
            alt="Avatar"
            class="d-block mx-auto avatar"
          />
          <h5 class="text-center my-3">{{ name }}</h5>
          <div class="row px-4">
            <div class="col"><p class="text-center">W:</p></div>
            <div class="col">
              <p class="text-center">{{ mass }}</p>
            </div>
          </div>
          <div class="row px-4">
            <div class="col"><p class="text-center">H:</p></div>
            <div class="col">
              <p class="text-center">{{ height }}</p>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button type="button" class="" @click="openModal">HomeWorld</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.character {
  &-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem 2rem;
    justify-content: space-evenly;
  }
  &-card {
    border-radius: 6px;
    .avatar {
      width: 50px;
      height: 50px;
    }
    h5 {
      font-size: 14px;
      font-weight: 600;
    }
    p {
      font-size: 12px;
    }
    button {
      background-color: $myblue;
      font-size: 14px;
      color: $mywhite;
      border: none;
      border-radius: 4px;
      padding: 0.4rem 1.6rem;
      transition: 0.4s ease;
      outline: none;
      &:hover {
        scale: 1.1;
      }
      &:active {
        scale: 0.95;
      }
    }
  }
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
</style>
