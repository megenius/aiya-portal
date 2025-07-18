import React from "react";
import { ChevronLeft, Search } from "lucide-react";
import { useNavigate, useParams } from "@remix-run/react";
import { Brand } from "~/types/app";

interface HeaderProps {
  brand: Brand;
  isInClient: boolean;
}

const Header: React.FC<HeaderProps> = ({ brand, isInClient }) => {
  const navigate = useNavigate();
  const { liffId, slug } = useParams();
  
  return (
    <header
      className={`sticky top-0 z-10 pt-4 pb-16 bg-primary text-white`}
      style={{ backgroundColor: brand?.primaryColor ?? undefined }}
    >
      {/* {!isInClient && ( */}
        <div className="px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="mr-2 p-1"
              onClick={() => navigate(`/a/${liffId}/${slug}/shop`)}
            >
              <ChevronLeft size={24} />
            </button>
            <h1 className="text-lg font-medium">{brand?.name}</h1>
          </div>
          {/* <button className="p-1">
            <Search size={20} />
          </button> */}
        </div>
      {/* )} */}
    </header>
  );
};

export default Header;
