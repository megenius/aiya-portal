import api from "./api";
import { store } from "../store";
import { AuthState, SignUpCredential } from "~/@types/auth";

export const login = (email: string, password: string) =>
  api.post<AuthState>("/auth/login", { email, password });

export const refreshTokenApi = async (refreshToken: string) =>
  api
    .post<AuthState>(
      "/auth/refresh",
      {},
      {
        headers: {
          "Refresh-Token": refreshToken,
        },
      }
    )
    .then((response) => response.data);

export const logoutApi = () =>
  api.post(
    "/auth/logout",
    {},
    {
      headers: {
        "Refresh-Token": `${store.getState().auth.refreshToken}`,
      },
    }
  );

export const signUp = (data: SignUpCredential) =>
  api.post<{ id?: string }>("/auth/signup", data);

export const verifyEmail = (token: string) =>
  api.post("/auth/verify-email", { token });
