import { Hono } from "hono";
import * as VoucherHandler from "../handlers/voucher.handler";

const voucherRoutes = new Hono();

voucherRoutes.get("/", ...VoucherHandler.getVouchers);
voucherRoutes.get("/voucher-user", ...VoucherHandler.getVouchersByUser);
voucherRoutes.get("/:id", ...VoucherHandler.getVoucher);
// voucherRoutes.post("/vouchers", ...VoucherHandler.createVoucher);
// voucherRoutes.put("/vouchers/:id", ...VoucherHandler.updateVoucher);
// voucherRoutes.delete("/vouchers/:id", ...VoucherHandler.deleteVoucher);
voucherRoutes.post("/collect", ...VoucherHandler.collectVoucher);
voucherRoutes.post("/voucher-code", ...VoucherHandler.createVoucherCode);

export { voucherRoutes };
