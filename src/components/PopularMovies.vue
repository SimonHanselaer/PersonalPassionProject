<template>
  <div class="popular popularMovies">
    <h2 class="header-2">Popular movies</h2>
    <MediaList v-if="!computedLoadingStatus & !computedLoadingStatusConfig" :media="computedMovies">
      <MediaTile
        slot-scope="mediaItem"
        :title="mediaItem.title"
        :src="computedConfig.images.base_url + computedConfig.images.poster_sizes[4] + mediaItem.poster_path"
        :id="mediaItem.id"
      />
    </MediaList>
  </div>
</template>

<script>
import store from "./../store/index";
import MediaList from "./MediaList";
import MediaTile from "./MediaTile";

export default {
  name: "popularmovies",
  components: { MediaList, MediaTile },
  created() {
    this.$store.dispatch("fetchPopularMovies");
    this.$store.dispatch("fetchConfig");
  },
  computed: {
    computedMovies() {
      return store.state.popularMovies;
    },
    computedConfig() {
      return store.state.config;
    },
    computedLoadingStatus() {
      return store.state.loadingStatusPopular;
    },
    computedLoadingStatusConfig() {
      return store.state.loadingStatusConfig;
    }
  }
};
</script>
