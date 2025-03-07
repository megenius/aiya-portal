import { CollectVoucher, Voucher, VoucherUser } from "~/types/app";
import api from "./api";

export const fetchVoucher = ({ voucherId }) =>
  api.get<Voucher>(`/vouchers/${voucherId}`);

export const fetchVouchers = ({ q,status }) =>
  api.get<Array<Voucher>>(`/vouchers?q=${q}&status=${status}`);

export const fetchVouchersUser = ({ userId }) =>
  api.get<Array<VoucherUser>>(`/vouchers/voucher-user?uid=${userId}`);

export const insertVoucher = (data: CollectVoucher) =>
  api.post("/vouchers/collect", data);