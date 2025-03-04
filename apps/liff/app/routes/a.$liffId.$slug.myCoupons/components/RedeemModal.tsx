import React, { useState } from "react";
import { X, QrCode, Barcode, Check, Share2, Download, Tag } from "lucide-react";
import { Voucher } from "~/types/app";
import { getDirectusFileUrl } from "~/utils/files";

interface RedeemModalProps {
  voucher: Voucher;
  isThaiLanguage: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const RedeemModal: React.FC<RedeemModalProps> = ({
  voucher,
    isThaiLanguage,
  isOpen,
  onClose,
}) => {
  const [codeType, setCodeType] = useState("qrcode");
  const [isCollected, setIsCollected] = useState(false);
  const title = isThaiLanguage ? voucher.titleTH : voucher.titleEN;
  const description = isThaiLanguage
    ? voucher.descriptionTH?.replace(/\\n/g, "\n")
    : voucher.descriptionEN?.replace(/\\n/g, "\n");

  if (!isOpen) return null;

  const handleCollect = () => {
    setIsCollected(true);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-sm m-4 overflow-hidden">
        <div className="flex items-center justify-between bg-blue-800 text-white p-4">
          <h2 className="text-lg font-semibold">ใช้คูปอง</h2>
          <button onClick={onClose} className="text-white">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 border-b">
          <div className="flex items-start gap-3">
            <img
              src={getDirectusFileUrl(voucher.cover as string) ?? ""}
              alt={voucher.titleEN ?? ""}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-medium text-lg">{voucher.name}</h3>
              <div className="text-primary font-medium text-lg">
                {voucher.discount}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                หมดอายุ: {voucher.expiry}
              </div>
            </div>
          </div>
        </div>

        {isCollected ? (
          // แสดงหลังจากรับคูปองแล้ว
          <div className="p-4">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-600">
                รับคูปองสำเร็จ!
              </h3>
              <p className="text-gray-600 mt-1">
                คูปองถูกบันทึกไว้ใน &quot;คูปองของฉัน&quot; แล้ว
              </p>
            </div>

            {/* Code Type Selection */}
            <div className="flex border rounded-lg overflow-hidden mb-4">
              <button
                className={`flex-1 py-3 text-center ${
                  codeType === "qrcode"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
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
              {codeType === "qrcode" ? (
                // QR Code Display
                <div className="flex flex-col items-center">
                  <img
                    src="/api/placeholder/200/200"
                    alt="QR Code"
                    className="w-48 h-48 mb-2"
                  />
                  <div className="text-center text-sm text-gray-500 mt-1">
                    แสดง QR Code นี้ให้พนักงาน
                  </div>
                  <div className="mt-2 text-center font-mono text-sm text-gray-700">
                    COUPON-{voucher.id}-
                    {Math.floor(Math.random() * 10000)
                      .toString()
                      .padStart(4, "0")}
                  </div>
                </div>
              ) : (
                // Barcode Display
                <div className="flex flex-col items-center">
                  <img
                    src="/api/placeholder/240/100"
                    alt="Barcode"
                    className="w-full h-20 mb-2"
                  />
                  <div className="text-center text-sm text-gray-500 mt-1">
                    แสดง Barcode นี้ให้พนักงาน
                  </div>
                  <div className="mt-2 text-center font-mono text-sm text-gray-700">
                    {Array.from({ length: 12 }, () =>
                      Math.floor(Math.random() * 10)
                    ).join("")}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 py-3 rounded-lg font-medium text-gray-700">
                <Share2 className="h-5 w-5" />
                <span>แชร์</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 py-3 rounded-lg font-medium text-gray-700">
                <Download className="h-5 w-5" />
                <span>บันทึก</span>
              </button>
            </div>
          </div>
        ) : (
          // แสดงก่อนรับคูปอง
          <div className="p-4">
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 className="font-medium mb-2">รายละเอียดคูปอง</h4>
              <p className="text-sm text-gray-700 mb-2">
                {description}
              </p>
              <div className="text-sm text-gray-700">
                <div className="font-medium">เงื่อนไขการใช้</div>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                  <li>ใช้ได้ที่สาขาที่ร่วมรายการเท่านั้น</li>
                  <li>ไม่สามารถใช้ร่วมกับโปรโมชั่นอื่นได้</li>
                  <li>1 สิทธิ์ต่อ 1 บิล</li>
                </ul>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-medium mb-2">รูปแบบคูปอง</h4>
              <div className="flex border rounded-lg overflow-hidden">
                <button
                  className={`flex-1 py-3 text-center ${
                    codeType === "qrcode"
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
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
                  onClick={() => setCodeType("barcode")}
                >
                  <div className="flex items-center justify-center gap-2">
                    <Barcode className="h-5 w-5" />
                    <span>Barcode</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-500 mb-4 text-center">
              คูปองจะถูกบันทึกไว้ใน &quot;คูปองของฉัน&quot; หลังจากรับคูปอง
            </div>

            <button
              onClick={handleCollect}
              className="w-full bg-primary text-white py-3 rounded-lg font-medium"
            >
              ใช้คูปอง
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RedeemModal;
