import axios from "axios";

const corsFix = "https://cors-anywhere.herokuapp.com/"
const baseDomain = "https://api-v3.igdb.com";
const baseURL = `${corsFix}${baseDomain}/games`;

const RepositoryGames = axios.create({
    baseURL,
    headers: {
        Accept: "application/json",
        "user-key": "bb1628f3841097cc6c575a5621692f75",
        "x-requested-with": "localhost"
    }
});

export default {
    getBestRatedGames() {
        const query = "fields name; limit 10; sort popularity desc; where rating_count > 100 & rating > 90;"

        return RepositoryGames.data({ query });
    }
};
