<template>
  <div class="card">
    <img class="card__img" :src="pokemon.image_s" :alt="pokemon.name" />
    <div class="card__content">
      <h3 class="card__title">
        {{ pokemon.name }}
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Pokemon } from "~~/types";

export default defineComponent({
  props: {
    pokemon: {
      type: Object as PropType<Pokemon>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #888;
  border-radius: 20px;
  box-shadow: 0 3px 6px -2px #000a3b34;

  &__img {
    width: 100%;
    height: auto;
  }

  &__content {
    flex: 1;
  }

  &__title {
    font-size: 16px;
  }
}
</style>
