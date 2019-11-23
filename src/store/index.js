import Vue from "vue";
import Vuex from "vuex";

import { RepositoryFactory } from "./../repositories/repositoryFactory";
const MediaRepository = RepositoryFactory.get("media");
const GameRepository = RepositoryFactory.get("games");


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadingStatus: false,
    loadingStatusConfig: false,
    loadingStatusSpotlight: false,
    loadingStatusPopular: false,
    loadingStatusUpcoming: false,
    popularSeries: [],
    popularMovies: [],
    popularGames: [],
    upcomingMovies: [],
    spotlightMovie: [],
    spotlightMovieDetails: [],
    spotlightSerie: [],
    spotlightSerieDetails: [],
    refactoredNumber: 0,
    config: []
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },

    SET_LOADING_STATUS_CONFIG(state, status) {
      state.loadingStatusConfig = status;
    },

    SET_LOADING_STATUS_SPOTLIGHT(state, status) {
      state.loadingStatusSpotlight = status;
    },

    SET_LOADING_STATUS_POPULAR(state, status) {
      state.loadingStatusPopular = status;
    },

    SET_LOADING_STATUS_UPCOMING(state, status) {
      state.loadingStatusUpcoming = status;
    },

    SET_CONFIG(state, config) {
      state.config = config;
    },

    SET_POPULAR_SERIES(state, popularSeries) {
      state.popularSeries = popularSeries;
    },

    SET_POPULAR_MOVIES(state, popularMovies) {
      state.popularMovies = popularMovies;
    },

    SET_UPCOMING_MOVIES(state, upcomingMovies) {
      state.upcomingMovies = upcomingMovies;
    },

    SET_SPOTLIGHT_MOVIE(state, spotlightMovieData) {
      state.refactoredNumber = Math.ceil((spotlightMovieData.page / 33) * 20);
      state.spotlightMovie = spotlightMovieData.results[state.refactoredNumber]
    },

    SET_SPOTLIGHT_MOVIE_DETAILS(state, spotlightMovieDetails) {
      state.spotlightMovieDetails = spotlightMovieDetails;
    },

    SET_SPOTLIGHT_SERIE(state, spotlightSerieData) {
      state.refactoredNumber = Math.ceil((spotlightSerieData.page / 33) * 20);
      state.spotlightSerie = spotlightSerieData.results[state.refactoredNumber]
    },

    SET_SPOTLIGHT_SERIE_DETAILS(state, spotlightSerieDetails) {
      state.spotlightSerieDetails = spotlightSerieDetails;
    },

    SET_POPULAR_GAMES(state, popularGames) {
      state.popularGames = popularGames;

    }
  },
  actions: {
    async fetchConfig(context) {
      context.commit('SET_LOADING_STATUS_CONFIG', true);
      const { data } = await MediaRepository.getConfig();
      context.commit('SET_LOADING_STATUS_CONFIG', false);
      context.commit('SET_CONFIG', data);
    },
    async fetchPopularSeries(context) {
      context.commit('SET_LOADING_STATUS_POPULAR', true);
      const { data } = await MediaRepository.getPopularSeries();
      context.commit('SET_LOADING_STATUS_POPULAR', false);
      context.commit('SET_POPULAR_SERIES', data.results.splice(0, 5));
    },
    async fetchPopularMovies(context) {
      context.commit('SET_LOADING_STATUS_POPULAR', true);
      const { data } = await MediaRepository.getPopularMovies();
      context.commit('SET_LOADING_STATUS_POPULAR', false);
      context.commit('SET_POPULAR_MOVIES', data.results.splice(0, 5));
    },
    async fetchUpcomingMovies(context) {
      context.commit('SET_LOADING_STATUS_UPCOMING', true);
      const { data } = await MediaRepository.getUpcomingMovies();
      context.commit('SET_LOADING_STATUS_UPCOMING', false);
      context.commit('SET_UPCOMING_MOVIES', data.results.splice(0, 5));
    },
    async fetchSpotlightMovie(context) {
      context.commit('SET_LOADING_STATUS_SPOTLIGHT', true);
      let { data } = await MediaRepository.getSpotlightMovie();
      context.commit('SET_SPOTLIGHT_MOVIE', data);

      data = await MediaRepository.getMovieDetails(
        context.state.spotlightMovie.id
      );
      context.commit('SET_SPOTLIGHT_MOVIE_DETAILS', data.data);
      context.commit('SET_LOADING_STATUS_SPOTLIGHT', false);
    },
    async fetchSpotlightSerie(context) {
      context.commit('SET_LOADING_STATUS_SPOTLIGHT', true);
      let { data } = await MediaRepository.getSpotlightSerie();
      context.commit('SET_SPOTLIGHT_SERIE', data);

      data = await MediaRepository.getSerieDetails(
        context.state.spotlightSerie.id
      );

      context.commit('SET_SPOTLIGHT_SERIE_DETAILS', data.data);
      context.commit('SET_LOADING_STATUS_SPOTLIGHT', false);
    },
    async fetchPopularGames(context) {
      context.commit('SET_LOADING_STATUS_POPULAR', true);
      const { data } = await GameRepository.getPopularGames();
      context.commit('SET_POPULAR_GAMES', data);

      for (let i = 0; i < context.state.popularGames.length; i++) {
        const cover = await GameRepository.getCover(context.state.popularGames[i].id);
        context.state.popularGames[i].cover = cover.data[0].image_id;
      }

      context.commit('SET_LOADING_STATUS_POPULAR', false);
    },

  },
  modules: {}
});
