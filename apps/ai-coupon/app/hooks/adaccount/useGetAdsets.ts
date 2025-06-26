// hooks/useAds.ts
import { useInfiniteQuery } from "@tanstack/react-query";
import { getAdsets } from "~/services/ads";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  id: string;
  q: string;
}

export const useGetAdsets = ({ variables: { id, q } }: QueryProps) => {
  return useInfiniteQuery({
    queryKey: ["ad-accounts", id, "adsets"],
    queryFn: ({ pageParam }) =>
      getAdsets(id, { q, after: pageParam })
        .then((res) => res.data)
        .catch((err) => {
          return {
            data: [],
            cursors: null,
          };
        }),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
    initialPageParam: "",
    getNextPageParam: (lastPage) => lastPage?.cursors?.after || null,
  });
};
