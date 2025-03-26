import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "@remix-run/react";
import { useCreatePointTransaction } from "~/hooks/PointTransactions/useCreatePointTransaction";
import { PointTransaction, Profile } from "~/types/app";

interface HeaderProps {
  language: string;
  profile: Profile;
}

const Header: React.FC<HeaderProps> = ({ language, profile }) => {
  const { liffId, slug } = useParams();
  const createPointTransaction = useCreatePointTransaction();
  const navigate = useNavigate();
  const navigateToLanding = () => navigate(`/a/${liffId}/${slug}/shop`);

  const handleGetPoint = () => {
    console.log("Get point");
    const data: Partial<PointTransaction> = {
      profile: profile?.id,
      points_amount: 10,
      transaction_type: "earn",
      source: "register",
      source_id: "A123455",
    };
    createPointTransaction.mutate({ variables: data });
  };
  const rewardText = {
    th: "รีวอร์ด",
    en: "Rewards",
  };

  return (
    <header className="flex justify-between">
      <div className="flex items-center p-4">
        <button onClick={navigateToLanding} className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-lg font-semibold">{rewardText[language]}</h1>
      </div>
      {/* <button onClick={handleGetPoint}>Get point</button> */}
    </header>
  );
};

export default Header;
