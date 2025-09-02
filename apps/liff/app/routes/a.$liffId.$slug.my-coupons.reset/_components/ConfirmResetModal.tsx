import React from "react";

interface ConfirmResetModalProps {
  isOpen: boolean;
  language: string;
  isLoading?: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const ConfirmResetModal: React.FC<ConfirmResetModalProps> = ({
  isOpen,
  language,
  isLoading = false,
  onConfirm,
  onClose,
}) => {
  if (!isOpen) return null;

  const title = language === "th" ? "รีเซ็ตคูปองของฉัน" : "Reset My Coupons";
  const body =
    language === "th"
      ? "คุณแน่ใจหรือไม่ว่าจะรีเซ็ตคูปองทั้งหมดของคุณ? การดำเนินการนี้ไม่สามารถย้อนกลับได้"
      : "Are you sure you want to reset all your coupons? This action cannot be undone.";
  const cancel = language === "th" ? "ยกเลิก" : "Cancel";
  const confirm = language === "th" ? "รีเซ็ต" : "Reset";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        role="button"
        tabIndex={0}
        aria-label={
          language === "th" ? "ปิดโมดัลยืนยัน" : "Close confirmation modal"
        }
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClose();
          }
        }}
      />
      <div
        className="relative mx-4 w-full max-w-sm rounded-lg bg-white shadow-lg"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-reset-title"
      >
        <div className="px-5 pt-5 pb-3">
          <h3
            id="confirm-reset-title"
            className="text-lg font-semibold text-gray-800"
          >
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-600">{body}</p>
        </div>
        <div className="flex items-center justify-end gap-2 px-5 pb-5">
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 disabled:opacity-60"
          >
            {cancel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className="px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700 disabled:opacity-60"
          >
            {isLoading
              ? language === "th"
                ? "กำลังรีเซ็ต..."
                : "Resetting..."
              : confirm}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmResetModal;
