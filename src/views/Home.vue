<template>
  <div class="home contentContainer layoutContent">
    <SpotlightMovie />
    <RecommendedMovies />
    <PopularMovies />
    <UpcomingMovies />
  </div>
</template>

<script>
// @ is an alias to /src
import SpotlightMovie from "../components/SpotlightMovie.vue";
import PopularMovies from "../components/PopularMovies.vue";
import UpcomingMovies from "../components/UpcomingMovies.vue";
import RecommendedMovies from "../components/RecommendedMovies.vue";

export default {
  name: "home",
  components: {
    SpotlightMovie,
    PopularMovies,
    UpcomingMovies,
    RecommendedMovies
  }
};
</script>

<style>
@import "../styles/index.css";
@import "../styles/layout.module.css";
</style>
