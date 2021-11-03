<template>
  <v-header />
  <slot />
  <v-footer />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

:root {
  font-size: 10px;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
