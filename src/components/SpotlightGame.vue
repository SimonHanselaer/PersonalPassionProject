<template>
  <div class="spotlightGame">
    <h2>Spotlight</h2>
    <article v-if="!isLoadingGame & !isLoadingCover">
      <h3>{{game.name}}</h3>
      <img
        v-bind:src="'https://images.igdb.com/igdb/image/upload/t_720p/' + cover[0].image_id + '.jpg'"
        width="200"
      />
    </article>
  </div>
</template>

<script>
import { RepositoryFactory } from "./../repositories/repositoryFactory";
const MediaRepository = RepositoryFactory.get("games");

export default {
  name: "spotlightgame",
  data() {
    return {
      isLoadingGame: false,
      isLoadingCover: true,
      game: [],
      cover: []
    };
  },
  created() {
    this.fetchGame().then(this.fetchCover);
  },
  methods: {
    async fetchGame() {
      this.isLoadingGame = true;
      const { data } = await MediaRepository.getSpotlightGame();
      this.isLoadingGame = false;
      this.game = data[data.length - 1];
    },
    async fetchCover() {
      this.isLoadingCover = true;
      const { data } = await MediaRepository.getCover(this.game.id);
      this.isLoadingCover = false;
      this.cover = data;
    }
  }
};
</script>