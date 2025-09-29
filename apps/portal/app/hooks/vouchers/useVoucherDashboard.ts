import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getVoucherDashboard } from "~/services/voucher.service";
import { useAppSelector } from "~/store";

export const useVoucherDashboard = () => {
  return useQuery({
    queryKey: ["voucherDashboard"],
    queryFn: () => getVoucherDashboard().then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
    retry: 1,
  });
};