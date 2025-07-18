import api from "./api";
import { AuthState, SignInCredential } from "~/types/auth";

export const login = (args: SignInCredential) =>
  api.post<AuthState>("/auth/login", args);
