import { Hono } from "hono";
import * as CouponHandler from "../handlers/coupon.handler";
import { Env } from "~/types/hono.types";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { stripeMiddleware } from "~/middlewares/stripe.middeware";
import { userMiddleware } from "~/middlewares/user.middleware";
import { billingAdminMiddleware } from "~/middlewares/billing.middleware";
import { cache } from "hono/cache";

const couponRoutes = new Hono<Env>();

// Get all coupons
couponRoutes.get(
  "/",
  directusMiddleware,
  stripeMiddleware,
  billingAdminMiddleware,
  ...CouponHandler.getCoupons
);

// // Get coupon by ID
// couponRoutes.get(
//   "/:id",
//   directusMiddleware,
//   stripeMiddleware,
//   billingAdminMiddleware,
//   ...CouponHandler.getCouponById
// );

// Create single coupon
couponRoutes.post(
  "/promo-codes",
  directusMiddleware,
  stripeMiddleware,
  billingAdminMiddleware,
  ...CouponHandler.createPromocodes
);

// // Create bulk coupons
// couponRoutes.post(
//   "/bulk",
//   directusMiddleware,
//   stripeMiddleware,
//   billingAdminMiddleware,
//   ...CouponHandler.createBulkCoupons
// );

// // Get bulk creation status
// couponRoutes.get(
//   "/bulk/:batchId",
//   directusMiddleware,
//   stripeMiddleware,
//   billingAdminMiddleware,
//   ...CouponHandler.getBulkCreationStatus
// );

// // Export bulk creation results
// couponRoutes.get(
//   "/bulk/:batchId/export",
//   directusMiddleware,
//   stripeMiddleware,
//   billingAdminMiddleware,
//   ...CouponHandler.exportBulkCreationResults
// );

// // Validate coupon
// couponRoutes.post(
//   "/validate",
//   directusMiddleware,
//   stripeMiddleware,
//   ...CouponHandler.validateCoupon
// );

// // Get coupon usage statistics
// couponRoutes.get(
//   "/:id/stats",
//   directusMiddleware,
//   stripeMiddleware,
//   billingAdminMiddleware,
//   cache({
//     cacheName: "coupon-stats",
//     cacheControl: "public, max-age=300", // Cache for 5 minutes
//   }),
//   ...CouponHandler.getCouponStats
// );

// // Get coupon usage history
// couponRoutes.get(
//   "/:id/history",
//   directusMiddleware,
//   stripeMiddleware,
//   billingAdminMiddleware,
//   ...CouponHandler.getCouponHistory
// );

// // Update coupon
// couponRoutes.patch(
//   "/:id",
//   directusMiddleware,
//   stripeMiddleware,
//   billingAdminMiddleware,
//   ...CouponHandler.updateCoupon
// );

// // Delete coupon
// couponRoutes.delete(
//   "/:id",
//   directusMiddleware,
//   stripeMiddleware,
//   billingAdminMiddleware,
//   ...CouponHandler.deleteCoupon
// );

export { couponRoutes };
