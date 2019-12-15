<template>
  <div class="popular popularGames">
    <h2 class="header-2">Popular games</h2>
    <MediaList v-if="!computedLoadingStatus" :media="computedGames">
      <MediaTile
        slot-scope="mediaItem"
        :title="mediaItem.name"
        :src="
          'https://images.igdb.com/igdb/image/upload/t_720p/' +
            mediaItem.cover +
            '.jpg'
        "
        :id="mediaItem.id"
        :mediaType="'game'"
        :duration="0"
        :releaseDate="mediaItem.first_release_date"
      />
    </MediaList>
    <Loading v-else />
  </div>
</template>

<script>
import store from "./../store/index";
import MediaList from "./MediaList";
import MediaTile from "./MediaTile";
import Loading from "./Loading";

export default {
  name: "populargames",
  components: { MediaList, MediaTile, Loading },
  created() {
    this.$store.dispatch("fetchPopularGames");
  },
  computed: {
    computedGames() {
      return store.state.popularGames;
    },
    computedLoadingStatus() {
      return store.state.loadingStatusPopular;
    }
  }
};
</script>
