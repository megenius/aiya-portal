import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "@remix-run/react";
import FollowButton from "./FollowButton";

interface HeaderProps {
  title: string;
  color?: string;
  isFollowed?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, color, isFollowed }) => {
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
          <div className="w-6 h-6 mx-auto flex justify-center items-center rounded-full object-cover text-gray-500 bg-white border border-gray-300 shadow-sm text-[6px]">
            LOGO
          </div>
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
      </div>
      <FollowButton
        isFollowed={_isFollowed}
        color={color}
        onClick={handleFollow}
      />
    </div>
  );
};

export default Header;
