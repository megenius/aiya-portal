import axios, { AxiosInstance } from "axios";
import { setupInterceptors } from "./apiInterceptors";

const DIRECTUS_URL = process.env.DIRECTUS_URL || "";

const api: AxiosInstance = axios.create({
  baseURL: DIRECTUS_URL,
});

setupInterceptors(api);

export default api;
