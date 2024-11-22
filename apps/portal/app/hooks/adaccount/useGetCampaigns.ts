// hooks/useAds.ts
import { useInfiniteQuery } from "@tanstack/react-query";
import { getCampaigns } from "~/services/ads";
import { useAppSelector } from "~/store";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  id: string;
  q: string;
}

export const useGetCampaigns = ({ variables: { id, q } }: QueryProps) => {
  return useInfiniteQuery({
    queryKey: ["ad-accounts", id, "campaigns"],
    // queryFn: () => fetchAdCampaignActivity(id).then((res) => res.data?.sort((a,b) => a.name?.localeCompare(b.name))),
    queryFn: ({ pageParam }) =>
      getCampaigns(id, { q, after: pageParam }).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
    initialPageParam: "",
    getNextPageParam: (lastPage) => lastPage?.cursors?.after || null,
  });
};
