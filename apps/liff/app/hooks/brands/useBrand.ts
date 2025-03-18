import { useQuery } from "@tanstack/react-query";
import { fetchBrand } from "~/services/brands";
import { useLineLiff } from "../useLineLiff";

interface useBrandProps {
  brandId: string;
}

export function useBrand({ brandId }: useBrandProps) {
  const { data: liff } = useLineLiff();
  return useQuery({
    queryKey: ["vouchers", "voucher-brands", brandId],
    queryFn: () => fetchBrand({brandId}),
    enabled: !!brandId && liff?.isLoggedIn()
  });
}
