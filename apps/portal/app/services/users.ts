import { User } from "~/@types/app";
import api from "./api";

export const readMe = () => api.get<User>("/me");

export const updateMe = (data: User) => {
  return api.patch("/me", data);
};
