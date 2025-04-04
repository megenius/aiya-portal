import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "@remix-run/react";
import FollowButton from "./FollowButton";
import { getDirectusFileUrl } from "~/utils/files";
import { Voucher } from "~/types/app";

interface HeaderProps {
  language: string;
  voucher?: Voucher;
  color?: string;
  isFollowed?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  language,
  voucher,
  color,
  isFollowed,
}) => {
  const { liffId, slug } = useParams();
  const navigate = useNavigate();
  const [_isFollowed, setIsFollowed] = React.useState(isFollowed || false);

  const navigateToBack = () => navigate(`/a/${liffId}/${slug}/shop`);

  const handleFollow = () => {
    setIsFollowed(!_isFollowed);
  };
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <button onClick={navigateToBack} className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <div className="flex items-center  space-x-2">
          <img
            src={getDirectusFileUrl(
              (voucher?.voucher_brand_id?.logo as string) ?? ""
            )}
            alt={voucher?.voucher_brand_id?.name ?? ""}
            className="w-7 h-7 rounded-full object-cover border border-gray shadow-sm"
          />
          {/* <div className="w-6 h-6 mx-auto flex justify-center items-center rounded-full object-cover text-gray-500 bg-white border border-gray-300 shadow-sm text-[6px]">
            LOGO
          </div> */}
          <h1 className="text-lg font-semibold">{voucher?.voucher_brand_id?.name}</h1>
        </div>
      </div>
      <FollowButton
        language={language}
        isFollowed={_isFollowed}
        color={color}
        onClick={handleFollow}
      />
    </div>
  );
};

export default Header;
