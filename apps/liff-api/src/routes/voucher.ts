import { Hono } from "hono";
import * as VoucherHandler from "../handlers/voucher.handler";

const voucherRoutes = new Hono();

voucherRoutes.get("/", ...VoucherHandler.getVouchers);
voucherRoutes.get("/voucher-user", ...VoucherHandler.getVouchersByUser);
voucherRoutes.get("/voucher-codes", ...VoucherHandler.getVoucherCodes);
voucherRoutes.get("/voucher-codes/stats", ...VoucherHandler.getStatVoucherCode);
voucherRoutes.get("/voucher-users/stats/:collected_by", ...VoucherHandler.getStatVoucherUser);
voucherRoutes.get("/voucher-brands", ...VoucherHandler.getVoucherBrands);
voucherRoutes.get("/voucher-brands/:id", ...VoucherHandler.getVoucherBrandByIdWithVouchers);

voucherRoutes.get("/:id", ...VoucherHandler.getVoucher);
// voucherRoutes.post("/vouchers", ...VoucherHandler.createVoucher);
// voucherRoutes.put("/vouchers/:id", ...VoucherHandler.updateVoucher);
// voucherRoutes.delete("/vouchers/:id", ...VoucherHandler.deleteVoucher);
voucherRoutes.post("/collect", ...VoucherHandler.collectVoucher);
voucherRoutes.post("/voucher-code", ...VoucherHandler.createVoucherCode);
voucherRoutes.post("/voucher-user/edit", ...VoucherHandler.updateVoucherUser);
voucherRoutes.post("/redeem", ...VoucherHandler.useVoucher);

export { voucherRoutes };
