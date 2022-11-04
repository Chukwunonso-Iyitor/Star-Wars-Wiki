<script setup>
import { RouterView } from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ once: true });
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import "assets/scss/main.scss";
body {
  min-height: 120vh;
}
</style>
