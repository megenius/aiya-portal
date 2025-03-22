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

const Header: React.FC<HeaderProps> = ({ page, profile, language }) => {
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
      <button
        onClick={() => {}}
        className="flex items-center justify-center rounded-full bg-blue-50 border-2 border-primary text-sm gap-1"
      >
        <div className="px-2 py-1 flex items-center gap-1 rounded-full border bg-primary text-white">
          
          <h4 className="">แต้มสะสม</h4>
        </div>
        <div className="flex items-center gap-1 pe-2 text-primary">
          <h4 className="font-medium">15</h4>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-star"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
          </span>
        </div>

        {/* <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
          1
        </span> */}
      </button>
    </div>
  );
};

export default Header;
