<template>
  <div class="spotlightGame">
    <h2 class="header-2">Spotlight</h2>
    <article v-if="!computedLoadingStatus" class="spotlightLayout">
      <h3 class="spotlightTitle header-3">{{computedGame.name}}</h3>
      <img
        class="spotlightImage"
        v-bind:src="
          'https://images.igdb.com/igdb/image/upload/t_720p/' +
            computedGame.cover +
            '.jpg'
        "
        width="200"
      />
      <p class="spotlightGenre details">{{computedGame.genre}}</p>
      <p class="spotlightReleaseYear details">{{computedReleaseYear}}</p>
      <p class="spotlightOverview">{{computedGame.summary}}</p>
      <div class="spotlightBorder"></div>
    </article>
    <Loading v-else />
  </div>
</template>

<script>
import store from "./../store/index";
import Loading from "./Loading";

export default {
  name: "spotlightgame",
  components: { Loading },
  created() {
    this.$store.dispatch("fetchSpotlightGame");
  },
  computed: {
    computedGame() {
      return store.state.spotlightGame;
    },
    computedLoadingStatus() {
      return store.state.loadingStatusSpotlight;
    },
    computedReleaseYear() {
      const date = new Date(
        store.state.spotlightGame.first_release_date * 1000
      );
      const year = date.getFullYear();
      return year;
    }
  }
};
</script>
