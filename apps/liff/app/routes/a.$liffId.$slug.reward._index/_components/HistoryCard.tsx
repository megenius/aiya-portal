import React from "react";

interface PointTransaction {
  id: number;
  points_amount: number;
  transaction_type: string;
  source: string;
  source_id: string;
  status: string;
  date: string;
}

interface HistoryCardProps {
  point_transaction: PointTransaction;
  language: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  point_transaction,
  language,
}) => {
  const translateText = {
    th: {
      point: "แต้ม",
      collect: "เก็บคูปอง",
      redeem: "ใช้คูปอง",
      register: "ลงทะเบียน",
      reward: "แลกรางวัล",
    },
    en: {
      point: "Points",
      collect: "Collect Voucher",
      redeem: "Redeem Voucher",
      register: "Register",
      reward: "Redeem Reward",
    },
  };

  const operator = {
    earn: "+",
    burn: "-",
  };

  const color = {
    earn: "text-primary",
    burn: "text-red-500",
  };

  return (
    <div
      key={point_transaction.id}
      className="bg-white p-3 rounded-lg shadow mb-3 flex items-center"
    >
      <div className="ml-3 flex-1">
        <div className="font-medium">
          {translateText[language][point_transaction.source]}
        </div>
        <div className="text-gray-500 text-sm">{point_transaction.date}</div>
      </div>
      <div className="flex flex-col items-end">
        <div
          className={`font-bold ${color[point_transaction.transaction_type]}`}
        >
          {operator[point_transaction.transaction_type]}
          {point_transaction.points_amount} {translateText[language].point}
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
