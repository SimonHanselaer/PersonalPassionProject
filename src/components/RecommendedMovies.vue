<template>
  <div class="recommended recommendedMovies" v-if="computedWatchedMovie">
    <h2 class="header-2">
      Because you watched
      <span class="header-2-strong">{{computedWatchedMovie.title}}</span>
    </h2>
    <MediaList v-if="!computedLoadingStatus & !computedLoadingStatusConfig" :media="computedMovies">
      <MediaTile
        slot-scope="mediaItem"
        :title="mediaItem.title"
        :src="
          computedConfig.images.base_url +
            computedConfig.images.poster_sizes[4] +
            mediaItem.poster_path
        "
        :id="mediaItem.id"
        :mediaType="'movie'"
        :duration="0"
        :releaseDate="mediaItem.release_date"
      />
    </MediaList>
  </div>
</template>

<script>
import store from "./../store/index";
import MediaList from "./MediaList";
import MediaTile from "./MediaTile";

export default {
  name: "recommendedmovies",
  components: { MediaList, MediaTile },
  created() {
    this.$store.dispatch("fetchRecommendedMovies");
    this.$store.dispatch("fetchConfig");
  },
  computed: {
    computedWatchedMovie() {
      return store.state.lastWatchedMovie;
    },
    computedMovies() {
      return store.state.recommendedMovies;
    },
    computedConfig() {
      return store.state.config;
    },

    computedLoadingStatus() {
      return store.state.loadingStatusRecommended;
    },
    computedLoadingStatusConfig() {
      return store.state.loadingStatusConfig;
    }
  }
};
</script>
