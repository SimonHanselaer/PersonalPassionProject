<template>
  <div class="popularGames">
    <h2>Popular games</h2>
    <gamesList v-if="!isLoadingGames & !isLoadingCovers" :games="games" :key="getUpdate">
      <template slot-scope="game" v-if="game.cover">
        <h3 class="text-base">{{game.name}}</h3>
        <img
          v-bind:src="'https://images.igdb.com/igdb/image/upload/t_720p/' + game.cover + '.jpg'"
          width="200"
        />
      </template>
    </gamesList>
  </div>
</template>

<script>
import gamesList from "./gamesList";
import { RepositoryFactory } from "./../repositories/repositoryFactory";
const MediaRepository = RepositoryFactory.get("games");

export default {
  name: "populargames",
  components: { gamesList },
  data() {
    return {
      isLoadingGames: false,
      isLoadingCovers: true,
      games: [],
      getUpdate: 0
    };
  },
  created() {
    this.fetchGames().then(this.fetchCovers);
  },
  methods: {
    async fetchGames() {
      this.isLoadingGames = true;
      const { data } = await MediaRepository.getPopularGames();
      this.isLoadingGames = false;
      this.games = data;
    },
    async fetchCovers() {
      this.isLoadingCovers = true;
      this.games.forEach(game => {
        MediaRepository.getCover(game.id).then(cover => {
          game.cover = cover.data[0].image_id;
          this.getUpdate++;
        });
      });
      this.isLoadingCovers = false;
    }
  }
};
</script>