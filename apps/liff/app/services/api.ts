import axios, { AxiosInstance } from "axios";
import { setupInterceptors } from "./apiInterceptors";

const api: AxiosInstance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

setupInterceptors(api);

export default api;
