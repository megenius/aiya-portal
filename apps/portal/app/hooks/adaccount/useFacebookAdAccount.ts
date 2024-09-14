// hooks/useAds.ts
import { useQuery } from "@tanstack/react-query";
import { fetchAdAccount } from "~/services/ads";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  id: string;
}

export const useFacebookAdAccount = ({ variables: { id } }: QueryProps) => {
  return useQuery({
    queryKey: ["adaccounts", id],
    queryFn: () => fetchAdAccount(id).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
