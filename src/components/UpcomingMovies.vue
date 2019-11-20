
<template>
  <div class="upcomingMovies">
    <h2>Upcoming movies</h2>
    <moviesList v-if="!isLoadingMovies & !isLoadingConfig" :movies="computedMovies">
      <template slot-scope="movie">
        <h3 class="text-base">{{movie.title}}</h3>
        <img
          v-bind:src="config.images.base_url + config.images.poster_sizes[4] + movie.poster_path"
          width="200"
        />
      </template>
    </moviesList>
  </div>
</template>

<script>
import moviesList from "./MoviesList";
import { RepositoryFactory } from "./../repositories/repositoryFactory";
const MediaRepository = RepositoryFactory.get("media");

export default {
  name: "upcomingmovies",
  components: { moviesList },
  data() {
    return {
      isLoadingMovies: false,
      isLoadingConfig: false,
      movies: [],
      config: []
    };
  },
  created() {
    this.fetchMovies();
    this.fetchConfig();
  },
  methods: {
    async fetchMovies() {
      this.isLoadingMovies = true;
      const { data } = await MediaRepository.getUpcomingMovies();
      this.isLoadingMovies = false;
      this.movies = data.results;
    },
    async fetchConfig() {
      this.isLoadingConfig = true;
      const { data } = await MediaRepository.getConfig();
      this.isLoadingConfig = false;
      this.config = data;
    }
  },
  computed: {
    computedMovies() {
      return this.movies.slice(0, 5);
    }
  }
};
</script>