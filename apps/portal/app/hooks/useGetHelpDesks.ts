import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchBot } from "~/services/orderbots";
import { fetchHelpdesks } from "~/services/helpdesk";

export const useGetHelpDesks = () => {
  return useQuery({
    queryKey: ["helpdesks"],
    queryFn: () => fetchHelpdesks().then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
