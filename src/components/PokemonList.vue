<script setup>
import { onMounted } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import { computed } from "vue";

let limit = 50;
let counter = 0;

const store = usePokemonStore();
const pokemons = computed(() => store.pokemons);

const getLastPathParam = (url) => {
  return [...new Set(url.split("/"))].pop();
};

const getPokemonContent = (url) => {
  store.fetchPokemon(url);
};

const getPokemons = () => {
  store.fetchPokemons(limit, counter * limit);
  counter++;
};

onMounted(() => {
  getPokemons();
});
</script>

<template>
  <ul class="infinite-list" v-infinite-scroll="getPokemons">
    <li
      v-for="(pokemon, index) in pokemons"
      :key="index"
      class="infinite-list-item"
      @click="getPokemonContent(pokemon.url)"
    >
      <img
        height="40"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getLastPathParam(
          pokemon.url
        )}.png`"
      />
      {{ pokemon.name }}
    </li>
  </ul>
</template>

<style scoped>
.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: auto;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  margin: 10px;
  text-transform: capitalize;
  border: 2px solid rgb(100, 100, 100);
  padding: 0 12px;
}
.infinite-list .infinite-list-item:hover {
  cursor: pointer;
  background-color: rgb(211, 211, 211);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
