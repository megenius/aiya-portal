import { Profile } from "~/types/app";
import api from "./api";

export const readMe = () => api.get<Profile>("/me");
