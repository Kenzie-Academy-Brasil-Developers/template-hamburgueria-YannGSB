import axios from "axios";

export const kenzieBurgerApi = axios.create({
  baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com/",
  timeout: 5 * 1000,
});

