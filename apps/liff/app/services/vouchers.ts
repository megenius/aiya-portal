import {
  CollectVoucher,
  Voucher,
  VoucherCodeUpdate,
  VoucherStats,
  VoucherUser,
  VoucherPage,
  MyVouchersV2,
} from "~/types/app";
import api from "./api";

export const fetchVoucher = ({ voucherId }) =>
  api.get<Voucher>(`/vouchers/${voucherId}`).then((res) => res.data);

export const fetchVouchers = ({ q, status }) =>
  api.get<Array<Voucher>>(`/vouchers?q=${q}&status=${status}`);

export const fetchVouchersUser = () =>
  api.get<Array<VoucherUser>>(`/vouchers/voucher-user`);

export const collectVoucher = (data: CollectVoucher) =>
  api.post("/vouchers/collect", data);

// v2 collect (server-verified). Non-breaking: keep old export and add this.
export const collectVoucherV2 = (data: CollectVoucher) =>
  api.post(`/vouchers/v2/${data.voucher_id}/collect`, data);

export const redeemVoucher = (data: Partial<VoucherUser>) =>
  api.post(`/vouchers/redeem`, data);

export const fetchVoucherCodeStats = ({ voucherId }) =>
  api.get<VoucherStats>(`/vouchers/voucher-codes/stats?voucher=${voucherId}`);

export const fetchVoucherUserStats = () =>
  api.get<VoucherStats>(`/vouchers/voucher-users/stats`);

export const updateVoucherCode = (data: VoucherCodeUpdate) =>
  api.patch(`/vouchers/voucher-codes`, data);

// v2 combined page
export const fetchVoucherPageV2 = ({ voucherId }) =>
  api
    .get<VoucherPage>(`/vouchers/v2/${voucherId}/page`)
    .then((res) => res.data);

// v2 - my vouchers (filtered + server computed)
export const fetchMyVouchersV2 = ({ tab }: { tab?: string }) =>
  api.get<MyVouchersV2>(
    `/vouchers/v2/my-vouchers` + (tab ? `?tab=${tab}` : ""),
  );
