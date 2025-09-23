import React from "react";
import { t, type Lang } from "~/i18n/messages";

export interface NoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Lang;
  primaryColor?: string;
  title?: string;
  message?: string;
  closeText?: string;
}

const NoticeModal: React.FC<NoticeModalProps> = ({
  isOpen,
  onClose,
  language,
  primaryColor,
  title,
  message,
  closeText,
}) => {
  if (!isOpen) return null;

  const fallbackClose = t(language, "common.close");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <div className="text-center">
          {title ? (
            <h3
              className="mb-4 text-xl font-bold text-primary"
              style={{ color: primaryColor || undefined }}
            >
              {title}
            </h3>
          ) : null}
          {message ? (
            <p className="mb-6 text-gray-700">
              {message}
            </p>
          ) : null}
          <button
            className="rounded-full bg-primary px-6 py-2 text-white"
            style={{ backgroundColor: primaryColor || undefined }}
            onClick={onClose}
          >
            {closeText || fallbackClose}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoticeModal;
