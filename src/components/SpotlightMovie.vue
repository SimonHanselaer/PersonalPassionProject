<template>
  <div class="spotlight spotlightMovie">
    <h2 class="header-2">Spotlight</h2>
    <article v-if="!isLoadingMovies & !isLoadingConfig & !isLoadingDetails" class="spotlightLayout">
      <h3 class="spotlightTitle header-3">{{ computedMovie.title }}</h3>
      <img
        class="spotlightImage"
        v-bind:src="
          config.images.base_url +
            config.images.poster_sizes[4] +
            computedMovie.poster_path
        "
        width="200"
      />
      <p class="spotlightGenre details">{{movieDetails.genres[0].name}}</p>
      <p class="spotlightRuntime details">{{computedRuntime}}</p>
      <p class="spotlightReleaseYear details">{{computedReleaseYear}}</p>
      <p class="spotlightOverview">{{movieDetails.overview}}</p>
      <div class="spotlightBorder"></div>
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
      isLoadingDetails: false,
      movie: [],
      config: [],
      movieDetails: [],
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
      this.fetchDetails();
    },
    async fetchConfig() {
      this.isLoadingConfig = true;
      const { data } = await MediaRepository.getConfig();
      this.isLoadingConfig = false;
      this.config = data;
    },
    async fetchDetails() {
      this.isLoadingDetails = true;
      const { data } = await MediaRepository.getMovieDetails(
        this.movie[this.refactoredNumber].id
      );
      this.movieDetails = data;
      this.isLoadingDetails = false;
    }
  },
  computed: {
    computedMovie() {
      return this.movie[this.refactoredNumber];
    },
    computedReleaseYear() {
      return this.movieDetails.release_date.slice(0, 4);
    },
    computedRuntime() {
      const hours = Math.floor(this.movieDetails.runtime / 60);
      const minutes = this.movieDetails.runtime % 60;
      const convertedTime = `${hours}h ${minutes}min`;

      return convertedTime;
    }
  }
};
</script>
