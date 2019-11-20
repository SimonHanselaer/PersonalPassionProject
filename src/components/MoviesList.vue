<template>
  <div class="movies--list">
    <div v-for="movie in movies" v-bind="{movie}" :key="movie.id">
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
