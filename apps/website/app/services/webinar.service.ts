import { Webinar } from "~/types/webinar.type";
import api from "./api";

const PORTAL_URL = "https://portal.aiya.me";
const BASE_URL = "https://aiya.me";
// const BASE_URL = "http://localhost:5173";

export const fetchWebinars = () =>
  api.get<Array<Webinar>>(`/items/saas_webinars`);

export const fetchWebinar = (id: string) =>
  api.get<{ data: Webinar }>(`/items/saas_webinars/${id}`).then((res) => {
    const coverId = res.data.data.cover;
    const ogImageId = res.data.data.og_image;

    return {
      ...res.data.data,
      cover: `${BASE_URL}/images/${coverId}.webp`,
      og_image: `${BASE_URL}/images/${ogImageId}.webp`,
      // og_image: `${PORTAL_URL}/api/files/${ogImageId}.jpg`,
    };
  });

export const insertWebinar = (data: Webinar) =>
  api.post<Webinar>("/items/saas_webinars", data);

export const updateWebinar = (id: string, data: any) => {
  return api.patch(`/items/saas_webinars/${id}`, data);
};

export const deleteWebinar = (id: string) => {
  return api.delete(`/items/saas_webinars/${id}`);
};