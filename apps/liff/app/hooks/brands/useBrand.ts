import { useQuery } from "@tanstack/react-query";
import { fetchBrand } from "~/services/brands";
import { useAppSelector } from "~/store";

interface useBrandProps {
  brandId: string;
}

export function useBrand({ brandId }: useBrandProps) {
  return useQuery({
    queryKey: ["vouchers", "voucher-brands", brandId],
    queryFn: () => fetchBrand({brandId}),
    enabled: useAppSelector((state) => state.auth.isAuthenticated) && !!brandId
  });
}
