import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchHelpdesk } from "~/services/helpdesk.service";

export const useGetHelpDesk = ({ id, lang }) => {
  return useQuery({
    queryKey: ["helpdesks", lang, id],
    queryFn: () => fetchHelpdesk(id, lang).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
