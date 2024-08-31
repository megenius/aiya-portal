import { AdApp } from "~/@types/app";
import api from "./api";

export const fetchAds = (wsid: string) =>
  api.get<{ items: AdApp[] }>("/ads?wsid=" + wsid);

export const fetchAd = (id: string) => api.get<AdApp>(`/items/ads/${id}`);

export const insertAd = (data: AdApp) => api.post<AdApp>("/items/ads", data);

export const updateAd = (id: string, data: AdApp) => {
  return api.patch(`/items/ads/${id}`, data);
};

export const deleteAd = (id: string) => {
  return api.delete(`/items/ads/${id}`);
};
