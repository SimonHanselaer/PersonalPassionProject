import axios from "axios";

const baseDomain = "https://api.themoviedb.org/3";
const APIKey = "?api_key=36421093ef1319648160ea0b83f490ad";

const config = "/configuration";
const movieDetails = "/movie/";
const serieDetails = "/tv/";
const popularMovies = "/movie/popular";
const popularSeries = "/tv/popular";
const upcomingMovies = "/movie/upcoming";
const upcomingSeries = "/tv/on_the_air";
const multiSearch = "/search/multi";
const credits = "/credits";
const externalId = "/external_ids";
const initQuery = "&query="
const region = "&region=US";
const page = "&page=";

//spotlight movie -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const TodayDate = new Date();
const valueYear = TodayDate.getFullYear();
const valueMonth = TodayDate.getMonth();
const valueDay = TodayDate.getDate();

const data = [valueYear, valueMonth, valueDay];
let sum = 0;

data.forEach(e => {
  while (e) {
    sum += e % 10;
    e = Math.floor(e / 10);
  }
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export default {
  getConfig() {
    return axios.get(`${baseDomain}${config}${APIKey}`);
  },

  getMovieDetails(id) {
    return axios.get(`${baseDomain}${movieDetails}${id}${APIKey}`);
  },

  getSerieDetails(id) {
    return axios.get(`${baseDomain}${serieDetails}${id}${APIKey}`);
  },

  getMovieCredits(id) {
    return axios.get(`${baseDomain}${movieDetails}${id}${credits}${APIKey}`);
  },

  getSerieCredits(id) {
    return axios.get(`${baseDomain}${serieDetails}${id}${credits}${APIKey}`);
  },

  getSerieExternalId(id) {
    return axios.get(`${baseDomain}${serieDetails}${id}${externalId}${APIKey}`);
  },

  getPopularMovies() {
    return axios.get(`${baseDomain}${popularMovies}${APIKey}`);
  },

  getPopularSeries() {
    return axios.get(`${baseDomain}${popularSeries}${APIKey}`);
  },

  getUpcomingMovies() {
    return axios.get(`${baseDomain}${upcomingMovies}${APIKey}${region}`);
  },

  getUpcomingSeries() {
    return axios.get(`${baseDomain}${upcomingSeries}${APIKey}${region}`);
  },

  getSpotlightMovie() {
    return axios.get(`${baseDomain}${popularMovies}${APIKey}${page}${sum}`);
  },

  getSpotlightSerie() {
    return axios.get(`${baseDomain}${popularSeries}${APIKey}${page}${sum}`);
  },

  getSearchResults(query) {
    return axios.get(`${baseDomain}${multiSearch}${APIKey}${initQuery}${query}`);
  }
};
