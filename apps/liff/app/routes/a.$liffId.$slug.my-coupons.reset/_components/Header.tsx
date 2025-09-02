import { useNavigate, useParams } from "@remix-run/react";
import React from "react";

interface HeaderProps {
  language: string;
}

const Header: React.FC<HeaderProps> = ({ language }) => {
  const { liffId, slug } = useParams();
  const navigate = useNavigate();
  const navigateToLanding = () => navigate(`/a/${liffId}/${slug}/shop`);
  const myVouchersText = {
    th: "คูปองของฉัน",
    en: "My Coupons",
  };

  return (
    <header className="bg-white">
      <div className="flex items-center p-4">
        {/* <button onClick={navigateToLanding} className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </button> */}
        <h1 className="text-lg font-semibold">{myVouchersText[language]}</h1>
      </div>
    </header>
  );
};

export default Header;
