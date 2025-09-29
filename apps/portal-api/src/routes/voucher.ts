import { Hono } from "hono";
import * as VoucherHandler from "../handlers/voucher.handler";
import * as AnalyticsHandler from "../handlers/analytics.handler";

const voucherRoutes = new Hono();

voucherRoutes.get("/", ...VoucherHandler.getVouchers);
voucherRoutes.get("/dashboard", ...VoucherHandler.getDashboard);
voucherRoutes.get("/dashboard/quick", ...VoucherHandler.getDashboardQuick);
voucherRoutes.get("/:id/stats", ...VoucherHandler.getVoucherStats);
// voucherRoutes.get("/vouchers/:id", ...VoucherHandler.getVoucher);
// voucherRoutes.post("/vouchers", ...VoucherHandler.createVoucher);
// voucherRoutes.put("/vouchers/:id", ...VoucherHandler.updateVoucher);
// voucherRoutes.delete("/vouchers/:id", ...VoucherHandler.deleteVoucher);
voucherRoutes.post("/collect", ...VoucherHandler.collectVoucher);

// Analytics endpoints
voucherRoutes.get("/analytics/overview", ...AnalyticsHandler.getAnalyticsOverview);
voucherRoutes.get("/analytics/trends", ...AnalyticsHandler.getAnalyticsTrends);
voucherRoutes.get("/analytics/leaderboards", ...AnalyticsHandler.getAnalyticsLeaderboards);

export { voucherRoutes };
