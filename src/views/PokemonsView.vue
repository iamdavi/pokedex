<script setup>
import { onMounted } from "vue";
import { usePokemonStore } from "@/stores/pokemon";
import { computed } from "vue";

let limit = 50;
let counter = 0;

const store = usePokemonStore();
// const getPokemons = computed(() => store.getPokemons());
const pokemons = computed(() => store.pokemons);

const fetchPokemons = () => {
  store.fetchPokemons(limit, counter * limit);
  counter++;
};
console.log("PokemonView eliminar");

const getLastPathParam = (url) => {
  return [...new Set(url.split("/"))].pop();
};

const getPokemonContent = (url) => {
  console.log(url);
};

onMounted(() => {
  fetchPokemons();
});
</script>

<template>
  <h1>Pokemons</h1>
  <el-row>
    <el-col :sm="24" :md="8">
      <ul class="infinite-list" v-infinite-scroll="fetchPokemons">
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
    </el-col>
    <el-col :sm="24" :md="16"></el-col>
  </el-row>
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
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
</style>
