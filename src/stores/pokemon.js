// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemons: [],
    pokemonDetail: {},
  }),
  getters: {
    getPokemons(state) {
      return state.pokemons;
    },
    getPokemonDetail(state) {
      return state.pokemonDetail;
    },
  },
  actions: {
    async fetchPokemons(limit = 10000, offset = 0) {
      try {
        const res = await axios.get(`pokemon?limit=${limit}&offset=${offset}`);
        this.pokemons = [...this.pokemons, ...res.data.results];
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchPokemon(url) {
      try {
        const pokeInfo = await axios.get(url);
        // const form = await axios.get(pokeInfo.data.forms[0].url);
        // this.pokemonDetail = { pokemon: pokeInfo, form: form };
        this.pokemonDetail = pokeInfo;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
