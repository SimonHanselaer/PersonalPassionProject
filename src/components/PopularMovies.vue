<template>
  <div class="popular popularMovies">
    <h2 class="header-2">Popular movies</h2>
    <moviesList v-if="!isLoadingMovies & !isLoadingConfig" :movies="computedMovies">
      <template slot-scope="movie">
        <h3 class="title">{{ movie.title }}</h3>
        <img
          class="imageMedia"
          v-bind:src="
            config.images.base_url +
              config.images.poster_sizes[4] +
              movie.poster_path
          "
          width="200"
        />
        <p class="visually-hidden">{{movie.id}}</p>

        <ApolloMutation
          :mutation="require('../graphql/AddMediaItem.gql')"
          :variables="{
            input: {
              mediaItemId: movie.id,
              mediaTitle: movie.title,
              mediaImage: config.images.base_url + config.images.poster_sizes[4] + movie.poster_path
            },
          }"
        >
          <template slot-scope="{ mutate }">
            <button @click="mutate()">Add to list</button>
          </template>
        </ApolloMutation>
      </template>
    </moviesList>
  </div>
</template>

<script>
import moviesList from "./MoviesList";
import { RepositoryFactory } from "./../repositories/repositoryFactory";
const MediaRepository = RepositoryFactory.get("media");

export default {
  name: "popularmovies",
  components: { moviesList },
  data() {
    return {
      isLoadingMovies: false,
      isLoadingConfig: false,
      movies: [],
      config: [],
      mediaItemId: 0
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
    },
    addToList() {}
  },
  computed: {
    computedMovies() {
      return this.movies.slice(0, 5);
    }
  }
};
</script>
