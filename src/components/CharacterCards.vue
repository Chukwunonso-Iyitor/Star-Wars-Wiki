<script setup>
import { ref } from "vue";
const characters = ref([
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    homeworld: "https://swapi.dev/api/planets/1/",
  },
]);
</script>

<template>
  <section class="container">
    <div class="character-grid">
      <div
        v-for="({ name, height, mass }, index) in characters"
        :key="name"
        class="character-card bg-grey p-3 shadowed"
        data-aos="zoom-out"
        data-aos-easing="ease-out"
        data-aos-duration="800"
        :data-aos-delay="`${100 + index * 150}`"
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
          <button type="button" class="">HomeWorld</button>
        </div>
      </div>
    </div>
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
      /* background-image: linear-gradient(to left, $myskyblue, $myskyblue); */
      background-color: $myblue;
      font-size: 14px;
      color: $mywhite;
      border: none;
      border-radius: 4px;
      padding: 0.4rem 1.6rem;
      transition: 0.4s ease;
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
