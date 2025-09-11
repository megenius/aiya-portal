import { Hono } from "hono";
import * as VoucherHandler from "../handlers/voucher.handler";

const voucherRoutes = new Hono();

voucherRoutes.get("/", ...VoucherHandler.getVouchers);
voucherRoutes.get("/voucher-user", ...VoucherHandler.getVouchersByUser);
voucherRoutes.post("/voucher-user/edit", ...VoucherHandler.updateVoucherUser);
voucherRoutes.get("/voucher-codes", ...VoucherHandler.getVoucherCodes);
voucherRoutes.get("/voucher-codes/stats", ...VoucherHandler.getStatVoucherCode);
voucherRoutes.get("/voucher-users/stats", ...VoucherHandler.getStatVoucherUser);
voucherRoutes.get("/voucher-brands", ...VoucherHandler.getVoucherBrands);
voucherRoutes.get(
  "/voucher-brands/:id",
  ...VoucherHandler.getVoucherBrandByIdWithVouchers
);
voucherRoutes.get("/:id", ...VoucherHandler.getVoucher);
voucherRoutes.post("/collect", ...VoucherHandler.collectVoucher);
voucherRoutes.post("/voucher-code", ...VoucherHandler.createVoucherCode);
voucherRoutes.post("/redeem", ...VoucherHandler.useVoucher);
voucherRoutes.patch("/voucher-codes", ...VoucherHandler.updateVoucherCode);

// voucher_views
voucherRoutes.get(
  "/voucher-views/:voucher_id",
  ...VoucherHandler.getOrCreateVoucherViewByUser
);

// v2 - server-computed view (non-breaking addition)
voucherRoutes.get(
  "/v2/:id/view",
  ...VoucherHandler.getVoucherViewV2
);

// v2 - combined page payload
voucherRoutes.get(
  "/v2/:id/page",
  ...VoucherHandler.getVoucherPageV2
);

// v2 - collect with server verification (non-breaking addition)
voucherRoutes.post(
  "/v2/:id/collect",
  ...VoucherHandler.collectVoucherV2
);

export { voucherRoutes };
