import { useQuery } from "@tanstack/react-query";
import { fetchBrands } from "~/services/brands";
import { useLineLiff } from "../useLineLiff";

interface useBrandsProps {
}

export function useBrands() {
  const { data: liff } = useLineLiff();
  return useQuery({
    queryKey: ["vouchers","voucher-brands"],
    queryFn: () => fetchBrands().then((res) => res.data),
    enabled: liff?.isLoggedIn()
  });
}
