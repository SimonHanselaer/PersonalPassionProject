import axios from "axios";

// const corsFix = "https://cors-anywhere.herokuapp.com/"
// const baseDomain = "https://api-v3.igdb.com";
// const baseURL = `${corsFix}${baseDomain}/games`;

// const RepositoryGames = axios.create({
//     baseURL,
//     method: 'POST',
//     headers: {
//         Accept: "application/json",
//         "user-key": "bb1628f3841097cc6c575a5621692f75",
//         "x-requested-with": "localhost"
//     }
// });

//GetDayOfYear-----------------------------------------------------------------
const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
const oneDay = 1000 * 60 * 60 * 24;
const day = Math.floor(diff / oneDay);

//-----------------------------------------------------------------------------

export default {
    async getPopularGames() {
        const config = {
            method: "POST",
            url:
                "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
            headers: {
                Accept: "application/json",
                "user-key": "bb1628f3841097cc6c575a5621692f75",
                "x-requested-with": "localhost"
            },
            data: "fields name; limit 5; sort popularity desc; where rating_count > 100 & rating > 70;"
        };

        let response = await axios(config);

        return response;
    },

    async getSpotlightGame() {
        const config = {
            method: "POST",
            url:
                "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
            headers: {
                Accept: "application/json",
                "user-key": "bb1628f3841097cc6c575a5621692f75",
                "x-requested-with": "localhost"
            },
            data:
                `fields name; limit ${day}; sort popularity desc; where rating_count > 100;`
        };

        let response = await axios(config);

        return response;
    },

    async getCover(id) {
        const config = {
            method: "POST",
            url:
                "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/covers",
            headers: {
                Accept: "application/json",
                "user-key": "bb1628f3841097cc6c575a5621692f75",
                "x-requested-with": "localhost"
            },
            data: `fields *; where game = ${id}; limit 1;`
        };

        let response = await axios(config);

        return response;
    }
};
