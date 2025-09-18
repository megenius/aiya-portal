import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "@remix-run/react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();

  return (
    <header className={`text-white`}>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <button className="mr-2 p-1" onClick={() => navigate(-1)}>
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-medium">ย้อนกลับ</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
