import { User, WorkspaceInvite } from "~/@types/app";
import api from "./api";

export const readMe = () => api.get<User>("/me");

export const updateMe = (data: User) => {
  return api.patch("/me", data);
};

export const verifyInvite = (token) =>
  api.post<WorkspaceInvite>("/users/verify-invite", { token });

export const accpetInvite = (args: { id: string; user_id: string }) =>
  api.post("/users/accept-invite", args);
