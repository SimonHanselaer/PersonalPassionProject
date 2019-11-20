import axios from "axios";

const baseDomain = "https://api.themoviedb.org/3";
const APIKey = "?api_key=36421093ef1319648160ea0b83f490ad";

const config = "/configuration";
const popularMovies = "/movie/popular";
const popularSeries = "/tv/popular";
const upcomingMovies = "/movie/upcoming";
const upcomingSeries = "/tv/on_the_air";
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
    }
};
