import React from "react";
import { t } from "~/i18n/messages";

interface FooterProps {
  onClick: () => void;
  color?: string;
  disabled?: boolean;
  lang?: "th" | "en";
  status?: string;
}

const Footer: React.FC<FooterProps> = ({
  onClick = () => {},
  color,
  disabled = false,
  lang = "th",
  status = "instant",
}) => {
  return (
    <div className="bottom-0 w-full border-t bg-white px-4 py-2 pb-6">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full rounded-xl py-4 font-medium transition ${
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
    const key = `footer.status.${status}`;
    const text = t(lang, key);
    if (text === key) {
      return t(lang, "footer.status.instant");
    }
    return text;
  }
};

export default Footer;
