import React from "react";
import { PageLiff } from "~/types/page";

export interface Profile {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
}

interface HeaderProps {
  page: PageLiff;
  profile?: Profile;
  language: string;
}

const Header: React.FC<HeaderProps> = ({ page,profile,language }) => {
  const welcomeText = page.metadata.welcomeText[language];
  const subWelcomeText = page.metadata.subWelcomeText[language];
  // const navigate = useNavigate();

  // const navigateToMyCoupon = () => {
  //   navigate(`/a/12/shop/12/myCoupons`);
  // };


  return (
    <div className="p-4 pb-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
          <>
            <img
              src={profile?.pictureUrl}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="font-semibold">
                {welcomeText}, {profile?.displayName}
              </div>
              <div className="text-sm text-gray-500">{subWelcomeText}</div>
            </div>
          </>
      </div>
      {/* <button
        onClick={navigateToMyCoupon}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 relative"
      >
        <Ticket className="h-5 w-5" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
          {myCouponsCount}
        </span>
      </button> */}
    </div>
  );
}

export default Header;