<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  film: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="Film">
    <h1>{{ film.title }}</h1>
    <p>{{ film.id }}</p>
  </div>
</template>

<style lang="scss" scoped>
.Film {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 1rem;
  grid-column: auto / span 2;
  cursor: move;

  &--is-dragging {
    color: white;
    background-color: grey;
  }

  &--chosen {
    opacity: 1;
  }

  &--ghost {
    opacity: 0;
  }
}
</style>
