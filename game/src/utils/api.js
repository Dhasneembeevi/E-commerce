import axios from "axios";
const STRAPI_ACCESS_KEY = "0b1c6ba745492e0e6e3a5a29d63b75f3df336c6dedfd5975bc6ec1778ed7099c0c847e2ff1b0d30cd09b374dce902eaa2c98b70549ec406523f1bd7981ca332d846bfd18307af827f74ee1301b60b5a240373a8a136d47e4403a890937004464ff20f072d33cb4f54747906dbe4aa9b706874f80cfd755dac5c719c92a6f861c"
const STRAPI_URL = "http://localhost:1337"

export const gamesDatafromApi = async (url) => {
    try {
        const gameData = await axios.get(`${STRAPI_URL}/api/games`, {
            headers: {
                Authorization: "bearer " + STRAPI_ACCESS_KEY
            }
        })
        // console.log(gameData);
        return gameData;
    } catch (err) {
        console.log(err);
        return err
    }
}