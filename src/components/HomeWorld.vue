<script setup>
import { onMounted, computed } from "vue";
import { useFetch } from "@/useFetch.js";
const closeModal = () => {
  document.getElementById("homeworldModal").style.display = "none";
};
onMounted(() => {
  window.addEventListener("keyup", (e) => {
    if (e.key == "Escape") {
      closeModal();
    }
  });
});
const props = defineProps({
  planet: {
    type: String,
    required: true,
  },
});

let url = computed(() => `${props.planet}`);
const { data, error } = useFetch(url);
</script>

<template>
  <div id="homeworldModal">
    <div class="homeworld-backdrop" @click="closeModal"></div>
    <!-- Error state  -->
    <div
      v-if="error"
      class="homeworldview shadow bg-white d-flex justify-content-center align-items-center"
    >
      <div>
        <div>Oops! Error encountered: {{ error.message }}</div>
      </div>
    </div>

    <!-- Success state  -->
    <div v-else-if="data" class="homeworldview shadow bg-white">
      <div class="banner">
        <span
          @click="closeModal"
          id="closeBtn"
          class="d-flex justify-content-center align-items-center"
          ><i class="bi bi-x-lg text-white"></i
        ></span>
        <div class="banner-overlay p-5 d-flex align-items-center">
          <h1 class="text-white">{{ data.name }}</h1>
        </div>
      </div>
      <div
        class="content bg-white p-1 p-sm-4 d-flex flex-column justify-content-center"
      >
        <div class="row py-2">
          <div class="col">
            <div class="row px-3 px-sm-4">
              <div class="col"><h6>Climate:</h6></div>
              <div class="col-12 col-sm">
                <p class="text-sm-right text-capitalize">{{ data.climate }}</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row px-3 px-sm-4">
              <div class="col"><h6>Population:</h6></div>
              <div class="col-12 col-sm">
                <p class="text-sm-right">{{ data.population }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row py-2">
          <div class="col">
            <div class="row px-3 px-sm-4">
              <div class="col"><h6>Terrain:</h6></div>
              <div class="col-12 col-sm">
                <p class="text-sm-right">{{ data.terrain }}</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row px-3 px-sm-4">
              <div class="col"><h6>Gravity:</h6></div>
              <div class="col-12 col-sm">
                <p class="text-sm-right">{{ data.gravity }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading state -->
    <div
      v-else
      class="homeworldview shadow bg-white d-flex justify-content-center align-items-center"
    >
      <div>
        <div class="spinner-border text-blue text-center ml-3 mb-2"></div>
        <p class="text-center">Loading...</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
#homeworldModal {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  .homeworld-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-backdrop-filter: blur(4px) brightness(0.6);
    backdrop-filter: blur(4px) brightness(0.6);
  }
  .homeworldview {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    max-width: 860px;
    height: 460px;
    border-radius: 6px;
    overflow: hidden;
    z-index: 120;
    .banner {
      height: 50%;
      background-image: url("../assets/img/planet.webp");
      background-size: cover;
      background-position: center center;
      position: relative;
      &-overlay {
        width: 100%;
        height: 100%;
        background-color: #000000aa;
      }
      #closeBtn {
        position: absolute;
        top: 20px;
        right: 25px;
        background-color: $myblue;
        border-radius: 40px;
        width: 40px;
        height: 40px;
        cursor: pointer;
        transition: 0.4s ease;
        &:hover {
          scale: 1.1;
        }
        &:active {
          scale: 0.95;
        }
      }
    }
    .content {
      height: 50%;
      h6 {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 576px) {
    .homeworldview {
      width: 90%;
    }
  }
  @media (max-height: 576px) {
    .homeworldview {
      height: 90%;
      width: 85%;
    }
  }
}
</style>
