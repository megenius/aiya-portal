import React from "react";
import { useNavigate, useParams } from "@remix-run/react";
import { Brand } from "~/types/app";
import BackButton from "~/components/BackButton";

interface HeaderProps {
  brand: Brand;
  isInClient: boolean;
}

const Header: React.FC<HeaderProps> = ({ brand, isInClient }) => {
  const navigate = useNavigate();
  const { liffId, slug } = useParams();

  return (
    <header
      className={`sticky top-0 z-10 bg-primary pb-16 pt-4 text-white`}
      style={{ backgroundColor: brand?.primaryColor ?? undefined }}
    >
      {/* {!isInClient && ( */}
      <div className="flex items-center gap-4 px-4 py-2">
        <BackButton
          onClick={() => navigate(`/a/${liffId}/${slug}/shop`)}
          variant="inline"
          size="lg"
          className="text-white"
        />
        <h1 className="text-lg font-medium">{brand?.name}</h1>
      </div>
      {/* )} */}
    </header>
  );
};

export default Header;
