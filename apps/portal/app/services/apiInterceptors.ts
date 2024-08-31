import { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { store } from "../store";
import { logout } from "../store/slices/authSlice";

export const setupInterceptors = (api: AxiosInstance) => {
  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const state = store.getState().auth;
      if (state.token) {
        config.headers = config.headers || {};
        config.headers["Authorization"] = `Bearer ${state.token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error) => {
      if (error.response?.status === 401) {
        store.dispatch(logout());
      }
      return Promise.reject(error);
    }
  );
};