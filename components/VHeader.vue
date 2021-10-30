<template>
  <header class="header">
    <div class="container">
      <h3>Nuxt3 App</h3>
      <ul class="menu">
        <li class="item"><nuxt-link to="/">Top</nuxt-link></li>
        <li class="item"><nuxt-link to="/pokemons">Pokemons</nuxt-link></li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  border-bottom: 1px solid gray;
}

.container {
  max-width: 1024px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 10px;
}

.menu {
  display: flex;
}

.item + .item {
  margin-left: 8px;
}
</style>