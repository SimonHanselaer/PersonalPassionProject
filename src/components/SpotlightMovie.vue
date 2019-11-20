<template>
  <div class="spotlightMovie">
    <h2>Spotlight</h2>
    <article v-if="!isLoadingMovies & !isLoadingConfig">
      <h3>{{computedMovie.title}}</h3>
      <img
        v-bind:src="config.images.base_url + config.images.poster_sizes[4] + computedMovie.poster_path"
        width="200"
      />
    </article>
  </div>
</template>

<script>
import { RepositoryFactory } from "./../repositories/repositoryFactory";
const MediaRepository = RepositoryFactory.get("media");

export default {
  name: "spotlightmovie",
  data() {
    return {
      isLoadingMovies: false,
      isLoadingConfig: false,
      movie: [],
      config: [],
      PageNumber: 0,
      refactoredNumber: 0
    };
  },
  created() {
    this.fetchMovies();
    this.fetchConfig();
  },
  methods: {
    async fetchMovies() {
      this.isLoadingMovies = true;
      const { data } = await MediaRepository.getSpotlightMovie();
      this.isLoadingMovies = false;
      this.PageNumber = data.page;
      this.refactoredNumber = Math.ceil((this.PageNumber / 33) * 20);
      this.movie = data.results;
    },
    async fetchConfig() {
      this.isLoadingConfig = true;
      const { data } = await MediaRepository.getConfig();
      this.isLoadingConfig = false;
      this.config = data;
    }
  },
  computed: {
    computedMovie() {
      return this.movie[this.refactoredNumber];
    }
  }
};
</script>