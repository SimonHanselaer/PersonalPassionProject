<template>
  <div class="popularGames">
    <h2 class="header-2">Popular games</h2>
    <gamesList v-if="!isLoadingGames" :games="games">
      <template slot-scope="game">
        <h3 class="title">{{ game.name }}</h3>
        <img
          v-if="game.cover"
          class="imageMedia"
          v-bind:src="
            'https://images.igdb.com/igdb/image/upload/t_720p/' +
              game.cover +
              '.jpg'
          "
          height="300"
          align="middle"
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
  async created() {
    await this.fetchGames();
    await this.fetchCovers();
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
      for (let i = 0; i < this.games.length; i++) {
        const cover = await MediaRepository.getCover(this.games[i].id);
        this.games[i].cover = cover.data[0].image_id;
      }
      this.isLoadingCovers = false;
      this.games = this.games.concat();
    }
  }
};
</script>
