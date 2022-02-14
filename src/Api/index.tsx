import axios from "axios";

const URL_API_BACKEND = "https://pokeapi.co/api/v2";

export const Api = axios.create({
  baseURL: URL_API_BACKEND,
  headers: { "Content-Type": "application/json" },
});
