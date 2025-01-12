import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchHelpdesks } from "~/services/helpdesk.service";

export const useGetHelpDesks = ({ lang }) => {
  return useQuery({
    queryKey: ["helpdesks", lang],
    queryFn: () => fetchHelpdesks(lang).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
