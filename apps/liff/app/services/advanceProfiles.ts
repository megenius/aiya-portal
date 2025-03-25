import { AdvanceProfile } from "~/types/app";
import api from "./api";

export const fetchAdvanceProfile = ({ uid }) =>
  api.get<AdvanceProfile>(`/advance-profiles/uid/${uid}`).then((res) => res.data);

export const createAdvanceProfile = (data: Partial<AdvanceProfile>) =>
  api.post(`/advance-profiles`, data);