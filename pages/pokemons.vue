<script setup lang="ts">
const { data } = await useFetch("/api/pokemons");
</script>

<template>
  <ul>
    <li v-for="(pokemon, i) in data.pokemonsResponse.results" :key="i">
      <img :src="pokemon.image_m" :alt="pokemon.name" />
      {{ pokemon.name }}
    </li>
  </ul>
</template>