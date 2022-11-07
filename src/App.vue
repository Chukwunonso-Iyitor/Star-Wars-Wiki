<script setup>
import { RouterView } from "vue-router";
import BackToTop from "../src/components/BackToTop.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ once: true });
</script>

<template>
  <div class="content pb-5">
    <RouterView />
    <BackToTop />
  </div>
</template>

<style lang="scss">
@import "assets/scss/main.scss";
body {
  min-height: 100vh;
  background-color: $mydarkblue;
  background-image: url("@/assets/img/dots.svg");
}
</style>
