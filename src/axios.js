import axios from "axios";

const instance = axios.create({

   baseUrl:'....' //The Api () cloud function url)
});

export default instance;