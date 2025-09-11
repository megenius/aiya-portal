import {
  CollectVoucher,
  Voucher,
  VoucherCodeUpdate,
  VoucherStats,
  VoucherUser,
  VoucherView,
  VoucherPageV2,
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

// voucher_views
export const fetchVoucherView = ({ voucherId }) =>
  api.get<VoucherView>(`/vouchers/voucher-views/${voucherId}`);

// voucher_views v2 (server-computed limited-time state)
export const fetchVoucherViewV2 = ({ voucherId }) =>
  api.get(`/vouchers/v2/${voucherId}/view`);

// v2 combined page
export const fetchVoucherPageV2 = ({ voucherId }) =>
  api.get<VoucherPageV2>(`/vouchers/v2/${voucherId}/page`).then((res) => res.data);
