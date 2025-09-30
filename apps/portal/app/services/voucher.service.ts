import api from "./api";

export interface VoucherDashboardStats {
  total: number;
  active: number;
  used: number;
  redemptionRate: number;
}

export interface VoucherDashboardResponse {
  stats: VoucherDashboardStats;
  recentVouchers: any[];
  error?: string;
}

export const getVoucherDashboard = () =>
  api.get<VoucherDashboardResponse>("/vouchers/dashboard");

export const getVouchers = () =>
  api.get("/vouchers");