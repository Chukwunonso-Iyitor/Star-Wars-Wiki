<script setup>
import { ref } from "vue";
import { query } from "@/stores/query.js";

const search = ref(query);
defineEmits(["findCharacter"]);
</script>

<template>
  <div class="container px-0">
    <form @submit.prevent="$emit('findCharacter'), (search.name = '')">
      <label for="characters" class="d-block">Characters</label>
      <div class="row mx-auto">
        <div class="col-8 col-sm-9 col-lg-10 px-0">
          <input
            type="search"
            name="characters"
            id="characters"
            placeholder="Enter character name..."
            v-model="search.name"
          />
        </div>
        <div class="col ml-2 ml-sm-3 ml-xl-4 px-0">
          <input type="submit" value="Find" :disabled="search.name == ''" />
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
label {
  font-size: 1.5rem;
}
input {
  &[type="search"] {
    padding: 0.5rem 0.8rem;
    width: 100%;
    border-radius: 4px;
    border: 1px solid grey;
    transition: 0.4s ease;
    &:hover {
      border-color: $mypink;
    }
    &:focus {
      border-color: $mypink;
      outline: none;
    }
  }
  &[type="submit"] {
    background-color: $myblue;
    color: $mywhite;
    border: none;
    border-radius: 4px;
    padding: 0.6rem 2.2rem;
    transition: 0.4s ease;
    &:hover {
      scale: 1.1;
    }
    &:active {
      scale: 0.95;
    }
    &[disabled] {
      scale: 1;
      background-color: $mygrey;
    }
  }
}
</style>
