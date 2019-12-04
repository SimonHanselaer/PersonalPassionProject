import Vue from "vue";
import Vuex from "vuex";

import { RepositoryFactory } from "./../repositories/repositoryFactory";
const MediaRepository = RepositoryFactory.get("media");
const GameRepository = RepositoryFactory.get("games");
const FirestoreRepository = RepositoryFactory.get("firestore");


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: localStorage.uid,
    userLists: [],
    listName: "",
    listItems: [],
    modifiedList: [],
    loadingStatus: false,
    loadingStatusConfig: false,
    loadingStatusSpotlight: false,
    loadingStatusPopular: false,
    loadingStatusUpcoming: false,
    loadingStatusDetails: false,
    popularSeries: [],
    popularMovies: [],
    popularGames: [],
    upcomingMovies: [],
    spotlightMovie: [],
    spotlightMovieDetails: [],
    spotlightSerie: [],
    spotlightSerieDetails: [],
    spotlightGame: [],
    searchResults: [],
    mediaDetails: [],
    mediaDetailsCredits: [],
    mediaDetailsExternalId: [],
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

    SET_LOADING_STATUS_DETAILS(state, status) {
      state.loadingStatusDetails = status;
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
    },

    SET_SPOTLIGHT_GAME(state, spotlightGame) {
      state.spotlightGame = spotlightGame;
    },

    SET_SEARCH_RESULTS(state, searchResults) {
      state.searchResults = searchResults;
    },

    SET_DETAILS(state, mediaDetails) {
      state.mediaDetails = mediaDetails;
    },

    SET_DETAILS_CREDITS(state, mediaDetailsCredits) {
      state.mediaDetailsCredits = mediaDetailsCredits;
    },

    SET_DETAILS_EXTERNAL_ID(state, mediaDetailsExternalId) {
      state.mediaDetailsExternalId = mediaDetailsExternalId;
    },

    ON_LOGIN(state, user) {
      state.user = user;
      localStorage.setItem("uid", user.uid);
    },
    SET_USER_LISTS(state, userlists) {
      state.userLists = userlists;
    },
    SET_LIST_NAME(state, name) {
      state.listName = name;
    },
    SET_LIST_ITEMS(state, items) {
      state.listItems = items;
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
    async fetchSpotlightGame(context) {
      context.commit('SET_LOADING_STATUS_SPOTLIGHT', true);
      let { data } = await GameRepository.getSpotlightGame();
      context.commit('SET_SPOTLIGHT_GAME', data[data.length - 1]);

      data = await GameRepository.getCover(context.state.spotlightGame.id);
      context.state.spotlightGame.cover = data.data[0].image_id;

      data = await GameRepository.getGenre(context.state.spotlightGame.genres[0]);
      context.state.spotlightGame.genre = data.data[0].name;

      context.commit('SET_LOADING_STATUS_SPOTLIGHT', false);
    },

    async fetchSearchQuery(context, query) {
      let { data } = await MediaRepository.getSearchResults(query);
      context.commit('SET_SEARCH_RESULTS', data.results.splice(0, 5));
    },

    async fetchDetails(context, props) {
      let { data } = [];
      switch (props.type) {
        case 'movie':
          context.commit('SET_LOADING_STATUS_DETAILS', true);

          data = await MediaRepository.getMovieDetails(props.id);
          context.commit('SET_DETAILS', data.data);

          data = await MediaRepository.getMovieCredits(props.id);
          context.commit('SET_DETAILS_CREDITS', data.data);

          context.commit('SET_LOADING_STATUS_DETAILS', false);
          break;
        case 'tv':
          context.commit('SET_LOADING_STATUS_DETAILS', true);

          data = await MediaRepository.getSerieDetails(props.id);
          context.commit('SET_DETAILS', data.data);

          data = await MediaRepository.getSerieCredits(props.id);
          context.commit('SET_DETAILS_CREDITS', data.data);

          data = await MediaRepository.getSerieExternalId(props.id);
          context.commit('SET_DETAILS_EXTERNAL_ID', data.data);

          context.commit('SET_LOADING_STATUS_DETAILS', false);

          break;

        case 'game':
          context.commit('SET_LOADING_STATUS_DETAILS', true);

          data = await GameRepository.getDetails(props.id);
          context.commit('SET_DETAILS', data.data[0]);

          data = await GameRepository.getCover(context.state.mediaDetails.id);
          context.state.mediaDetails.cover = data.data[0].image_id;

          data = await GameRepository.getGenre(context.state.mediaDetails.genres[0]);
          context.state.mediaDetails.genre = data.data[0].name;

          data = await GameRepository.getScreenshot(context.state.mediaDetails.id);
          context.state.mediaDetails.screenshot = data.data[0].image_id

          context.commit('SET_LOADING_STATUS_DETAILS', false);

          break;

        default:
          break;
      }
    },
    async addUser(context, props) {
      console.log(context);
      FirestoreRepository.addUser(props);
    },
    async addUserList(context, props) {
      console.log(context);
      FirestoreRepository.addUserList(props);
    },
    async addWatchlistItem(context, props) {
      console.log(context);
      FirestoreRepository.addWatchlistItem(props);
    },
    async getLists(context) {
      let data = await FirestoreRepository.getLists();
      context.commit('SET_USER_LISTS', data);
    },
    async getListName(context, props) {
      let data = await FirestoreRepository.getListName(props);
      context.commit('SET_LIST_NAME', data);
    },
    async getListItems(context, props) {
      let data = await FirestoreRepository.getListItems(props);
      context.commit('SET_LIST_ITEMS', data);
    },

    async modifyList(context, props) {

      // filter------------------------------------------------------------------------------------------------------------------------------

      const todayDate = new Date().toISOString().slice(0, 10);

      context.state.modifiedList = await context.state.listItems.filter(mediaItem => {
        return (
          mediaItem.type == props.type[0] ||
          mediaItem.type == props.type[1] ||
          mediaItem.type == props.type[2]
        );
      })

      if (props.released) {
        context.state.modifiedList = await context.state.modifiedList.filter(mediaItem => {
          return (
            mediaItem.releaseDate < todayDate
          );
        })
      }

      // Sort------------------------------------------------------------------------------------------------------------------------------

      switch (props.sortBy) {
        case "newestAdded":
          context.state.modifiedList = context.state.modifiedList.sort(sortByNewest)
          break;

        case "name":
          context.state.modifiedList = context.state.modifiedList.sort(sortByName)
          break;

        case "releaseDate":
          context.state.modifiedList = context.state.modifiedList.sort(sortByRelease)
          break;

        default:
          context.state.modifiedList = context.state.modifiedList.sort(sortByNewest)
          break;
      }

      function sortByNewest(a, b) {
        const mediaItemA = a.addedOn;
        const mediaItemB = b.addedOn;

        let comparison = 0;
        if (mediaItemA > mediaItemB) {
          comparison = -1;
        } else if (mediaItemA < mediaItemB) {
          comparison = 1;
        }

        return comparison;
      }

      function sortByName(a, b) {
        const mediaItemA = a.name.toUpperCase();
        const mediaItemB = b.name.toUpperCase();

        let comparison = 0;
        if (mediaItemA > mediaItemB) {
          comparison = 1;
        } else if (mediaItemA < mediaItemB) {
          comparison = -1;
        }

        return comparison;
      }

      function sortByRelease(a, b) {
        const mediaItemA = a.releaseDate;
        const mediaItemB = b.releaseDate;

        let comparison = 0;
        if (mediaItemA > mediaItemB) {
          comparison = -1;
        } else if (mediaItemA < mediaItemB) {
          comparison = 1;
        }

        return comparison;
      }
    }
  },
  modules: {}
});
