import { useQuery } from "@tanstack/react-query";
import { fetchBrands } from "~/services/brands";
import { useAppSelector } from "~/store";

interface useBrandsProps {
  status?: "draft" | "published";
}

export function useBrands( props?: useBrandsProps) {
  return useQuery({
    queryKey: ["vouchers","voucher-brands",props],
    queryFn: () => fetchBrands({status: props?.status}).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated)
  });
}
