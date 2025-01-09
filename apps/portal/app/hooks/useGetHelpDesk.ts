import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchBot } from "~/services/orderbots";
import { fetchHelpdesk } from "~/services/helpdesk";

export const useGetHelpDesk = ({ id }) => {
  return useQuery({
    queryKey: ["helpdesks", id],
    queryFn: () => fetchHelpdesk(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
