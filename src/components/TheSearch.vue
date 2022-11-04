<script setup></script>

<template>
  <div class="container px-0">
    <form @submit.prevent="">
      <label for="characters" class="d-block">Characters</label>
      <div class="row mx-auto">
        <div class="col-8 col-sm-9 col-lg-10 px-0">
          <input
            type="search"
            name="characters"
            id="characters"
            placeholder="Enter character name..."
          />
        </div>
        <div class="col ml-2 ml-sm-3 ml-xl-4 px-0">
          <input type="submit" value="Find" />
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
    background-image: linear-gradient(to right, $myblue, $myblue);
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
  }
}
</style>
