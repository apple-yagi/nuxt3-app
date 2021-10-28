<script setup lang="ts">
const { data: pokemonsResponse } = await useFetch("/api/pokemons");
</script>

<template>
  <ul>
    <li v-for="(pokemon, i) in pokemonsResponse.results" :key="i">
      <img :src="pokemon.image_m" :alt="pokemon.name" />
      {{ pokemon.name }}
    </li>
  </ul>
</template>