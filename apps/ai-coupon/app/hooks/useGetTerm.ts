import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchTerm } from "~/services/terms.service";

export const useGetTerm = ({ id, lang }) => {
  return useQuery({
    queryKey: ["terms", lang, id],
    queryFn: () => fetchTerm(id, lang).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
