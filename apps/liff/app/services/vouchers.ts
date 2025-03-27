import { CollectVoucher, Voucher, VoucherStats, VoucherUser } from "~/types/app";
import api from "./api";

export const fetchVoucher = ({ voucherId }) =>
  api.get<Voucher>(`/vouchers/${voucherId}`);

export const fetchVouchers = ({ q,status }) =>
  api.get<Array<Voucher>>(`/vouchers?q=${q}&status=${status}`);

export const fetchVouchersUser = ({ userId }) =>
  api.get<Array<VoucherUser>>(`/vouchers/voucher-user?uid=${userId}`);

export const collectVoucher = (data: CollectVoucher) =>
  api.post("/vouchers/collect", data);

export const redeemVoucher = (data: Partial<VoucherUser>) =>
  api.post(`/vouchers/redeem`,data);

export const fetchVoucherCodeStats = ({ voucherId }) =>
  api.get<VoucherStats>(`/vouchers/voucher-codes/stats?voucher=${voucherId}`);

export const fetchVoucherUserStats = ({ userId }) =>
  api.get<VoucherStats>(`/vouchers/voucher-users/stats/${userId}`);