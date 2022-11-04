<script setup>
import { onMounted } from "vue";
onMounted(() => {
  const btt = document.getElementById("back-to-top");
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
  <div
    class="d-flex justify-content-center"
    data-aos="zoom-out-up"
    data-aos-easing="ease-out"
    data-aos-duration="800"
    data-aos-delay="200"
  >
    <button id="back-to-top" class="px-4 py-2" @click="toTop">
      <i class="bi bi-arrow-up-short"></i> Back to top
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
#back-to-top {
  border-radius: 60px;
  border: 1px solid $myblue;
  color: $myblue;
  transition: 0.4s ease;
  background-color: transparent;
  &:hover {
    background-color: $myblue;
    color: $mywhite;
  }
}
</style>
