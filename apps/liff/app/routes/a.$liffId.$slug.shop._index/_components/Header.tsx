import { useNavigate } from "@remix-run/react";
import React, { useState, useEffect, useCallback } from "react";
import { PageLiff } from "~/types/page";
import QRCode from "~/components/QRCode";
import PointButton from "./PointButton";
import { Ticket } from "lucide-react";
import { VoucherStats } from "~/types/app";
import { getDirectusFileUrl } from "~/utils/files";
import { useLineLiff } from "~/contexts/LineLiffContext";
import LazyImage from "~/components/LazyImage";

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
  userProfileId?: string;
  voucherUserStats?: VoucherStats;
}

const Header: React.FC<HeaderProps> = ({
  page,
  profile,
  language,
  userProfileId,
  voucherUserStats,
}) => {
  const navigate = useNavigate();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const welcomeText = page.metadata.welcomeText[language];
  const subWelcomeText = page.metadata.subWelcomeText[language];
  const { liff } = useLineLiff();
  const primaryColor = page.bg_color || "#1DB446";
  const showInvite = page.metadata.layout?.showInvite ?? true;
  const showMyCoupons = page.metadata.layout?.showMyCoupons ?? true;
  const couponCount =
    (voucherUserStats?.collected ?? 0) +
    (voucherUserStats?.pending_confirmation ?? 0);

  useEffect(() => {
    if (userProfileId && page) {
      const url = new URL("https://miniapp.line.me");
      url.pathname = `/${page.liff_id}`;
      url.searchParams.set("ref", userProfileId);

      setShareUrl(url.toString());
    }
  }, [userProfileId, page]);

  const navigateToReward = useCallback(() => {
    navigate(`/a/${page.liff_id}/${page.slug}/reward`);
  }, [navigate, page.liff_id, page.slug]);

  const handleOpenShareModal = useCallback(() => {
    if (!userProfileId) {
      console.error("Missing userProfileId");
      alert("ไม่สามารถสร้างลิงก์ชวนเพื่อนได้ กรุณาลองใหม่อีกครั้ง");
      return;
    }
    setIsShareModalOpen(true);
  }, [userProfileId]);

  const shareToLine = useCallback(async () => {
    if (!liff) return;

    try {
      await liff.shareTargetPicker([
        {
          type: "flex",
          altText: `${profile?.displayName || "เพื่อนของคุณ"} ชวนคุณมาใช้แอปพลิเคชัน ${page.name}!`,
          contents: {
            type: "bubble",
            hero: {
              type: "image",
              url:
                page.cover ||
                page.logo ||
                "https://via.placeholder.com/1000x400",
              size: "full",
              aspectRatio: "20:13",
              aspectMode: "cover",
            },
            body: {
              type: "box",
              layout: "vertical",
              spacing: "md",
              contents: [
                {
                  type: "text",
                  text: `${profile?.displayName || "เพื่อนของคุณ"} ชวนคุณมาร่วมสนุก!`,
                  weight: "bold",
                  size: "xl",
                  wrap: true,
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "icon",
                      url:
                        profile?.pictureUrl || "https://via.placeholder.com/72",
                      size: "sm",
                    },
                    {
                      type: "text",
                      text: "ใช้บริการร้าน",
                      size: "sm",
                      color: "#999999",
                      margin: "md",
                    },
                    {
                      type: "text",
                      text: page.name,
                      size: "sm",
                      color: "#666666",
                      margin: "md",
                      flex: 0,
                      weight: "bold",
                    },
                  ],
                },
                {
                  type: "text",
                  text:
                    page.description ||
                    "แอปพลิเคชันใหม่ที่น่าสนใจ พร้อมโปรโมชันและสิทธิพิเศษมากมาย!",
                  size: "sm",
                  color: "#999999",
                  wrap: true,
                },
              ],
            },
            footer: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "button",
                  action: {
                    type: "uri",
                    label: "เข้าร่วมเลย",
                    uri: shareUrl,
                  },
                  style: "primary",
                  color: primaryColor,
                },
              ],
            },
          },
        },
      ]);
      setIsShareModalOpen(false);
    } catch (error) {
      console.error("Error sharing to LINE:", error);
    }
  }, [liff, page, profile, shareUrl, primaryColor]);

  const copyShareLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
      alert("ไม่สามารถคัดลอกลิงก์ได้");
    }
  }, [shareUrl]);

  const handleShare = useCallback(async () => {
    try {
      await navigator.share({
        title: `ชวนเพื่อนใช้ ${page.name}`,
        text: `${profile?.displayName || "เพื่อนของคุณ"} ชวนคุณมาใช้แอปพลิเคชัน ${page.name}!`,
        url: shareUrl,
      });
      setIsShareModalOpen(false);
    } catch (err) {
      console.error("Error sharing:", err);
    }
  }, [page.name, profile?.displayName, shareUrl]);

  const closeModal = useCallback(() => setIsShareModalOpen(false), []);

  const couponText = {
    th: "คูปอง",
    en: "coupon",
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 pb-3">
        <div className="flex items-center gap-3">
          {profile?.pictureUrl && (
            <LazyImage
              src={profile.pictureUrl}
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover"
              wrapperClassName="h-10 w-10 rounded-full"
              placeholder="shimmer"
              rootMargin="200px"
              width={40}
              height={40}
            />
          )}
          <div>
            <div className="font-semibold">
              {welcomeText}, {profile?.displayName}
            </div>
            <div className="text-sm text-gray-500">{subWelcomeText}</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {showInvite && (
            <button
              onClick={handleOpenShareModal}
              className="flex items-center justify-center gap-1 rounded-full border-2 px-3 py-1.5 text-sm"
              style={{
                borderColor: primaryColor,
                color: primaryColor,
                backgroundColor: "white",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <line x1="19" y1="8" x2="19" y2="14"></line>
                <line x1="16" y1="11" x2="22" y2="11"></line>
              </svg>
              ชวน
            </button>
          )}

          {showMyCoupons && (
            <button
              className="flex items-center gap-2 rounded-full border-none bg-primary px-3 py-1.5 text-lg font-medium text-white shadow-none focus:outline-none"
              style={{ backgroundColor: primaryColor }}
              type="button"
              onClick={() =>
                navigate(`/a/${page.liff_id}/${page.slug}/my-coupons`)
              }
            >
              <Ticket />
              <span className="text-sm">
                {couponCount} {couponText[language]}
              </span>
            </button>
          )}

          <PointButton
            points={0}
            primaryColor={primaryColor}
            onClick={navigateToReward}
            showPoint={page?.metadata?.layout?.showPoint}
          />
        </div>
      </div>

      {isShareModalOpen && (
        <div className="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="animate-scaleIn w-11/12 max-w-md rounded-lg bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">ชวนเพื่อน</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 transition-colors hover:text-gray-700"
                aria-label="ปิด"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {profile?.pictureUrl && (
              <div className="mb-2 flex justify-center">
                <LazyImage
                  src={profile.pictureUrl}
                  alt={profile.displayName || "โปรไฟล์"}
                  className="h-16 w-16 rounded-full border-2 border-white shadow-md object-cover"
                  wrapperClassName="h-16 w-16 rounded-full"
                  placeholder="shimmer"
                  rootMargin="200px"
                  width={64}
                  height={64}
                />
              </div>
            )}

            <p className="mb-4 text-center text-gray-600">
              สแกน QR Code นี้เพื่อเข้าร่วมใช้งานแอปพลิเคชัน
            </p>

            <div className="mb-6 flex justify-center">
              <div className="rounded-lg border-4 border-white bg-white p-2 shadow-md">
                {shareUrl && (
                  <QRCode
                    value={shareUrl}
                    size={180}
                    level="H"
                    fgColor="#000000"
                    bgColor="#FFFFFF"
                    logoSrc={getDirectusFileUrl(page.image as string)}
                  />
                )}
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={shareToLine}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#06C755] py-3 font-medium text-white transition-colors hover:bg-opacity-90"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.952 12.992c0-3.584-3.6-6.496-8.016-6.496-4.416 0-8.016 2.912-8.016 6.496 0 3.232 2.864 5.936 6.752 6.432.272.064.64.192.736.432.08.224.048.576.024.8 0 0-.112.656-.136.8-.048.224-.208.864.752.464s4.992-2.944 6.816-5.024c1.232-1.376 1.088-2.768 1.088-3.904zm-10.928 1.6H7.792a.318.318 0 01-.32-.32V11.76c0-.176.144-.32.32-.32s.32.144.32.32v2.192h.912c.176 0 .32.144.32.32s-.144.32-.32.32zm1.76 0a.318.318 0 01-.32-.32v-2.512a.318.318 0 01.32-.32c.176 0 .32.144.32.32v2.512c0 .176-.144.32-.32.32zm4.384 0h-.912a.318.318 0 01-.32-.32V11.76c0-.176.144-.32.32-.32s.32.144.32.32v2.192h.912c.176 0 .32.144.32.32s-.144.32-.32.32zm1.824.208a.6.6 0 01-.112-.016.318.318 0 01-.288-.352l.416-2.512a.32.32 0 01.368-.272c.176.032.304.192.272.368l-.416 2.512a.394.394 0 01-.24.272z" />
                </svg>
                ชวนเพื่อนใน LINE
              </button>

              <button
                onClick={copyShareLink}
                className="relative flex w-full items-center justify-center gap-2 rounded-lg border py-3 font-medium transition-all"
                style={{
                  borderColor: copied ? primaryColor : "#e2e8f0",
                  color: copied ? primaryColor : "#4a5568",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                {copied ? "คัดลอกแล้ว" : "คัดลอกลิงก์"}

                {copied && (
                  <span className="absolute right-3 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                )}
              </button>

              {navigator.share && (
                <button
                  onClick={handleShare}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  แชร์ผ่านแอปอื่น
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
