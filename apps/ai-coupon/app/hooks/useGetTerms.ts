import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchTerms } from "~/services/terms.service";

export const useGetTerms = ({ lang }) => {
  return useQuery({
    queryKey: ["terms", lang],
    queryFn: () => fetchTerms(lang).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
