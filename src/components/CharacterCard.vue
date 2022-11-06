<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  mass: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
});
defineEmits(["openModal"]);
</script>

<template>
  <div class="character-card bg-grey px-3 py-4 shadowed">
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
      <button type="button" class="" @click="$emit('openModal')">
        HomeWorld
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.character {
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
</style>
