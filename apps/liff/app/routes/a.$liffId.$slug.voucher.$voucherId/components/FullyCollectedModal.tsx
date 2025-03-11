import React from 'react';

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
    title: {
      en: "Voucher Fully Collected",
      th: "คูปองหมดแล้ว",
    },
    message: {
      en: "Sorry, this voucher has been fully collected. Please check back later for more promotions.",
      th: "ขออภัย คูปองนี้หมดแล้ว โปรดกลับมาตรวจสอบโปรโมชั่นอื่นๆ ในภายหลัง",
    },
    button: {
      en: "Close",
      th: "ปิด",
    },
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-sm w-full p-6 shadow-lg">
        <div className="text-center">
          <h3 className="font-bold text-xl mb-4 text-primary" style={{ color: primaryColor || undefined }}>
            {messages.title[language]}
          </h3>
          <p className="mb-6 text-gray-700">
            {messages.message[language]}
          </p>
          <button
            className="px-6 py-2 rounded-full bg-primary text-white"
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
