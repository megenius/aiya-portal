import React from "react";

interface FooterProps {
  onClick: () => void;
  color?: string;
  disabled?: boolean;
  lang?: "th" | "en";
  status?: string;
}

const buttonTextMap = {
  th: {
    instant: "เก็บคูปอง",
    form: "ลงทะเบียน",
    collected: "ใช้คูปอง",
    pending_confirmation: "แตะเพื่อใช้",
    used: "ใช้แล้ว",
    expired: "หมดอายุแล้ว",
    fully_collected: "หมดแล้ว",
    submitting: "กำลังรับคูปอง...",
  },
  en: {
    instant: "Collect",
    form: "Register",
    collected: "Redeem",
    pending_confirmation: "Tap to Use",
    used: "Redeemed",
    expired: "Expired",
    fully_collected: "Fully Collected",
    submitting: "Collecting...",
  },
};

const Footer: React.FC<FooterProps> = ({
  onClick = () => {},
  color,
  disabled = false,
  lang = "th",
  status = "instant",
}) => {
  return (
    <div className="px-4 py-2 bg-white w-full border-t bottom-0">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full py-4 rounded-xl font-medium transition ${
          disabled ? "bg-gray-300 text-gray-500" : "bg-primary text-white"
        }`}
        data-confetti-button="true"
        style={{
          backgroundColor: disabled ? "#d1d5db" : color,
          color: disabled ? "#6b7280" : "white",
          opacity: disabled ? 0.7 : 1,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        {getButtonText(lang, status)}
      </button>
    </div>
  );

  function getButtonText(lang: "th" | "en" = "th", status: string = "instant") {
    return buttonTextMap[lang]?.[status] ?? buttonTextMap[lang]?.instant ?? "";
  }
};

export default Footer;
