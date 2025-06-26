// hooks/useOrderbot.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchBot } from "~/services/orderbots";

export const useOrderbot = ({ id }) => {
  return useQuery({
    queryKey: ["orderbots", id],
    queryFn: () => fetchBot(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
