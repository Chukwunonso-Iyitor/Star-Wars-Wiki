<script setup>
import { onMounted } from "vue";
onMounted(() => {
  const btt = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      btt.style.cssText = "visibility: visible; opacity: 1";
    } else {
      btt.style.cssText = "visibility: hidden; opacity: 0";
    }
  });

  btt.addEventListener("mouseover", () => {
    document.documentElement.style.scrollBehavior = "smooth";
  });
  btt.addEventListener("mouseout", () => {
    document.documentElement.style.scrollBehavior = "auto";
  });
});
const toTop = () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};
</script>

<template>
  <div class="d-flex justify-content-center">
    <button id="back-to-top" class="px-4 py-2" @click="toTop">
      <i class="bi bi-arrow-up-short"></i> Back to top
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
#back-to-top {
  border-radius: 60px;
  border: 1px solid $mywhite;
  color: $mywhite;
  transition: 0.4s ease;
  background-color: transparent;
  visibility: hidden;
  opacity: 0;
  transition: 0.4s ease;
  &:hover {
    background-color: $myblue;
    color: $mywhite;
    border-color: $myblue;
  }
}
</style>
