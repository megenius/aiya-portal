import { useQuery } from "@tanstack/react-query";
import { fetchAd } from "~/services/queq";

interface useGetQAdProps {
  adId: string;
}

export function useGetQAd({ adId }: useGetQAdProps) {
  return useQuery({
    queryKey: ["QAd", adId],
    queryFn: () => fetchAd(adId),
    enabled: !!adId,
  });
}
