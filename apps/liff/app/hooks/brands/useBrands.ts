import { useQuery } from "@tanstack/react-query";
import { fetchBrands } from "~/services/brands";
import { useLineLiff } from "../useLineLiff";

interface useBrandsProps {
  status?: "draft" | "published";
}

export function useBrands( props?: useBrandsProps) {
  const { data: liff } = useLineLiff();
  return useQuery({
    queryKey: ["vouchers","voucher-brands",props],
    queryFn: () => fetchBrands({status: props?.status}).then((res) => res.data),
    enabled: liff?.isLoggedIn()
  });
}
