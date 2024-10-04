import { PageLiff } from "~/types/page";
import api from "./api";

export const fetchByLiffIdAndSlug = (liffId: string, slug: string) =>
  api.get<PageLiff>(`/liff/${liffId}/${slug}`).then((res) => res.data);
