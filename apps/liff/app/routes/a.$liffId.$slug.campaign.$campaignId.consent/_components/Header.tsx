import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "@remix-run/react";

interface HeaderProps {
  lang: string;
}

const Header: React.FC<HeaderProps> = ({ lang }) => {
  const navigate = useNavigate();

  const backText = {
    th: "ย้อนกลับ",
    en: "Back",
  };

  return (
    <header className="flex items-center px-4 py-4 text-white">
      <button className="flex gap-2" onClick={() => navigate(-1)}>
        <ArrowLeft className="h-6 w-6" />
        <span className="text-lg font-medium">{backText[lang]}</span>
      </button>
    </header>
  );
};

export default Header;
