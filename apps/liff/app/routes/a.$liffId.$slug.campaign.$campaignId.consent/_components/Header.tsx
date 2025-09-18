import React from "react";
import { useNavigate } from "@remix-run/react";
import BackButton from "~/components/BackButton";

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
      <BackButton
        onClick={() => navigate(-1)}
        variant="overlay"
        showText={true}
        text={backText[lang]}
      />
    </header>
  );
};

export default Header;
