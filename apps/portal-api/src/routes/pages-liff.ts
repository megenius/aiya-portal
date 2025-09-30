import { Hono } from "hono";
import * as VoucherHandler from "../handlers/voucher.handler";

const pagesLiffRoutes = new Hono();

pagesLiffRoutes.get("/:id", ...VoucherHandler.getLiffPage);
pagesLiffRoutes.get("/:id/details", ...VoucherHandler.getLiffPageDetails);

export { pagesLiffRoutes };