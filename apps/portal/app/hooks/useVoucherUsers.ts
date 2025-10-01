import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
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

  const offset = (page - 1) * limit;
  const sortField = sortBy === "name" ? "display_name" : "date_created";
  const sortPrefix = sortOrder === "desc" ? "-" : "";

  // Build filter
  const filters: any = {
    liff_id: { _eq: liffId },
  };

  if (search) {
    filters._or = [
      { display_name: { _icontains: search } },
      { uid: { _icontains: search } },
    ];
  }

  if (dateFrom || dateTo) {
    filters.date_created = {};
    if (dateFrom) filters.date_created._gte = dateFrom;
    if (dateTo) filters.date_created._lte = dateTo;
  }

  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
    sort: `${sortPrefix}${sortField}`,
    "meta": "total_count,filter_count",
    filter: JSON.stringify(filters),
    fields: "id,uid,display_name,picture_url,date_created,date_updated",
  });

  const response = await api.get<VoucherUsersResponse>(
    `/items/profiles?${params.toString()}`
  );

  return response.data;
};

export const useVoucherUsers = (
  liffId?: string,
  options: UseVoucherUsersOptions = {}
) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

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
    enabled: isAuthenticated && !!liffId,
  });
};
