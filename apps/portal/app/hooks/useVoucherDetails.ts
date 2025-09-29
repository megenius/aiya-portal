import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import api from "~/services/api";

interface VoucherDetailsData {
  liffPage: any;
  allVouchers: any[];
  popularVouchers: any[];
  bannerVouchers: any[];
  brands: any[];
  categories: any[];
}

const fetchVoucherDetails = (liffPageId: string) =>
  api.get<VoucherDetailsData>(`/pages-liff/${liffPageId}/details`);

export const useVoucherDetails = (liffPageId: string) => {
  return useQuery({
    queryKey: ["voucher-details", liffPageId],
    queryFn: () => fetchVoucherDetails(liffPageId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated) && !!liffPageId,
  });
};