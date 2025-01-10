import {
  createItem,
  DirectusUser,
  readItem,
  readItems,
  updateItem,
  deleteItem,
} from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";
import * as _ from "lodash";
import Stripe from "stripe";
import { StripeCouponService } from "~/services/stripe-coupon.service";

const factory = createFactory<Env>();

// Get all coupons
export const getCoupons = factory.createHandlers(
  logger(),
  async (c) => {
    const directus = c.get("directus");
    const stripe = c.get("stripe");
    const stripeCouponService = new StripeCouponService(stripe);

    try {
      // Get coupons from both Stripe and Directus
      const stripeCoupons = await stripeCouponService.listCoupons();
      const directusCoupons = await directus.request(
        readItems("saas_coupons", {
          sort: ["-created_at"],
        })
      );

      // Merge coupon data
      const mergedCoupons = stripeCoupons.data.map(stripeCoupon => {
        const directusCoupon = directusCoupons.find(
          dc => dc.stripe_coupon_id === stripeCoupon.id
        );
        return {
          ...stripeCoupon,
          ...directusCoupon,
        };
      });

      return c.json({ data: mergedCoupons });
    } catch (error: any) {
      console.error("Error getting coupons:", error);
      return c.json({ error: error.message }, 500);
    }
  }
);

// Create single coupon
export const createCoupon = factory.createHandlers(
  logger(),
  async (c) => {
    const directus = c.get("directus");
    const stripe = c.get("stripe");
    const stripeCouponService = new StripeCouponService(stripe);
    const user = c.get("user") as DirectusUser;

    try {
      const body = await c.req.json();
      
      // Create coupon in Stripe
      const stripeCoupon = await stripeCouponService.createCoupon({
        name: body.name,
        duration: body.duration,
        percentOff: body.percentOff,
        amountOff: body.amountOff,
        currency: body.currency,
        durationInMonths: body.durationInMonths,
        maxRedemptions: body.maxRedemptions,
        redeemBy: body.redeemBy,
      });

      // Store additional info in Directus
      const directusCoupon = await directus.request(
        createItem("saas_coupons", {
          stripe_coupon_id: stripeCoupon.id,
          name: body.name,
          description: body.description,
          created_by: user.id,
          campaign_id: body.campaignId,
          metadata: body.metadata,
        })
      );

      return c.json({
        data: {
          ...stripeCoupon,
          ...directusCoupon,
        },
      });
    } catch (error: any) {
      console.error("Error creating coupon:", error);
      return c.json({ error: error.message }, 400);
    }
  }
);

// Create bulk coupons
export const createBulkCoupons = factory.createHandlers(
  logger(),
  async (c) => {
    const directus = c.get("directus");
    const stripe = c.get("stripe");
    const stripeCouponService = new StripeCouponService(stripe);
    const user = c.get("user") as DirectusUser;

    try {
      const body = await c.req.json();

      // Create base coupon in Stripe
      const stripeCoupon = await stripeCouponService.createCoupon({
        name: body.name,
        duration: body.duration,
        percentOff: body.percentOff,
        amountOff: body.amountOff,
        currency: body.currency,
      });

      // Start bulk promotion code creation
      const batchId = await stripeCouponService.createBulkPromotionCodes({
        couponId: stripeCoupon.id,
        quantity: body.quantity,
        prefix: body.prefix,
        pattern: body.pattern,
        metadata: {
          campaignId: body.campaignId,
          createdBy: user.id,
        },
      });

      // Store batch info in Directus
      const directusBatch = await directus.request(
        createItem("saas_coupon_batches", {
          batch_id: batchId,
          stripe_coupon_id: stripeCoupon.id,
          quantity: body.quantity,
          campaign_id: body.campaignId,
          created_by: user.id,
          status: "processing",
        })
      );

      return c.json({
        data: {
          batchId,
          couponId: stripeCoupon.id,
          status: "processing",
        },
      });
    } catch (error: any) {
      console.error("Error creating bulk coupons:", error);
      return c.json({ error: error.message }, 400);
    }
  }
);

// Validate coupon
export const validateCoupon = factory.createHandlers(
  logger(),
  async (c) => {
    const directus = c.get("directus");
    const stripe = c.get("stripe");
    const stripeCouponService = new StripeCouponService(stripe);
    const user = c.get("user") as DirectusUser;

    try {
      const { code, amount } = await c.req.json();

      // Get customer info from Directus
      const customer = await directus.request(
        readItem("saas_customers", user.id)
      );

      // Validate the promotion code
      const validation = await stripeCouponService.validatePromotionCode(code, {
        customerId: customer?.stripe_customer_id,
        customerEmail: user.email,
        amount,
      });

      if (validation.valid) {
        // Track validation attempt in Directus
        await directus.request(
          createItem("saas_coupon_validations", {
            code,
            customer_id: user.id,
            status: "valid",
            amount,
            discount_amount: validation.discount?.amount_off || 
                          (validation.discount?.percent_off ? (amount * validation.discount.percent_off / 100) : 0),
          })
        );
      }

      return c.json({ data: validation });
    } catch (error: any) {
      console.error("Error validating coupon:", error);
      return c.json({ error: error.message }, 400);
    }
  }
);

// Get coupon usage statistics
export const getCouponStats = factory.createHandlers(
  logger(),
  async (c) => {
    const directus = c.get("directus");
    const stripe = c.get("stripe");
    const stripeCouponService = new StripeCouponService(stripe);

    try {
      const { id } = c.req.param();

      // Get stats from Stripe
      const stripeStats = await stripeCouponService.getCouponStats(id);

      // Get additional stats from Directus
      const validations = await directus.request(
        readItems("saas_coupon_validations", {
          filter: {
            coupon_id: {
              _eq: id,
            },
          },
        })
      );

      // Merge stats
      const stats = {
        ...stripeStats,
        validationAttempts: validations.length,
        validationSuccess: validations.filter(v => v.status === "valid").length,
        validationFailure: validations.filter(v => v.status !== "valid").length,
      };

      return c.json({ data: stats });
    } catch (error: any) {
      console.error("Error getting coupon stats:", error);
      return c.json({ error: error.message }, 400);
    }
  }
);

// Get bulk creation status
export const getBulkCreationStatus = factory.createHandlers(
  logger(),
  async (c) => {
    const directus = c.get("directus");
    const stripe = c.get("stripe");
    const stripeCouponService = new StripeCouponService(stripe);

    try {
      const { batchId } = c.req.param();

      // Get status from Stripe service
      const progress = stripeCouponService.getBulkCreationProgress(batchId);

      // Update status in Directus
      await directus.request(
        updateItem("saas_coupon_batches", batchId, {
          status: progress.status,
          completed_count: progress.completed,
          failed_count: progress.failed,
          last_updated: new Date().toISOString(),
        })
      );

      return c.json({ data: progress });
    } catch (error: any) {
      console.error("Error getting bulk creation status:", error);
      return c.json({ error: error.message }, 400);
    }
  }
);

// Export bulk creation results
export const exportBulkCreationResults = factory.createHandlers(
  logger(),
  async (c) => {
    const stripe = c.get("stripe");
    const stripeCouponService = new StripeCouponService(stripe);

    try {
      const { batchId } = c.req.param();
      const format = (c.req.query("format") as "csv" | "json") || "csv";

      const results = await stripeCouponService.exportBulkCreationResults(batchId, format);

      if (format === "csv") {
        c.header("Content-Type", "text/csv");
        c.header("Content-Disposition", `attachment; filename="coupons-${batchId}.csv"`);
      } else {
        c.header("Content-Type", "application/json");
      }

      return c.body(results);
    } catch (error: any) {
      console.error("Error exporting bulk creation results:", error);
      return c.json({ error: error.message }, 400);
    }
  }
);