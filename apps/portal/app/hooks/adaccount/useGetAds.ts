// hooks/useAds.ts
import { useInfiniteQuery } from "@tanstack/react-query";
import { getAds } from "~/services/ads";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  id: string;
  q: string;
}

export const useGetAds = ({ variables: { id, q } }: QueryProps) => {
  return useInfiniteQuery({
    queryKey: ["ad-accounts", id, "ads"],
    queryFn: ({ pageParam }) =>
      getAds(id, { q, after: pageParam }).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
    initialPageParam: "",
    getNextPageParam: (lastPage) => lastPage?.cursors?.after || null,
  });
};
