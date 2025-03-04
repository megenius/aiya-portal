import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "@remix-run/react";
import FollowButton from "./FollowButton";

interface HeaderProps {
  title: string;
  color?: string;
  isFollowed?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title,color,isFollowed }) => {
  const navigate = useNavigate();
  const [_isFollowed, setIsFollowed] = React.useState(isFollowed || false);

  const navigateToBack = () => navigate(-1);

  const handleFollow = () => {
    setIsFollowed(!_isFollowed);
  }
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <button onClick={navigateToBack} className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold">{title}</h1>
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
