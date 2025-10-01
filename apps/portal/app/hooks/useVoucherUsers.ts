import { useQuery } from "@tanstack/react-query";
import api from "~/services/api";

export interface VoucherUser {
  id: string;
  uid: string;
  display_name: string;
  picture_url?: string;
  date_created: string;
  date_updated?: string;
}

interface VoucherUsersResponse {
  data: VoucherUser[];
  meta: {
    total_count: number;
    filter_count: number;
  };
}

interface UseVoucherUsersOptions {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: "name" | "date";
  sortOrder?: "asc" | "desc";
  dateFrom?: string;
  dateTo?: string;
}

const fetchVoucherUsers = async (
  liffId: string,
  options: UseVoucherUsersOptions = {}
) => {
  const {
    page = 1,
    limit = 25,
    search = "",
    sortBy = "date",
    sortOrder = "desc",
    dateFrom,
    dateTo,
  } = options;

  // Build params for new server endpoint
  const params = new URLSearchParams({
    liff_id: liffId,
    page: String(page),
    limit: String(limit),
    sortBy,
    sortOrder,
  });
  if (search) params.set("search", search);
  if (dateFrom) params.set("dateFrom", dateFrom);
  if (dateTo) params.set("dateTo", dateTo);

  const response = await api.get(`/vouchers/users?${params.toString()}`);

  const payload = response.data as { items?: VoucherUser[]; count?: number; meta?: { total_count?: number; filter_count?: number } };
  const items: VoucherUser[] = Array.isArray(payload?.items) ? payload.items! : [];
  const count = typeof payload?.count === "number" ? payload.count! : items.length;
  const meta = payload?.meta || { total_count: count, filter_count: count };

  return { data: items, meta: { total_count: Number(meta.total_count ?? count), filter_count: Number(meta.filter_count ?? count) } };
};

export const useVoucherUsers = (
  liffId?: string,
  options: UseVoucherUsersOptions = {}
) => {
  return useQuery({
    queryKey: [
      "voucher-users",
      liffId,
      options.page,
      options.limit,
      options.search,
      options.sortBy,
      options.sortOrder,
      options.dateFrom,
      options.dateTo,
    ],
    queryFn: () => fetchVoucherUsers(liffId!, options),
    enabled: !!liffId,
  });
};
