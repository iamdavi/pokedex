// import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemons: [],
  }),
  getters: {
    getPokemons(state) {
      return state.pokemons;
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
      return url;
      // try {
      //   const res = await axios.get(`pokemon?limit=${limit}&offset=${offset}`);
      //   this.pokemons = [...this.pokemons, ...res.data.results];
      // } catch (error) {
      //   alert(error);
      //   console.log(error);
      // }
    },
  },
});
