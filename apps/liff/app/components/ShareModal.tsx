import React from "react";
import { Copy, ExternalLink, MessageCircle } from "lucide-react";
import type { Lang } from "~/i18n/messages";

export interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Lang;
  primaryColor?: string;
  shareUrl: string;
  title: string;
  description?: string;
  isInLineApp: boolean;
  onShareLine?: () => void;
  onShareOther?: () => void;
  onCopyLink?: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  language,
  primaryColor,
  shareUrl,
  title,
  description,
  isInLineApp,
  onShareLine,
  onShareOther,
  onCopyLink,
}) => {
  if (!isOpen) return null;

  const texts = {
    th: {
      title: "แชร์คูปอง",
      shareLine: "แชร์ใน LINE",
      shareOther: "แชร์ผ่านแอปอื่น",
      copyLink: "คัดลอกลิงก์",
      cancel: "ยกเลิก",
    },
    en: {
      title: "Share Coupon",
      shareLine: "Share in LINE",
      shareOther: "Share via other apps",
      copyLink: "Copy Link",
      cancel: "Cancel",
    },
  };

  const t = texts[language];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="w-full max-w-md rounded-t-2xl bg-white p-6 pb-8 shadow-lg animate-slide-up">
        <div className="mb-6 text-center">
          <h3 className="text-lg font-semibold text-gray-900">{t.title}</h3>
        </div>

        <div className="space-y-3">
          {/* Share in LINE (only show in LINE app) */}
          {isInLineApp && onShareLine && (
            <button
              onClick={onShareLine}
              className="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 text-left transition-colors hover:bg-gray-50 active:bg-gray-100"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: primaryColor || "#06C755" }}
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{t.shareLine}</div>
              </div>
            </button>
          )}

          {/* Share via other apps (Web Share API) */}
          {onShareOther && (
            <button
              onClick={onShareOther}
              className="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 text-left transition-colors hover:bg-gray-50 active:bg-gray-100"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
                <ExternalLink className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{t.shareOther}</div>
              </div>
            </button>
          )}

          {/* Copy Link */}
          {onCopyLink && (
            <button
              onClick={onCopyLink}
              className="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 text-left transition-colors hover:bg-gray-50 active:bg-gray-100"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-500">
                <Copy className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{t.copyLink}</div>
              </div>
            </button>
          )}
        </div>

        {/* Cancel button */}
        <button
          onClick={onClose}
          className="mt-4 w-full rounded-xl border border-gray-300 py-3 text-center font-medium text-gray-700 transition-colors hover:bg-gray-50 active:bg-gray-100"
        >
          {t.cancel}
        </button>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ShareModal;
