<script setup lang="ts">
const { data: pokemonsResponse } = await useFetch("/api/pokemons");
</script>

<template>
  <main class="main">
    <ul>
      <li v-for="(pokemon, i) in pokemonsResponse.results" :key="i">
        <img :src="pokemon.image_m" :alt="pokemon.name" />
        {{ pokemon.name }}
      </li>
    </ul>
  </main>
</template>

<style scoped>
.main {
  max-width: 960px;
  min-height: calc(100vh - 100px);
  margin: 0 auto;
}
</style>