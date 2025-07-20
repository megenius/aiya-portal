import api from "./api";
import { AuthState, SignInCredential } from "~/types/auth";

export const identify = (args: SignInCredential) =>
  api.post<AuthState>("/auth/identify", args);
