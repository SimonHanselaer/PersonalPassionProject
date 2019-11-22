<template>
  <div class="movies--list listLayout">
    <div
      v-for="movie in movies"
      v-bind="{ movie }"
      :key="movie.id"
      class="mediaTile"
    >
      <slot v-bind="movie"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "movies-list",
  props: {
    movies: {
      type: Array,
      required: true
    }
  }
};
</script>
