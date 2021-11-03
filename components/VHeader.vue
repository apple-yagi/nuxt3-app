<template>
  <header class="header">
    <div class="header__container">
      <div class="header__brand">
        <img class="header__icon" src="/img/nuxt-icon.svg" alt="nuxt-icon" />
        <h3 class="header__title">Nuxt3 App</h3>
      </div>
      <ul class="header__menu">
        <li class="header__item">
          <nuxt-link class="header__link" to="/"> Top </nuxt-link>
        </li>
        <li class="header__item">
          <nuxt-link class="header__link" to="/pokemons"> Pokemons </nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  border-bottom: 1px solid gray;

  &__container {
    max-width: 1024px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 10px;
  }

  &__brand {
    display: flex;
    align-items: center;

    * + * {
      margin-left: 6px;
    }
  }

  &__title {
    font-size: 18px;
  }

  &__icon {
    width: 25px;
    height: 25px;
  }

  &__menu {
    display: flex;
  }

  &__item + &__item {
    margin-left: 8px;
  }

  &__link {
    font-size: 14px;
    font-weight: bold;
    color: #aaa;

    &:hover {
      color: #333;
    }
  }
}
</style>
