// hooks/useBots.ts
import { useQuery } from "@tanstack/react-query";
import { fetchBotInquiries } from "~/services/bots";
import { useAppSelector } from "~/store";

export const useBotInquiry = ({ id }) => {
  return useQuery({
    queryKey: ["bots", id, "inquiries"],
    queryFn: () => fetchBotInquiries(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
