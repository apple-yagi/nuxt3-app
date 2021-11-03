<script setup lang="ts">
const { data: pokemonsResponse } = await useFetch("/api/pokemons");
</script>

<template>
  <main class="main">
    <div class="container">
      <v-pokemon-card
        v-for="(pokemon, i) in pokemonsResponse.results"
        :key="i"
        :pokemon="pokemon"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
  max-width: 960px;
  min-height: calc(100vh - 100px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2em 1.8em;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
