<template>
  <div class="spotlight spotlightMovie">
    <h2 class="header-2">Spotlight</h2>
    <article v-if="!computedLoadingStatus & !computedLoadingStatusConfig" class="spotlightLayout">
      <h3 class="spotlightTitle header-3">{{ computedMovie.title }}</h3>
      <img
        class="spotlightImage"
        v-bind:src="
          computedConfig.images.base_url +
            computedConfig.images.poster_sizes[4] +
            computedMovie.poster_path
        "
        width="200"
      />
      <p class="spotlightGenre details">{{computedMovieDetails.genres[0].name}}</p>
      <p class="spotlightRuntime details">{{computedRuntime}}</p>
      <p class="spotlightReleaseYear details">{{computedReleaseYear}}</p>
      <p class="spotlightOverview">{{computedMovieDetails.overview}}</p>
      <div class="spotlightBorder"></div>
    </article>
  </div>
</template>

<script>
import store from "./../store/index";

export default {
  name: "spotlightmovie",
  created() {
    this.$store.dispatch("fetchSpotlightMovie");
    this.$store.dispatch("fetchConfig");
  },
  computed: {
    computedMovie() {
      return store.state.spotlightMovie;
    },
    computedMovieDetails() {
      return store.state.spotlightMovieDetails;
    },
    computedConfig() {
      return store.state.config;
    },
    computedLoadingStatus() {
      return store.state.loadingStatusSpotlight;
    },
    computedLoadingStatusConfig() {
      return store.state.loadingStatusConfig;
    },
    computedReleaseYear() {
      return store.state.spotlightMovieDetails.release_date.slice(0, 4);
    },
    computedRuntime() {
      const hours = Math.floor(store.state.spotlightMovieDetails.runtime / 60);
      const minutes = store.state.spotlightMovieDetails.runtime % 60;
      const convertedTime = `${hours}h ${minutes}min`;

      return convertedTime;
    }
  }
};
</script>
