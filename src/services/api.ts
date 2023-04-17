import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.football-data.org/v4",
  headers: {
    "X-Auth-Token": "67b129ae2a374845a83a50953d24d32c",
  },
});

export default instance;
