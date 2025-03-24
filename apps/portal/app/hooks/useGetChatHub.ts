import { useQuery } from "@tanstack/react-query";
import { fetchChatHub } from "~/services/chat-hubs.service";
import { useAppSelector } from "~/store";

export const useGetChatHub = ({ id }) => {
  return useQuery({
    queryKey: ["chat_hubs", id],
    queryFn: () => fetchChatHub(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
