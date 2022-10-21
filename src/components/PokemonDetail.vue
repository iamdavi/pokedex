<script setup>
import { usePokemonStore } from "@/stores/pokemon";
import { computed } from "vue";
import pokemonColors from "@/data/pokemonColors";

const store = usePokemonStore();
const pokemonDetail = computed(() => store.pokemonDetail);
const isEmpty = computed(() => Object.keys(pokemonDetail.value).length === 0);
const typeColor = (pokeType) => {
  return {
    backgroundColor: pokemonColors[pokeType],
  };
};
</script>

<template>
  <div v-if="!isEmpty">
    <el-row class="p-0-24">
      <el-col :sm="16" :md="8">
        <el-card
          :body-style="{
            padding: '0px',
            display: 'flex',
            flexDirection: 'column',
          }"
        >
          <img :src="pokemonDetail.data.sprites.front_default" class="image" />
          <div style="padding: 14px;">
            <h3 class="pokemon-name">{{ pokemonDetail.data.name }}</h3>
            <div class="types-wrapper">
              <div
                v-for="(especie, index) in pokemonDetail.data.types"
                :key="index"
              >
                <el-tag
                  class="pokemon-type"
                  effect="dark"
                  :style="typeColor(especie.type.name)"
                  >{{ especie.type.name }}</el-tag
                >
                <el-divider
                  v-if="index != pokemonDetail.data.types.length - 1"
                  direction="vertical"
                />
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- {{ pokemonDetail.form }} -->
  </div>
  <div v-else>Sin Info</div>
</template>

<style scoped>
img {
  margin: auto;
}
.pokemon-name {
  text-align: center;
  text-transform: capitalize;
}

.pokemon-type {
  border: 0;
}

.types-wrapper {
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>
