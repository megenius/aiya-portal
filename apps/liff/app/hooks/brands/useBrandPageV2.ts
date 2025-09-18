import { useQuery } from "@tanstack/react-query";
import { fetchBrandPageV2 } from "~/services/brands";
import { useAppSelector } from "~/store";

interface UseBrandPageV2Props {
  brandId: string;
  lang: string;
}

export function useBrandPageV2({ brandId, lang }: UseBrandPageV2Props) {
  const isAuth = useAppSelector((state) => state.auth.isAuthenticated);
  return useQuery({
    queryKey: ["v2", "brand-page", brandId, lang],
    queryFn: () => fetchBrandPageV2({ brandId, lang }),
    enabled: isAuth && !!brandId && !!lang,
  });
}
