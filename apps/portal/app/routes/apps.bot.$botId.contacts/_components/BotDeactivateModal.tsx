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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-6 max-w-sm w-full relative">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h4 className="flex-1 text-center font-semibold text-gray-900 dark:text-white">
            Deactivate the bot for this contact
          </h4>
          <button
            className="ml-2 rounded-full p-1 text-gray-500 hover:text-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            ✕
          </button>
        </div>

        {/* Durations */}
        <div className="mt-4 space-y-2">
          {durations.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`block w-full text-left text-sm px-4 py-2 rounded-lg transition duration-150 focus:outline-none ${
                selectedDuration === option.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-neutral-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-600"
              }`}
              onClick={() => setSelectedDuration(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Confirm Button */}
        <button
          type="button"
          className="mt-6 w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 active:bg-blue-800 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
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
