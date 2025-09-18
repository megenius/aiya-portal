import React from "react";
import { useNavigate, useParams } from "@remix-run/react";
import LazyImage from "~/components/LazyImage";
import { getDirectusFileUrl } from "~/utils/files";
import { Voucher } from "~/types/app";
import BackButton from "~/components/BackButton";

interface HeaderProps {
  language: string;
  voucher?: Voucher;
  color?: string;
  isFollowed?: boolean;
  isIsClient: boolean;
}

const Header: React.FC<HeaderProps> = ({
  language,
  voucher,
  color,
  isFollowed,
  isIsClient,
}) => {
  const { liffId, slug } = useParams();
  const navigate = useNavigate();
  const [_isFollowed, setIsFollowed] = React.useState(isFollowed || false);

  const navigateToBack = () => {
    const idx = window.history.state?.idx ?? window.history.length;
    if (idx > 0) {
      navigate(-1);
    } else {
      navigate(`/a/${liffId}/${slug}/shop`);
    }
  };

  const handleFollow = () => {
    setIsFollowed(!_isFollowed);
  };
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center">
        <BackButton onClick={navigateToBack} variant="header" />
        <div className="flex items-center space-x-2">
          <LazyImage
            src={getDirectusFileUrl(
              (voucher?.voucher_brand_id?.logo as string) ?? "",
            )}
            alt={voucher?.voucher_brand_id?.name ?? ""}
            wrapperClassName="h-7 w-7"
            className="h-full w-full rounded-full border object-cover shadow-sm"
            placeholder="blur"
            blurDataURL={getDirectusFileUrl(
              (voucher?.voucher_brand_id?.logo as string) ?? "",
              { width: 24, height: 24 },
            )}
          />
          <h1 className="text-lg font-semibold">
            {voucher?.voucher_brand_id?.name}
          </h1>
        </div>
      </div>
      {/* <FollowButton
        language={language}
        isFollowed={_isFollowed}
        primaryColor={color}
        onClick={handleFollow}
      /> */}
    </div>
  );
};

export default Header;
