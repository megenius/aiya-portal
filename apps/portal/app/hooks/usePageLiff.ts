import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import api from "~/services/api";
import { components } from "~/@types/directus";

type PageLiff = components["schemas"]["ItemsPagesLiff"];

const fetchPageLiff = (liffPageId: string) =>
  api.get<PageLiff>(`/pages-liff/${liffPageId}`);

export const usePageLiff = (liffPageId: string) => {
  return useQuery({
    queryKey: ["page-liff", liffPageId],
    queryFn: () => fetchPageLiff(liffPageId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated) && !!liffPageId,
  });
};