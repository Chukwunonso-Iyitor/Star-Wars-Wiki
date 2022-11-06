import { defineStore } from "pinia";
import { ref } from "vue";

export const useCharacterStore = defineStore("CharacterStore", () => {
  const data = ref(null);
  const error = ref(null);
  let current = ref(1);

  let url = ref([`https://swapi.dev/api/people/?page=${current.value}`]);
  console.log(url.value);

  fetch(url.value)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));

  return { data, error, current };
});
