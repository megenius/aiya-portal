import { CollectVoucher, Voucher, VoucherCodeUpdate, VoucherStats, VoucherUser, VoucherView } from "~/types/app";
import api from "./api";

export const fetchVoucher = ({ voucherId }) =>
  api.get<Voucher>(`/vouchers/${voucherId}`).then((res) => res.data);

export const fetchVouchers = ({ q,status }) =>
  api.get<Array<Voucher>>(`/vouchers?q=${q}&status=${status}`);

export const fetchVouchersUser = () =>
  api.get<Array<VoucherUser>>(`/vouchers/voucher-user`);

export const collectVoucher = (data: CollectVoucher) =>
  api.post("/vouchers/collect", data);

export const redeemVoucher = (data: Partial<VoucherUser>) =>
  api.post(`/vouchers/redeem`,data);

export const fetchVoucherCodeStats = ({ voucherId }) =>
  api.get<VoucherStats>(`/vouchers/voucher-codes/stats?voucher=${voucherId}`);

export const fetchVoucherUserStats = ({ userId }) =>
  api.get<VoucherStats>(`/vouchers/voucher-users/stats/${userId}`);

export const updateVoucherCode = (data: VoucherCodeUpdate) =>
  api.patch(`/vouchers/voucher-codes`, data);

// voucher_views
export const fetchVoucherView = ({ voucherId }) =>
  api.get<VoucherView>(`/vouchers/voucher-views/${voucherId}`);