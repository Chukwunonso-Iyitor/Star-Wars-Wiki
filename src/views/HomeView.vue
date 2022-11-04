<script setup>
import TheSearch from "../components/TheSearch.vue";
import CharacterCards from "../components/CharacterCards.vue";
</script>

<template>
  <header class="container py-5 d-flex justify-content-center">
    <TheSearch />
  </header>
  <main class="mb-5">
    <CharacterCards />
  </main>
</template>

<style lang="scss" scoped></style>
