<template>
  <div class="spotlight spotlightSerie">
    <h2 class="header-2">Spotlight</h2>
    <article v-if="!computedLoadingStatus & !computedLoadingStatusConfig" class="spotlightLayout">
      <h3 class="spotlightTitle header-3">{{ computedSerie.name }}</h3>
      <img
        class="spotlightImage"
        v-bind:src="
          computedConfig.images.base_url +
            computedConfig.images.poster_sizes[4] +
            computedSerie.poster_path
        "
        width="200"
      />
      <p class="spotlightGenre details">{{computedSerieDetails.genres[0].name}}</p>
      <p class="spotlightRuntime details">{{computedRuntime}}</p>
      <p class="spotlightReleaseYear details">{{computedReleaseYear}}</p>
      <p class="spotlightOverview">{{computedSerieDetails.overview}}</p>
      <div class="spotlightBorder"></div>
    </article>
  </div>
</template>

<script>
import store from "./../store/index";

export default {
  name: "spotlightserie",
  created() {
    this.$store.dispatch("fetchSpotlightSerie");
    this.$store.dispatch("fetchConfig");
  },
  computed: {
    computedSerie() {
      return store.state.spotlightSerie;
    },
    computedSerieDetails() {
      return store.state.spotlightSerieDetails;
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
      return store.state.spotlightSerieDetails.first_air_date.slice(0, 4);
    },
    computedRuntime() {
      const hours = Math.floor(
        store.state.spotlightSerieDetails.episode_run_time[0] / 60
      );
      const minutes =
        store.state.spotlightSerieDetails.episode_run_time[0] % 60;
      const convertedTime = `${hours}h ${minutes}min`;

      return convertedTime;
    }
  }
};
</script>
