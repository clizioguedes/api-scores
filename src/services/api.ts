import axios from "axios";

const API_FUTEBOL_TOKEN_ACCESS = `Bearer test_c58073035cf8156e4464ee7d6c16c0`;

const instance = axios.create({
  baseURL: "https://api.api-futebol.com.br/v1/",
});

instance.interceptors.request.use((config) => {
  const token = API_FUTEBOL_TOKEN_ACCESS;
  config.headers.Authorization = token;
  return config;
});

export default instance;
