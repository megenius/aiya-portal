import { Voucher } from "~/types/app";
import api from "./api";

export const fetchVoucher = ({ voucherId }) =>
  api.get<Voucher>(`/vouchers/${voucherId}`);

export const fetchVouchers = ({ q,status }) =>
  api.get<Array<Voucher>>(`/vouchers?q=${q}&status=${status}`);