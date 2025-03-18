import { useQuery } from "@tanstack/react-query";
import { fetchBrand } from "~/services/brands";
import { useLineLiff } from "../useLineLiff";

interface useBrandProps {
  id: string;
}

export function useBrand({ id }: useBrandProps) {
  const { data: liff } = useLineLiff();
  return useQuery({
    queryKey: ["vouchers", "voucher-brands", id],
    queryFn: () => fetchBrand(id).then((res) => res.data),
    enabled: !!id && liff?.isLoggedIn()
  });
}
