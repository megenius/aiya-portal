import { useQuery } from "@tanstack/react-query";
import { fetchAds } from "~/services/queq";

export function useListQAds() {
  return useQuery({
    queryKey: ["QAds"],
    queryFn: () => fetchAds()
    // enabled: 
  });
}