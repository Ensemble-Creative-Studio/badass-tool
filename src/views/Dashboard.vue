<script setup>
import { ref } from 'vue'
import Draggable from 'vuedraggable/src/vuedraggable'
import Film from '../components/Film.vue'

import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

const filmContainer = ref(null)
const films = ref([])
const index = ref(0)
const drag = ref(false)

const createNewFilm = () => {
  const newFilm = {
    id: Date.now(),
    title: `Film ${index.value++}`,
  }
  films.value.push(newFilm)
}

// create a computed property for the drag options in vue 3
const dragOptions = {
  animation: 300,
  ghostClass: 'Film--ghost',
  chosenClass: 'Film--chosen',
  dragClass: 'Film--is-dragging',
  forceFallback: true,
  fallbackClass: 'Film--fallback',
  fallbackOnBody: true,
  fallbackTolerance: 0,
  scroll: true,
  scrollSensitivity: 30,
  scrollSpeed: 10,
}
</script>

<template>
  <div class="Dashboard">
    <header class="Dashboard__header">
      <button @click="createNewFilm">Create new film</button>
    </header>
    <draggable
      class="Dashboard__container"
      ref="filmContainer"
      v-model="films"
      v-bind="dragOptions"
      group="films"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
    >
      <template #item="{ element }">
        <Film :key="element.id" :film="element" />
      </template>
    </draggable>
    <vue-json-pretty :data="{ films }" />
  </div>
</template>

<style lang="scss" scoped>
.Dashboard {
  margin: 1rem;

  &__header {
    margin-bottom: 1rem;
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
    margin-bottom: 1rem;
  }
}

// .flip-list {
//   transition: transform 2s;
// }
</style>
