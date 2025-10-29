import { PageLiff } from "~/types/page";
import api from "./api";

export const fetchByLiffIdAndSlug = (liffId: string, slug: string) =>
  api.get<PageLiff>(`/liff/${liffId}/${slug}`).then((res) => res.data);

export const fetchBySlug = (slug: string) =>
  api.get<PageLiff>(`/liff/by-slug/${slug}`).then((res) => res.data);
