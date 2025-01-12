import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCoupons } from "~/services/billing.service";
import { useAppSelector } from "~/store";
import { useLanguage } from "../useLanguage";

interface Coupons {
  lang: string;
}

const useCoupons = ({ lang }: Coupons) => {
  return useQuery({
    queryKey: ["coupons"],
    queryFn: () =>
      getCoupons({
        lang,
      }).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};

export default useCoupons;
