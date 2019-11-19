import axios from "axios";

const baseDomain = "https://api.themoviedb.org/3";
const APIKey = "?api_key=36421093ef1319648160ea0b83f490ad";

const config = "/configuration";
const popularMovies = "/movie/popular";

export default {
    getPopularMovies() {
        return axios.get(`${baseDomain}${popularMovies}${APIKey}`);
    },

    getConfig() {
        return axios.get(`${baseDomain}${config}${APIKey}`);
    }
};
