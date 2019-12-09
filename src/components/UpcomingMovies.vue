<template>
  <div class="upcoming upcomingMovies">
    <h2 class="header-2">Upcoming movies</h2>
    <MediaList v-if="!computedLoadingStatus" :media="computedMovies">
      <MediaTile
        slot-scope="movie"
        :title="movie.title"
        :src="
          computedConfig.images.base_url +
            computedConfig.images.poster_sizes[4] +
            movie.poster_path
        "
        :id="movie.id"
        :mediaType="'movie'"
        :duration="0"
        :releaseDate="movie.release_date"
      />
    </MediaList>
  </div>
</template>

<script>
import store from "./../store/index";
import MediaList from "./MediaList";
import MediaTile from "./MediaTile";

export default {
  name: "upcomingmovies",
  components: { MediaList, MediaTile },
  created() {
    this.$store.dispatch("fetchUpcomingMovies");
    this.$store.dispatch("fetchConfig");
  },
  computed: {
    computedMovies() {
      return store.state.upcomingMovies;
    },
    computedConfig() {
      return store.state.config;
    },
    computedLoadingStatus() {
      return store.state.loadingStatus;
    }
  }
};
</script>
