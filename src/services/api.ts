import axios from "axios";

const API_FUTEBOL_TOKEN_ACCESS = `Bearer test_c58073035cf8156e4464ee7d6c16c0`;

const instance = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "X-RapidAPI-Key": "37788c11de7126f922fd11d2e988a565",
    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  },
});

export default instance;
