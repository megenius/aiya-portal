import { AlertCircle, Barcode, Clock, QrCode, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import LazyImage from "~/components/LazyImage";
import { useQueryClient } from "@tanstack/react-query";
import BarcodeGenerator from "~/components/BarCodeGenerater";
import QRCodeGenerator from "~/components/QRCodeGenerator";
import { useRedeemVoucher } from "~/hooks/vouchers/useRedeemVoucher";
import { useUpdateVoucherCode } from "~/hooks/vouchers/useUpdateVoucherCode";
import { VoucherCodeUpdate, VoucherUser } from "~/types/app";
import { PageLiff } from "~/types/page";
import { getDirectusFileUrl } from "~/utils/files";
import Button from "../routes/a.$liffId.$slug.coupon.$couponId/_components/Button";

// Helper: convert a color string to an rgba with alpha (supports #RGB, #RRGGBB, rgb, rgba)
function toAlpha(color: string, alpha: number): string {
  const a = Math.max(0, Math.min(1, alpha));
  if (!color) return `rgba(0,0,0,${a})`;

  const trimmed = color.trim();

  // Hex formats: #RGB or #RRGGBB
  if (trimmed.startsWith("#")) {
    const hex = trimmed.slice(1);
    if (hex.length === 3) {
      const r = parseInt(hex[0] + hex[0], 16);
      const g = parseInt(hex[1] + hex[1], 16);
      const b = parseInt(hex[2] + hex[2], 16);
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    if (hex.length === 6) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
  }

  // rgb or rgba
  const rgbMatch = trimmed.match(
    /rgba?\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*(\d*\.?\d+))?\s*\)/i,
  );
  if (rgbMatch) {
    const r = Math.min(255, parseInt(rgbMatch[1], 10));
    const g = Math.min(255, parseInt(rgbMatch[2], 10));
    const b = Math.min(255, parseInt(rgbMatch[3], 10));
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  // Fallback: return original color (alpha may not apply)
  return trimmed;
}

// Default primary fallback (Tailwind blue-500)
const defaultPrimaryColor = "#3B82F6";

// Utils to parse and mix colors for deriving tones from primaryColor
function parseColorToRgb(
  color: string,
): { r: number; g: number; b: number } | null {
  const c = color?.trim();
  if (!c) return null;
  if (c.startsWith("#")) {
    const hex = c.slice(1);
    if (hex.length === 3) {
      const r = parseInt(hex[0] + hex[0], 16);
      const g = parseInt(hex[1] + hex[1], 16);
      const b = parseInt(hex[2] + hex[2], 16);
      return { r, g, b };
    }
    if (hex.length === 6) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return { r, g, b };
    }
  }
  const m = c.match(/rgba?\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/i);
  if (m) {
    const r = Math.min(255, parseInt(m[1], 10));
    const g = Math.min(255, parseInt(m[2], 10));
    const b = Math.min(255, parseInt(m[3], 10));
    return { r, g, b };
  }
  return null;
}

function mixWith(
  color: string,
  target: { r: number; g: number; b: number },
  weight: number,
): string {
  const rgb = parseColorToRgb(color);
  const w = Math.max(0, Math.min(1, weight));
  if (!rgb) return color;
  const r = Math.round(rgb.r * (1 - w) + target.r * w);
  const g = Math.round(rgb.g * (1 - w) + target.g * w);
  const b = Math.round(rgb.b * (1 - w) + target.b * w);
  return `rgb(${r}, ${g}, ${b})`;
}

function darkenColor(color: string, weight: number): string {
  // Mix with black
  return mixWith(color, { r: 0, g: 0, b: 0 }, weight);
}

interface RedeemModalProps {
  page: PageLiff;
  voucherUser: VoucherUser;
  language: string;
  primaryColor: string;
  state?: "redeem" | "collected";
  countdown?: number;
  isOpen: boolean;
  onClose: () => void;
  showRedeemConfirmation?: boolean;
}

const RedeemModal: React.FC<RedeemModalProps> = ({
  page,
  voucherUser,
  language,
  primaryColor = defaultPrimaryColor,
  state = "redeem",
  countdown = 15, // Default to 15 minutes
  isOpen,
  onClose,
  showRedeemConfirmation = true,
}) => {
  const voucher = voucherUser.code.voucher;
  const usedDate = voucherUser.used_date;
  const redeemVoucher = useRedeemVoucher();
  const updateVoucherCode = useUpdateVoucherCode();
  const queryClient = useQueryClient();
  const [codeType, setCodeType] = useState("qrcode");
  const [remainingTime, setRemainingTime] = useState(countdown * 60);
  const [showExpireWarning, setShowExpireWarning] = useState(false);
  const [isRedeemed, setIsRedeemed] = useState(Boolean(usedDate));
  const [pageState, setPageState] = useState("redeem");
  const title = voucher.metadata.title[language].replace(
    /\$\{value\}/g,
    getVoucherValueWithType(voucherUser),
  );
  // const description = voucher.metadata.description[language]?.replace(
  //   /\\n/g,
  //   "\n"
  // );
  // const condition = voucher.metadata.condition[language]?.replace(/\\n/g, "\n");

  // const [activeTab, setActiveTab] = useState("details");

  // const tabs = [
  //   {
  //     id: "details",
  //     label: {
  //       th: "รายละเอียด",
  //       en: "Details",
  //     },
  //   },
  //   {
  //     id: "conditions",
  //     label: {
  //       th: "เงื่อนไข",
  //       en: "Conditions",
  //     },
  //   },
  //   // { id: "locations", label: "สาขา" },
  // ];
  // After Collect Page
  const collectedSuccessText = {
    th: "ยินดีด้วย 🎉",
    en: "Congratulations 🎉",
  };

  // const collectedSuccessDescription = {
  //   th: `${getVoucherThaiDescription(voucherUser, voucher, language)}\n`,
  //   en: `You have received a discount of ${getVoucherValueWithType(voucherUser)}`,
  // };
  const collectedDescription = {
    th: `กดปุ่มเมื่ออยู่ต่อหน้าพนักงานเท่านั้น!\nคูปองจะมีอายุใช้งาน ${countdown} นาทีหลังกด`,
    en: `Please scan the coupon when you are in front of the cashier.\nCoupon will expire in ${countdown} minutes after scanning`,
  };
  // const seeMyVouchersText = {
  //   th: "ดูคูปองของฉัน",
  //   en: "See my coupons",
  // };
  const laterText = {
    th: "เก็บไว้ก่อน",
    en: "Later",
  };

  // Confirmation Modal Page
  const confirmText = {
    th: "ยืนยันการใช้คูปองไหม",
    en: "Do you want to redeem this coupon?",
  };
  const confirmDescription = {
    th: `กดปุ่มเมื่ออยู่ต่อหน้าพนักงานเท่านั้น!\nคูปองจะมีอายุใช้งาน ${countdown} นาทีหลังกด`,
    en: `Please scan the coupon when you are in front of the cashier.\nCoupon will expire in ${countdown} minutes after scanning`,
  };
  // const warningText = {
  //   th: `คูปองมีอายุ ${countdown} นาทีหลังจากกดใช้คูปอง`,
  //   en: `Coupon will expire in ${countdown} minutes after redeem`,
  // };
  const cancelText = {
    th: "ไม่ใช้",
    en: "No",
  };
  const redeemText = {
    th: "ใช้คูปองทันที",
    en: "Redeem Now",
  };

  // Qr code and Barcode Page
  const voucherWillExpireInText = {
    th: "คูปองนี้จะหมดอายุในอีก",
    en: "This coupon will expire in",
  };
  const warningExpireText = {
    th: "คูปองกำลังจะหมดอายุ! กรุณาใช้งานทันที",
    en: "Coupon is about to expire! Please use it immediately",
  };
  const suggestionText = {
    th: "สำหรับพนักงานจุดขายเท่านั้น",
    en: "For POS staff only",
  };
  const confirmationButtonText = {
    th: "ยืนยันว่าใช้แล้ว",
    en: "Confirm redeem",
  };

  // Confirmation Redeem Modal
  const confirmRedeemText = {
    th: "ยืนยันใช่ไหมว่าคูปองนี้ใช้งานแล้ว",
    en: "Do you confirm that this coupon has been redeemed?",
  };
  const confirmRedeemDescription = {
    th: "กรุณาตรวจสอบให้แน่ใจว่าคุณได้แสกนคูปองนี้แล้ว เพื่อป้องกันการเสียสิทธิ์ของลูกค้า",
    en: "Please ensure that you have scanned this coupon to prevent customer rights from being lost.",
  };
  const confirmRedeemButtonText = {
    th: "ยืนยัน",
    en: "Confirm",
  };

  // Expired Page
  const expiredText = {
    th: "คูปองหมดอายุแล้ว",
    en: "Coupon expired",
  };
  const okText = {
    th: "ตกลง",
    en: "OK",
  };

  // Initialize remaining time based on usedDate if it exists
  useEffect(() => {
    if (usedDate) {
      const usedDateTime = new Date(usedDate).getTime();
      const expiryTime = usedDateTime + countdown * 60 * 1000; // 15 minutes after used_date
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
  }, [usedDate, countdown]);

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
      setPageState("expired");
      return;
    }
    if (remainingTime <= 60) {
      setShowExpireWarning(true);
    }
  }, [remainingTime]);

  // เมื่อคูปองหมดเวลา ให้รีเฟรชรายการคูปองของฉันทันที
  useEffect(() => {
    if (pageState === "expired") {
      queryClient.invalidateQueries({
        queryKey: ["my-vouchers-v2"],
        refetchType: "active",
      });
      queryClient.invalidateQueries({
        queryKey: ["voucher-user"],
        exact: true,
        refetchType: "active",
      });
    }
  }, [pageState, queryClient]);

  if (!voucher) return null;

  const handleRedeem = () => {
    const data: Partial<VoucherUser> = {
      id: voucherUser.id,
    };
    redeemVoucher.mutate(
      { variables: data },
      { onSuccess: () => setIsRedeemed(true) },
    );
  };

  const handleConfirmState = () => {
    const data: VoucherCodeUpdate = {
      code_id: voucherUser.code.id as string,
      voucher_id: voucherUser.code.voucher.id as string,
      code_status: "used",
    };
    updateVoucherCode.mutate(
      { variables: data },
      {
        onSuccess: () => {
          setPageState("redeem");
          onClose();
        },
        onError: (err) => {
          console.error(err);
          onClose();
        },
      },
    );
  };

  // คำนวณเปอร์เซ็นต์เวลาที่เหลือ
  const timePercentage = (remainingTime / (countdown * 60)) * 100;

  // Derive a warning tone from primaryColor for the near-expiry alert
  const warningColor = darkenColor(primaryColor, 0.35);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="m-4 w-full max-w-sm overflow-hidden rounded-2xl bg-white p-4">
        {isRedeemed ? (
          <>
            {pageState === "redeem" && (
              <>
                <div className="mb-3 flex justify-between">
                  <div className="flex items-start gap-3">
                    <LazyImage
                      src={getDirectusFileUrl(voucher.cover as string) ?? ""}
                      alt={title}
                      wrapperClassName="h-20 w-20"
                      className="h-full w-full rounded-lg object-cover"
                      placeholder="blur"
                      blurDataURL={getDirectusFileUrl(voucher.cover as string, {
                        width: 24,
                        height: 24,
                      })}
                    />
                    <div>
                      <h3 className="text-lg font-medium">
                        {voucher.voucher_brand_id?.name}
                      </h3>
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
                <div className="space-y-3">
                  {/* แสดงเวลาที่เหลือ */}
                  <div
                    className="rounded-lg p-4"
                    style={{ backgroundColor: toAlpha(primaryColor, 0.1) }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock
                          className="h-5 w-5"
                          style={{ color: primaryColor }}
                        />
                        <span className="text-sm font-medium text-gray-700">
                          {voucherWillExpireInText[language]}
                        </span>
                      </div>
                      <div
                        className="text-xl font-bold"
                        style={{ color: primaryColor }}
                      >
                        {formatTime(remainingTime)}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-2 h-2 w-full rounded-full bg-gray-300">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${timePercentage}%`,
                          backgroundColor: primaryColor,
                        }}
                      ></div>
                    </div>

                    {/* Expire Warning */}
                    {page.metadata.template !== "promotion" &&
                      showExpireWarning && (
                        <div
                          className="mt-2 flex items-center gap-2 text-sm"
                          style={{ color: warningColor }}
                        >
                          <AlertCircle
                            className="h-4 w-4"
                            style={{ color: warningColor }}
                          />
                          <span>{warningExpireText[language]}</span>
                        </div>
                      )}
                  </div>

                  {/* Code Type Selection */}
                  <div className="flex overflow-hidden rounded-lg">
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
                  <div className="mb-4 rounded-lg border p-4">
                    <div className="flex flex-col items-center">
                      {/* <img
                    src="/api/placeholder/200/200"
                    alt="QR Code"
                    className="w-48 h-48 mb-2"
                  /> */}
                      {codeType === "qrcode" ? (
                        <QRCodeGenerator text={voucherUser.code.code!} />
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
                  {showRedeemConfirmation && (
                    <div className="flex items-center justify-between gap-5">
                      <h4 className="text-nowrap text-sm">
                        {suggestionText[language]}
                      </h4>
                      <Button
                        onClick={() => {
                          setPageState("confirm");
                        }}
                        text={confirmationButtonText[language]}
                        primaryColor={primaryColor}
                      />
                    </div>
                  )}
                </div>
              </>
            )}
            {pageState === "confirm" && (
              <>
                <div className="space-y-3">
                  <div className="space-y-4 py-5 text-center">
                    <h2 className="text-lg font-medium text-gray-800">
                      {confirmRedeemText[language]}
                    </h2>
                    <h4 className="text-gray-600">
                      {confirmRedeemDescription[language]}
                    </h4>
                  </div>

                  <div className="flex justify-between gap-3">
                    <Button
                      onClick={() => {
                        setPageState("redeem");
                        onClose();
                      }}
                      text={cancelText[language]}
                      secondaryColor={primaryColor}
                    />
                    <Button
                      onClick={handleConfirmState}
                      text={confirmRedeemButtonText[language]}
                      primaryColor={primaryColor}
                    />
                  </div>
                </div>
              </>
            )}
            {pageState === "expired" && (
              <>
                <div className="flex flex-col items-center justify-center space-y-3 pb-5 pt-3 text-center">
                  <div className="flex items-start gap-3 text-start">
                    <LazyImage
                      src={getDirectusFileUrl(voucher.cover as string) ?? ""}
                      alt={title}
                      wrapperClassName="h-20 w-20"
                      className="h-full w-full rounded-lg object-cover"
                      placeholder="blur"
                      blurDataURL={getDirectusFileUrl(voucher.cover as string, {
                        width: 24,
                        height: 24,
                      })}
                    />
                    <div>
                      <h3 className="text-lg font-medium">
                        {voucher.voucher_brand_id?.name}
                      </h3>
                      <h4 className="text-sm text-gray-500">{title}</h4>
                    </div>
                  </div>
                  {/* <div className="p-6 rounded-full bg-red-50">
                    <TicketX className={`h-8 w-8 text-red-600`} />
                  </div> */}

                  <h2 className="text-xl font-bold text-gray-800">
                    {expiredText[language]}
                  </h2>
                </div>

                <div className="flex justify-between gap-3">
                  <Button
                    onClick={onClose}
                    text={okText[language]}
                    primaryColor={primaryColor}
                  />
                </div>
              </>
            )}
          </>
        ) : (
          // แสดงก่อนรับคูปอง
          <>
            {state === "redeem" && (
              <div className="space-y-3">
                <div className="space-y-6 py-5 text-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {confirmText[language]}
                  </h2>
                  <div className="whitespace-pre-line rounded-2xl bg-gray-100 p-2 px-10">
                    <h4 className="text-gray-600">
                      {confirmDescription[language]}
                    </h4>
                  </div>
                </div>

                <div className="flex justify-between gap-3">
                  <Button
                    onClick={onClose}
                    text={cancelText[language]}
                    secondaryColor={primaryColor}
                  />
                  <Button
                    onClick={handleRedeem}
                    text={redeemText[language]}
                    primaryColor={primaryColor}
                  />
                </div>
              </div>
            )}
            {state === "collected" && (
              <>
                <div className="flex w-full justify-end">
                  <button onClick={onClose} className="text-gray-500">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="space-y-6 pb-5 text-center">
                  <div className="space-y-1 text-center">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {collectedSuccessText[language]}
                    </h2>
                    {/* <h3 className="text-lg text-gray-600 whitespace-pre-line">
                      {collectedSuccessDescription[language]}
                    </h3> */}
                  </div>

                  <div className="whitespace-pre-line rounded-2xl bg-gray-100 p-2 px-10">
                    <h4 className="text-gray-600">
                      {collectedDescription[language]}
                    </h4>
                  </div>
                </div>
                <div className="flex justify-between gap-3">
                  {/* <Button
                    onClick={() =>
                      navigate(`/a/${page.liff_id}/${page.slug}/my-coupons`)
                    }
                    text={seeMyVouchersText[language]}
                    secondaryColor={primaryColor}
                  /> */}
                  <Button
                    onClick={onClose}
                    text={laterText[language]}
                    secondaryColor={primaryColor}
                  />
                  <Button
                    onClick={handleRedeem}
                    text={redeemText[language]}
                    primaryColor={primaryColor}
                  />
                </div>
              </>
            )}
          </>

          // <div className="space-y-3">
          //   <div>
          //     <Tabs
          //       language={language}
          //       tabs={tabs}
          //       activeTab={activeTab}
          //       setActiveTab={setActiveTab}
          //       primaryColor={primaryColor}
          //     />
          //     <div className="pt-2 max-h-48 overflow-y-auto text-sm text-gray-700 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          //       {activeTab === "details" && (
          //         <p className="whitespace-pre-wrap">{description}</p>
          //       )}
          //       {activeTab === "conditions" && (
          //         <p className="whitespace-pre-wrap">{condition}</p>
          //       )}
          //       {/* {activeTab === "locations" && (
          //         <ul className="whitespace-pre-wrap">
          //           <li>• สาขาเซ็นทรัลเวิลด์ ชั้น 7</li>
          //           <li>• สาขาสยามพารากอน ชั้น 4</li>
          //           <li>• สาขาเอ็มควอเทียร์ ชั้น 5</li>
          //         </ul>
          //       )} */}
          //     </div>
          //   </div>

          //   <div className="text-sm text-gray-500 text-center">
          //     {warningText[language]}
          //   </div>

          //   <button
          //     onClick={handleCollect}
          //     className="w-full bg-primary text-white py-3 rounded-lg font-medium"
          //     style={{ backgroundColor: primaryColor }}
          //   >
          //     {redeemText[language]}
          //   </button>
          // </div>
        )}
      </div>
    </div>
  );
};

function getVoucherValueWithType(voucherUser: VoucherUser) {
  return `${voucherUser.discount_value}${voucherUser.discount_type === "percentage" ? "%" : ""}`;
}

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

export default RedeemModal;
