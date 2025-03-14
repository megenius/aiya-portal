import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchBotModels } from "~/services/bots";

export const useBotModels = () => {
  return useQuery({
    queryKey: ["/bots","models"],
    queryFn: () => fetchBotModels().then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
