import axios from "axios";

const instance = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "X-RapidAPI-Key": "37788c11de7126f922fd11d2e988a565",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
});

export default instance;
