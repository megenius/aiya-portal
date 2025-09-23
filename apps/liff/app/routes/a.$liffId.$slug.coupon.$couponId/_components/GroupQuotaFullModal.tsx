import React from "react";
import { t, type Lang } from "~/i18n/messages";

interface GroupQuotaFullModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Lang;
  primaryColor: string;
}

const GroupQuotaFullModal: React.FC<GroupQuotaFullModalProps> = ({
  isOpen,
  onClose,
  language,
  primaryColor,
}) => {
  if (!isOpen) return null;

  const message = t(language, "coupon.errors.groupQuotaFull");
  const closeText = t(language, "common.close");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <div className="text-center">
          <h3
            className="mb-4 text-xl font-bold text-primary"
            style={{ color: primaryColor || undefined }}
          >
            {message}
          </h3>
          <button
            className="rounded-full bg-primary px-6 py-2 text-white"
            style={{ backgroundColor: primaryColor || undefined }}
            onClick={onClose}
          >
            {closeText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupQuotaFullModal;
