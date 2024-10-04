import { useParams } from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";
import { fetchByLiffIdAndSlug } from "~/services/page-liff";

export function useGetPageLiff() {
  const { liffId, slug } = useParams();

  return useQuery({
    queryKey: ["liff", liffId, "slug", slug],
    queryFn: () => fetchByLiffIdAndSlug(liffId as string, slug as string),
    // enabled: liff?.isLoggedIn(),
  });
}
