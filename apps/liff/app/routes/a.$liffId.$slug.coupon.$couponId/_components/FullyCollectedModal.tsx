import React from "react";

interface FullyCollectedModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
  primaryColor: string;
}

const FullyCollectedModal: React.FC<FullyCollectedModalProps> = ({
  isOpen,
  onClose,
  language,
  primaryColor,
}) => {
  if (!isOpen) return null;

  const messages = {
    title: { en: "Voucher Fully Collected", th: "คูปองหมดแล้ว" },
    message: {
      en: "Sorry, this voucher has been fully collected. Please check back later for more promotions.",
      th: "ขออภัย คูปองนี้หมดแล้ว โปรดกลับมาตรวจสอบโปรโมชั่นอื่นๆ ในภายหลัง",
    },
    button: { en: "Close", th: "ปิด" },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <div className="text-center">
          <h3
            className="mb-4 text-xl font-bold text-primary"
            style={{ color: primaryColor || undefined }}
          >
            {messages.title[language]}
          </h3>
          <p className="mb-6 text-gray-700">{messages.message[language]}</p>
          <button
            className="rounded-full bg-primary px-6 py-2 text-white"
            style={{ backgroundColor: primaryColor || undefined }}
            onClick={onClose}
          >
            {messages.button[language]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullyCollectedModal;
