<template>
  <div class="popularMovies">
    <h2>Popular movies</h2>
    <popularmoviesList v-if="!isLoadingMovies & !isLoadingConfig" :movies="computedMovies">
      <template slot-scope="movie">
        <h3 class="text-base">{{movie.title}}</h3>
        <img
          v-bind:src="config.images.base_url + config.images.poster_sizes[4] + movie.poster_path"
          width="200"
        />
      </template>
    </popularmoviesList>
  </div>
</template>

<script>
import popularmoviesList from "./PopularMoviesList";
import { RepositoryFactory } from "./../repositories/repositoryFactory";
const MediaRepository = RepositoryFactory.get("media");

export default {
  name: "popularmovies",
  components: { popularmoviesList },
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
      const { data } = await MediaRepository.getPopularMovies();
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