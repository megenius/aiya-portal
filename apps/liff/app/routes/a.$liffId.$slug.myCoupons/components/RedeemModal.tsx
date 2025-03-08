import React, { useEffect, useState } from "react";
import { X, QrCode, Barcode, Clock, AlertCircle } from "lucide-react";
import { VoucherUser } from "~/types/app";
import { getDirectusFileUrl } from "~/utils/files";
import Tabs from "~/components/Tabs";
import QRCodeGenerater from "~/components/QRCodeGenerater";
import BarcodeGenerator from "~/components/BarCodeGenerater";

interface RedeemModalProps {
  voucherUser: VoucherUser;
  language: string;
  primaryColor: string;
  onClose: () => void;
}

const RedeemModal: React.FC<RedeemModalProps> = ({
  voucherUser,
  language,
  primaryColor,
  onClose,
}) => {
  const voucher = voucherUser.code.voucher;
  const usedDate = voucherUser.used_date;
  const [codeType, setCodeType] = useState("qrcode");
  const [remainingTime, setRemainingTime] = useState(15 * 60);
  const [showExpireWarning, setShowExpireWarning] = useState(false);
  const [isRedeemed, setIsRedeemed] = useState(Boolean(usedDate));
  const title = voucher.metadata.title[language];
  const description = voucher.metadata.description[language]?.replace(
    /\\n/g,
    "\n"
  );
  const condition = voucher.metadata.condition[language]?.replace(/\\n/g, "\n");

  const [activeTab, setActiveTab] = useState("details");

  const tabs = [
    {
      id: "details",
      label: {
        th: "รายละเอียด",
        en: "Details",
      },
    },
    {
      id: "conditions",
      label: {
        th: "เงื่อนไข",
        en: "Conditions",
      },
    },
    // { id: "locations", label: "สาขา" },
  ];
  const warningText = {
    th: "คูปองมีอายุ 15 นาทีหลังจากกดใช้คูปอง",
    en: "Voucher will expire in 15 minutes after redeem",
  };
  const buttonText = {
    th: "ใช้คูปอง",
    en: "Redeem",
  };
  const voucherWillExpireInText = {
    th: "คูปองนี้จะหมดอายุในอีก",
    en: "This voucher will expire in",
  };
  const warningExpireText = {
    th: "คูปองกำลังจะหมดอายุ! กรุณาใช้งานทันที",
    en: "Voucher is about to expire! Please use it immediately",
  };

  // Initialize remaining time based on usedDate if it exists
  useEffect(() => {
    if (usedDate) {
      const usedDateTime = new Date(usedDate).getTime();
      const expiryTime = usedDateTime + (15 * 60 * 1000); // 15 minutes after used_date
      const now = new Date().getTime();
      const timeLeft = Math.floor((expiryTime - now) / 1000);
      
      // If still valid, set the remaining time
      if (timeLeft > 0) {
        setRemainingTime(timeLeft);
      } else {
        // If already expired
        setRemainingTime(0);
        setShowExpireWarning(true);
      }
    }
  }, [usedDate]);

  // ฟังก์ชันนับถอยหลัง
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (remainingTime <= 0) {
      onClose();
    }
    if (remainingTime <= 60) {
      setShowExpireWarning(true);
    }
  }, [remainingTime]);

  if (!voucher) return null;

  const handleCollect = () => {
    setIsRedeemed(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // คำนวณเปอร์เซ็นต์เวลาที่เหลือ
  const timePercentage = (remainingTime / (15 * 60)) * 100;

  // คำนวณสีของตัวนับเวลา
  const getTimeColor = () => {
    if (remainingTime <= 60) return "text-red-600"; // <= 1 นาที: สีแดง
    if (remainingTime <= 5 * 60) return "text-yellow-400"; // <= 5 นาที: สีเหลือง
    return "text-primary"; // > 5 นาที: สีน้ำเงิน
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="p-4 bg-white rounded-2xl w-full max-w-sm m-4 overflow-hidden">
        <div className="mb-3 flex justify-between">
          <div className="flex items-start gap-3">
            <img
              src={getDirectusFileUrl(voucher.cover as string) ?? ""}
              alt={title}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-medium text-lg">{voucher.name}</h3>
              <h4 className="text-sm text-gray-500">{title}</h4>
              {/* <div className="text-primary font-medium text-lg">
                {voucher.discount}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                หมดอายุ: {voucher.expiry}
              </div> */}
            </div>
          </div>
          <div>
            <button onClick={onClose} className="text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isRedeemed ? (
          // แสดงหลังจากใช้คูปองแล้ว
          <div className="space-y-3">
            {/* แสดงเวลาที่เหลือ */}
            <div
              className={`p-4 rounded-lg ${remainingTime <= 60 ? "bg-red-50" : remainingTime <= 5 * 60 ? "bg-yellow-50" : "bg-blue-50"}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className={`h-5 w-5 ${getTimeColor()}`} />
                  <span className="text-sm font-medium text-gray-700">
                    {voucherWillExpireInText[language]}
                  </span>
                </div>
                <div className={`font-bold text-xl ${getTimeColor()}`}>
                  {formatTime(remainingTime)}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    remainingTime <= 60
                      ? "bg-red-600"
                      : remainingTime <= 5 * 60
                        ? "bg-yellow-400"
                        : "bg-primary"
                  }`}
                  style={{ width: `${timePercentage}%` }}
                ></div>
              </div>

              {/* Expire Warning */}
              {showExpireWarning && (
                <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                  <AlertCircle className="h-4 w-4" />
                  <span>{warningExpireText[language]}</span>
                </div>
              )}
            </div>

            {/* Code Type Selection */}
            <div className="flex rounded-lg overflow-hidden">
              <button
                className={`flex-1 py-3 text-center ${
                  codeType === "qrcode"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                style={{
                  backgroundColor:
                    codeType === "qrcode" ? primaryColor : undefined,
                }}
                onClick={() => setCodeType("qrcode")}
              >
                <div className="flex items-center justify-center gap-2">
                  <QrCode className="h-5 w-5" />
                  <span>QR Code</span>
                </div>
              </button>
              <button
                className={`flex-1 py-3 text-center ${
                  codeType === "barcode"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
                style={{
                  backgroundColor:
                    codeType === "barcode" ? primaryColor : undefined,
                }}
                onClick={() => setCodeType("barcode")}
              >
                <div className="flex items-center justify-center gap-2">
                  <Barcode className="h-5 w-5" />
                  <span>Barcode</span>
                </div>
              </button>
            </div>

            {/* Code Display */}
            <div className="border rounded-lg p-4 mb-4">
              <div className="flex flex-col items-center">
                {/* <img
                    src="/api/placeholder/200/200"
                    alt="QR Code"
                    className="w-48 h-48 mb-2"
                  /> */}
                {codeType === "qrcode" ? (
                  <QRCodeGenerater text={voucherUser.code.code!} />
                ) : (
                  <BarcodeGenerator text={voucherUser.code.code!} />
                )}

                {/* <div className="text-center text-sm text-gray-500 mt-1">
                    แสดง QR Code นี้ให้พนักงาน
                  </div> */}
                <div className="mt-2 text-center font-mono text-xs text-gray-700">
                  Ref : {voucherUser.code.code}
                </div>
              </div>
            </div>

            {/* Actions */}
            {/* <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 py-3 rounded-lg font-medium text-gray-700">
                <Share2 className="h-5 w-5" />
                <span>แชร์</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 py-3 rounded-lg font-medium text-gray-700">
                <Download className="h-5 w-5" />
                <span>บันทึก</span>
              </button>
            </div> */}
          </div>
        ) : (
          // แสดงก่อนรับคูปอง
          <div className="space-y-3">
            <div>
              <Tabs
                language={language}
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                primaryColor={primaryColor}
              />
              <div className="pt-2 max-h-48 overflow-y-auto text-sm text-gray-700 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {activeTab === "details" && (
                  <p className="whitespace-pre-wrap">{description}</p>
                )}
                {activeTab === "conditions" && (
                  <p className="whitespace-pre-wrap">{condition}</p>
                )}
                {/* {activeTab === "locations" && (
                  <ul className="whitespace-pre-wrap">
                    <li>• สาขาเซ็นทรัลเวิลด์ ชั้น 7</li>
                    <li>• สาขาสยามพารากอน ชั้น 4</li>
                    <li>• สาขาเอ็มควอเทียร์ ชั้น 5</li>
                  </ul>
                )} */}
              </div>
            </div>

            <div className="text-sm text-gray-500 text-center">
              {warningText[language]}
            </div>

            <button
              onClick={handleCollect}
              className="w-full bg-primary text-white py-3 rounded-lg font-medium"
              style={{ backgroundColor: primaryColor }}
            >
              {buttonText[language]}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RedeemModal;
