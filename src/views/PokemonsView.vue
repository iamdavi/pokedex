<script setup>
import PokemonList from "@/components/PokemonList.vue";
import PokemonDetail from "@/components/PokemonDetail.vue";
</script>

<template>
  <h1>Pokemons</h1>
  <el-row>
    <el-col :sm="24" :md="8" id="pokemon-list-wrapper">
      <PokemonList />
    </el-col>
    <el-col :sm="24" :md="16">
      <PokemonDetail />
    </el-col>
  </el-row>
</template>

<style scoped>
#pokemon-list-wrapper {
  margin-bottom: 24px;
}
</style>
