import axios, { AxiosInstance } from "axios";
import { setupInterceptors } from "./apiInterceptors";

const DIRECTUS_URL = "https://console.portal.aiya.ai";

const api: AxiosInstance = axios.create({
  baseURL: DIRECTUS_URL,
});

setupInterceptors(api);

export default api;
