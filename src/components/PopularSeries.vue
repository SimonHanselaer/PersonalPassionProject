<template>
  <div class="popular popularSeries">
    <h2 class="header-2">Popular series</h2>
    <MediaList
      v-if="!computedLoadingStatus && !computedLoadingStatusConfig"
      :media="computedSeries"
    >
      <MediaTile
        slot-scope="serie"
        :title="serie.name"
        :src="
          computedConfig.images.base_url +
            computedConfig.images.poster_sizes[4] +
            serie.poster_path
        "
        :id="serie.id"
        :mediaType="'tv'"
        :duration="0"
        :releaseDate="serie.first_air_date"
      />
    </MediaList>
  </div>
</template>

<script>
import store from "./../store/index";
import MediaList from "./MediaList";
import MediaTile from "./MediaTile";

export default {
  name: "popularseries",
  components: { MediaList, MediaTile },
  created() {
    this.$store.dispatch("fetchConfig");
    this.$store.dispatch("fetchPopularSeries");
  },
  computed: {
    computedSeries() {
      return store.state.popularSeries;
    },
    computedConfig() {
      return store.state.config;
    },
    computedLoadingStatus() {
      return store.state.loadingStatus;
    },
    computedLoadingStatusConfig() {
      return store.state.loadingStatusConfig;
    }
  }
};
</script>
