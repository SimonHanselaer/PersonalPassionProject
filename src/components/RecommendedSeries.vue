<template>
  <div class="recommended recommendedSeries" v-if="computedWatchedSerie">
    <h2 class="header-2">
      Because you watched
      <span class="header-2-strong">{{computedWatchedSerie.name}}</span>
    </h2>
    <MediaList v-if="!computedLoadingStatus & !computedLoadingStatusConfig" :media="computedSeries">
      <MediaTile
        slot-scope="mediaItem"
        :title="mediaItem.name"
        :src="
          computedConfig.images.base_url +
            computedConfig.images.poster_sizes[4] +
            mediaItem.poster_path
        "
        :id="mediaItem.id"
        :mediaType="'tv'"
        :duration="0"
        :releaseDate="mediaItem.first_air_date"
      />
    </MediaList>
  </div>
</template>

<script>
import store from "./../store/index";
import MediaList from "./MediaList";
import MediaTile from "./MediaTile";

export default {
  name: "recommendedseries",
  components: { MediaList, MediaTile },
  created() {
    this.$store.dispatch("fetchConfig");
    this.$store.dispatch("fetchRecommendedSeries");
  },
  computed: {
    computedWatchedSerie() {
      return store.state.lastWatchedSerie;
    },
    computedSeries() {
      return store.state.recommendedSeries;
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
