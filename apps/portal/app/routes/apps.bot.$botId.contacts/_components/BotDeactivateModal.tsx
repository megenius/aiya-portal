import React, { useState } from "react";

interface BotDeactivateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (duration: number | "permanent") => void;
}

const durations: { label: string; value: number | "permanent" }[] = [
  { label: "For 15 Minutes", value: 15 },
  { label: "For 30 Minutes", value: 30 },
  { label: "For 1 Hour", value: 60 },
  { label: "For 8 Hours", value: 480 },
  { label: "For 24 Hours", value: 1440 },
  { label: "Until I turn it back on", value: "permanent" },
];

const BotDeactivateModal: React.FC<BotDeactivateModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [selectedDuration, setSelectedDuration] = useState<
    number | "permanent"
  >(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-6 max-w-sm w-full relative">
        {/* Header - ใช้ flex เพื่อให้หัวข้ออยู่กลาง และกากบาทอยู่ขวาสุด */}
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-gray-900 dark:text-white flex-1 text-center">
            Deactivate the bot for this contact
          </h4>
          <button
            className="text-gray-500 hover:text-gray-700 dark:hover:text-white"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* ตัวเลือกระยะเวลาปิดบอท */}
        <div className="mt-4 space-y-2">
          {durations.map((option) => (
            <button
              key={option.value}
              className={`block w-full text-left text-sm px-4 py-2 rounded-lg hover:brightness-90 duration-200 ${
                selectedDuration === option.value
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 dark:bg-neutral-700 text-gray-900 dark:text-white"
              }`}
              onClick={() => setSelectedDuration(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* ปุ่ม Confirm w-full */}
        <button
          className="mt-6 w-full py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => {
            onConfirm(selectedDuration);
            onClose();
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default BotDeactivateModal;
