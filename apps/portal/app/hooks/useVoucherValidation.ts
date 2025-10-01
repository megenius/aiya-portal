import { useMemo } from "react";
import { isValidVoucherId } from "~/utils/voucher";

interface VoucherValidationResult {
  isValid: boolean;
  error: string | null;
}

/**
 * Hook to validate voucher ID from URL params
 */
export const useVoucherValidation = (
  voucherId: string | undefined
): VoucherValidationResult => {
  return useMemo(() => {
    if (!voucherId) {
      return {
        isValid: false,
        error: "Voucher ID is required",
      };
    }

    if (!isValidVoucherId(voucherId)) {
      return {
        isValid: false,
        error: "Invalid voucher ID format",
      };
    }

    return {
      isValid: true,
      error: null,
    };
  }, [voucherId]);
};
