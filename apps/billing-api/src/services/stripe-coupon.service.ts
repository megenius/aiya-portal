import Stripe from "stripe";

export class StripeCouponService {
  private stripe: Stripe;

  constructor(stripe: Stripe) {
    this.stripe = stripe;
  }

  // Utility method to generate unique codes
  private generateUniqueCode(length: number = 8): string {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");
  }

  // Coupon Methods
  private handleStripeError(error: any): never {
    if (error instanceof Stripe.errors.StripeError) {
      switch (error.type) {
        case "StripeCardError":
          throw new StripeServiceError(`Payment failed: ${error.message}`);
        case "StripeRateLimitError":
          throw new StripeServiceError(
            "Too many requests, please try again later"
          );
        case "StripeInvalidRequestError":
          throw new StripeServiceError(`Invalid request: ${error.message}`);
        case "StripeAuthenticationError":
          throw new StripeServiceError("Authentication with Stripe failed");
        case "StripeAPIError":
          throw new StripeServiceError("Stripe API error occurred");
        case "StripeConnectionError":
          throw new StripeServiceError("Failed to connect to Stripe");
        default:
          throw new StripeServiceError(
            `Unexpected Stripe error: ${error.message}`
          );
      }
    }
    throw new StripeServiceError(error.message || "An unknown error occurred");
  }

  private validateCouponOptions(options: CouponOptions): void {
    if (!options.name) {
      throw new ValidationError("Coupon name is required", "MISSING_NAME");
    }

    if (options.percentOff && options.amountOff) {
      throw new ValidationError(
        "Cannot specify both percentOff and amountOff",
        "INVALID_DISCOUNT_TYPE"
      );
    }

    if (
      options.percentOff &&
      (options.percentOff < 0 || options.percentOff > 100)
    ) {
      throw new ValidationError(
        "Percent off must be between 0 and 100",
        "INVALID_PERCENT_OFF"
      );
    }

    if (options.amountOff && options.amountOff < 0) {
      throw new ValidationError(
        "Amount off must be greater than 0",
        "INVALID_AMOUNT_OFF"
      );
    }

    if (options.duration === "repeating" && !options.durationInMonths) {
      throw new ValidationError(
        "Duration in months is required for repeating coupons",
        "MISSING_DURATION_MONTHS"
      );
    }
  }

  public async createCoupon(options: CouponOptions): Promise<Stripe.Coupon> {
    try {
      this.validateCouponOptions(options);
      const couponData: Stripe.CouponCreateParams = {
        name: options.name,
        duration: options.duration,
      };

      if (options.percentOff) {
        couponData.percent_off = options.percentOff;
      } else if (options.amountOff) {
        couponData.amount_off = options.amountOff;
        couponData.currency = options.currency || "thb";
      }

      if (options.duration === "repeating" && options.durationInMonths) {
        couponData.duration_in_months = options.durationInMonths;
      }

      if (options.maxRedemptions) {
        couponData.max_redemptions = options.maxRedemptions;
      }

      if (options.redeemBy) {
        couponData.redeem_by = options.redeemBy;
      }

      return await this.stripe.coupons.create(couponData);
    } catch (error) {
      if (
        error instanceof ValidationError ||
        error instanceof StripeServiceError
      ) {
        throw error;
      }
      this.handleStripeError(error);
    }
  }

  public async retrieveCoupon(couponId: string): Promise<Stripe.Coupon> {
    try {
      return await this.stripe.coupons.retrieve(couponId);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error retrieving coupon: ${error.message}`);
      }
      throw new Error("Error retrieving coupon");
    }
  }

  public async listCoupons(
    limit: number = 10
  ): Promise<Stripe.ApiList<Stripe.Coupon>> {
    try {
      return await this.stripe.coupons.list({ limit });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error listing coupons: ${error.message}`);
      }
      throw new Error("Error listing coupons");
    }
  }

  public async deleteCoupon(couponId: string): Promise<Stripe.DeletedCoupon> {
    try {
      return await this.stripe.coupons.del(couponId);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error deleting coupon: ${error.message}`);
      }
      throw new Error("Error deleting coupon");
    }
  }

  // Promotion Code Methods
  private validatePromotionCodeOptions(options: PromotionCodeOptions): void {
    if (!options.couponId) {
      throw new ValidationError("Coupon ID is required", "MISSING_COUPON_ID");
    }

    if (options.code) {
      if (options.code.length < 6 || options.code.length > 50) {
        throw new ValidationError(
          "Promotion code must be between 6 and 50 characters",
          "INVALID_CODE_LENGTH"
        );
      }
      if (!/^[A-Za-z0-9_-]+$/.test(options.code)) {
        throw new ValidationError(
          "Promotion code can only contain letters, numbers, underscores, and hyphens",
          "INVALID_CODE_FORMAT"
        );
      }
    }

    if (options.maxRedemptions !== undefined && options.maxRedemptions <= 0) {
      throw new ValidationError(
        "Maximum redemptions must be greater than 0",
        "INVALID_MAX_REDEMPTIONS"
      );
    }

    if (
      options.expiresAt !== undefined &&
      options.expiresAt <= Math.floor(Date.now() / 1000)
    ) {
      throw new ValidationError(
        "Expiration date must be in the future",
        "INVALID_EXPIRY_DATE"
      );
    }
  }

  private validateRestrictions(options: PromotionCodeRestrictions): void {
    if (
      options.minAmount &&
      options.maxAmount &&
      options.minAmount > options.maxAmount
    ) {
      throw new ValidationError(
        "Minimum amount cannot be greater than maximum amount",
        "INVALID_AMOUNT_RANGE"
      );
    }

    if (
      options.restrictedProducts &&
      !Array.isArray(options.restrictedProducts)
    ) {
      throw new ValidationError(
        "Restricted products must be an array",
        "INVALID_PRODUCTS_FORMAT"
      );
    }

    if (options.customerEmails) {
      const invalidEmails = options.customerEmails.filter(
        (email) => !this.isValidEmail(email)
      );
      if (invalidEmails.length > 0) {
        throw new ValidationError(
          "Invalid email format found in customer emails",
          "INVALID_EMAIL_FORMAT",
          { invalidEmails }
        );
      }
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private createRestrictions(
    options: PromotionCodeRestrictions
  ): Stripe.PromotionCodeCreateParams.Restrictions {
    const restrictions: Stripe.PromotionCodeCreateParams.Restrictions = {
      first_time_transaction: options.firstTimeCustomer || false,
    };

    if (options.minAmount) {
      restrictions.minimum_amount = options.minAmount;
      restrictions.minimum_amount_currency = "thb";
    }

    return restrictions;
  }

  public async createPromotionCode(
    options: PromotionCodeOptions
  ): Promise<Stripe.PromotionCode> {
    try {
      const promotionCodeData: Stripe.PromotionCodeCreateParams = {
        coupon: options.couponId,
        code: options.code || this.generateUniqueCode(),
      };

      if (options.maxRedemptions) {
        promotionCodeData.max_redemptions = options.maxRedemptions;
      }

      if (options.expiresAt) {
        promotionCodeData.expires_at = options.expiresAt;
      }

      if (options.metadata) {
        promotionCodeData.metadata = options.metadata;
      }

      if (options.restrictions) {
        promotionCodeData.restrictions = this.createRestrictions(
          options.restrictions
        );
      }

      return await this.stripe.promotionCodes.create(promotionCodeData);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error creating promotion code: ${error.message}`);
      }
      this.handleStripeError(error);
    }
  }

  public async validatePromotionCode(
    code: string,
    context?: ValidationContext
  ): Promise<ValidationResult> {
    try {
      const promotionCodes = await this.stripe.promotionCodes.list({
        code,
        active: true,
        limit: 1,
      });

      if (promotionCodes.data.length === 0) {
        return { valid: false, message: "Invalid or inactive promotion code" };
      }

      const promotionCode = promotionCodes.data[0];

      // Check expiration
      if (
        promotionCode.expires_at &&
        promotionCode.expires_at < Math.floor(Date.now() / 1000)
      ) {
        return { valid: false, message: "Promotion code has expired" };
      }

      // Check max redemptions
      if (
        promotionCode.max_redemptions &&
        promotionCode.times_redeemed >= promotionCode.max_redemptions
      ) {
        return {
          valid: false,
          message: "Promotion code has reached maximum redemptions",
        };
      }

      // Additional restrictions check
      if (context && promotionCode.restrictions) {
        const result = await this.checkAdditionalRestrictions(
          promotionCode,
          context
        );
        if (!result.valid) {
          return result;
        }
      }

      return {
        valid: true,
        promotionCode,
        discount: await this.retrieveCoupon(promotionCode.coupon.id),
      };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Error validating promotion code: ${error.message}`);
      }
      this.handleStripeError(error);
    }
  }

  private async checkAdditionalRestrictions(
    promotionCode: Stripe.PromotionCode,
    context: ValidationContext
  ): Promise<ValidationResult> {
    const restrictions = promotionCode.restrictions;

    // Check first time transaction
    if (restrictions.first_time_transaction && context.customerId) {
      const payments = await this.stripe.paymentIntents.list({
        customer: context.customerId,
        limit: 1,
      });
      if (payments.data.length > 0) {
        return {
          valid: false,
          message: "This promotion is for first-time customers only",
        };
      }
    }

    // Check amount restrictions
    if (context.amount) {
      if (
        restrictions.minimum_amount &&
        context.amount < restrictions.minimum_amount
      ) {
        return {
          valid: false,
          message: `Order amount must be at least ${restrictions.minimum_amount / 100} ${restrictions.minimum_amount_currency?.toUpperCase()}`,
        };
      }
    }

    return { valid: true };
  }
}

// Logger Interface
interface ILogger {
  error(message: string, error?: any, context?: any): void;
  warn(message: string, context?: any): void;
  info(message: string, context?: any): void;
  debug(message: string, context?: any): void;
}

// Default Logger Implementation
export class Logger implements ILogger {
  private static instance: Logger;
  private readonly environment: string;
  private readonly service: string = "StripeService";

  private constructor() {
    this.environment = process.env.NODE_ENV || "development";
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private formatMessage(
    level: string,
    message: string,
    error?: any,
    context?: any
  ): string {
    const timestamp = new Date().toISOString();
    const baseLog = {
      timestamp,
      level,
      service: this.service,
      environment: this.environment,
      message,
      context: context || {},
    };

    if (error) {
      baseLog.context.error = {
        name: error.name,
        message: error.message,
        stack: error.stack,
        code: error.code,
      };
    }

    return JSON.stringify(baseLog);
  }

  public error(message: string, error?: any, context?: any): void {
    const formattedMessage = this.formatMessage(
      "ERROR",
      message,
      error,
      context
    );
    console.error(formattedMessage);

    // ถ้าอยู่ใน production อาจจะส่ง error ไปยังระบบ monitoring เพิ่มเติม
    if (this.environment === "production") {
      // TODO: ส่ง error ไปยัง error monitoring service (เช่น Sentry)
      this.sendToErrorMonitoring(message, error, context);
    }
  }

  public warn(message: string, context?: any): void {
    const formattedMessage = this.formatMessage("WARN", message, null, context);
    console.warn(formattedMessage);
  }

  public info(message: string, context?: any): void {
    const formattedMessage = this.formatMessage("INFO", message, null, context);
    console.info(formattedMessage);
  }

  public debug(message: string, context?: any): void {
    if (this.environment !== "production") {
      const formattedMessage = this.formatMessage(
        "DEBUG",
        message,
        null,
        context
      );
      console.debug(formattedMessage);
    }
  }

  private sendToErrorMonitoring(
    message: string,
    error?: any,
    context?: any
  ): void {
    // TODO: Implement error monitoring service integration
    // Example with Sentry:
    // Sentry.captureException(error, {
    //   extra: {
    //     message,
    //     context,
    //   },
    // });
  }
}

// Track Interface
interface CouponUsage {
  couponId: string;
  customerId: string;
  promotionCodeId?: string;
  orderId: string;
  amount: number;
  discountAmount: number;
  usedAt: Date;
}

interface CouponStats {
  totalUsage: number;
  totalDiscountAmount: number;
  uniqueCustomers: number;
  averageOrderValue: number;
  usageByMonth: Record<string, number>;
  topCustomers: Array<{
    customerId: string;
    usageCount: number;
    totalDiscount: number;
  }>;
}

// Bulk Creation Interfaces
interface BulkPromotionCodeOptions {
  couponId: string;
  quantity: number;
  prefix?: string;
  pattern?: string;
  metadata?: Record<string, string>;
  expiresAt?: number;
  maxRedemptions?: number;
  restrictions?: PromotionCodeRestrictions;
  batchSize?: number;
}

interface BulkCreationProgress {
  total: number;
  completed: number;
  failed: number;
  status: "processing" | "completed" | "failed";
  errors: Array<{
    code: string;
    message: string;
    index: number;
  }>;
  createdCodes: string[];
}

interface BulkCreationResult {
  batchId: string;
  progress: BulkCreationProgress;
  promotionCodes: Stripe.PromotionCode[];
}

// Custom Error Classes
export class StripeServiceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "StripeServiceError";
  }
}

export class CouponError extends StripeServiceError {
  constructor(message: string) {
    super(message);
    this.name = "CouponError";
  }
}

export class PromotionCodeError extends StripeServiceError {
  constructor(message: string) {
    super(message);
    this.name = "PromotionCodeError";
  }
}

export class ValidationError extends StripeServiceError {
  public code: string;
  public details?: any;

  constructor(message: string, code: string, details?: any) {
    super(message);
    this.name = "ValidationError";
    this.code = code;
    this.details = details;
  }
}

// Types
interface CouponOptions {
  name: string;
  duration: "once" | "repeating" | "forever";
  percentOff?: number;
  amountOff?: number;
  currency?: string;
  durationInMonths?: number;
  maxRedemptions?: number;
  redeemBy?: number;
}

interface PromotionCodeOptions {
  couponId: string;
  code?: string;
  maxRedemptions?: number;
  expiresAt?: number;
  metadata?: Record<string, string>;
  restrictions?: PromotionCodeRestrictions;
}

interface PromotionCodeRestrictions {
  firstTimeCustomer?: boolean;
  minAmount?: number;
  maxAmount?: number;
  restrictedProducts?: string[];
  customerEmails?: string[];
  customerIds?: string[];
  metadata?: Record<string, any>;
}

interface ValidationContext {
  customerId?: string;
  customerEmail?: string;
  amount?: number;
  products?: string[];
}

interface ValidationResult {
  valid: boolean;
  message?: string;
  promotionCode?: Stripe.PromotionCode;
  discount?: Stripe.Coupon;
}
