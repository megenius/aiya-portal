import { useNavigate } from "@remix-run/react";
import React, { useState, useEffect, useCallback } from "react";
import { PageLiff } from "~/types/page";
import QRCode from '~/components/QRCode';
import PointButton from "./PointButton";
import { Ticket } from "lucide-react";
import { VoucherStats } from "~/types/app";
import { getDirectusFileUrl } from "~/utils/files";
import { useLineLiff } from "~/contexts/LineLiffContext";

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

const Header: React.FC<HeaderProps> = ({ page, profile, language, userProfileId, voucherUserStats }) => {
  const navigate = useNavigate();
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const welcomeText = page.metadata.welcomeText[language];
  const subWelcomeText = page.metadata.subWelcomeText[language];
  const { liff } = useLineLiff();
  const primaryColor = page.bg_color || "#1DB446";
  const showInvite = page.metadata.layout?.showInvite ?? true;
  const couponCount = (voucherUserStats?.collected ?? 0) + (voucherUserStats?.pending_confirmation ?? 0);

  useEffect(() => {
    if (userProfileId && page) {
      const url = new URL("https://miniapp.line.me");
      url.pathname = `/${page.liff_id}`;
      url.searchParams.set('ref', userProfileId);
      
      setShareUrl(url.toString());
    }
  }, [userProfileId, page]);

  const navigateToReward = useCallback(() => {
    navigate(`/a/${page.liff_id}/${page.slug}/reward`);
  }, [navigate, page.liff_id, page.slug]);

  const handleOpenShareModal = useCallback(() => {
    if (!userProfileId) {
      console.error('Missing userProfileId');
      alert('ไม่สามารถสร้างลิงก์ชวนเพื่อนได้ กรุณาลองใหม่อีกครั้ง');
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
          altText: `${profile?.displayName || 'เพื่อนของคุณ'} ชวนคุณมาใช้แอปพลิเคชัน ${page.name}!`,
          contents: {
            type: "bubble",
            hero: {
              type: "image",
              url: page.cover || page.logo || "https://via.placeholder.com/1000x400",
              size: "full",
              aspectRatio: "20:13",
              aspectMode: "cover"
            },
            body: {
              type: "box",
              layout: "vertical",
              spacing: "md",
              contents: [
                {
                  type: "text",
                  text: `${profile?.displayName || 'เพื่อนของคุณ'} ชวนคุณมาร่วมสนุก!`,
                  weight: "bold",
                  size: "xl",
                  wrap: true
                },
                {
                  type: "box",
                  layout: "baseline",
                  contents: [
                    {
                      type: "icon",
                      url: profile?.pictureUrl || "https://via.placeholder.com/72",
                      size: "sm"
                    },
                    {
                      type: "text",
                      text: "ใช้บริการร้าน",
                      size: "sm",
                      color: "#999999",
                      margin: "md"
                    },
                    {
                      type: "text",
                      text: page.name,
                      size: "sm",
                      color: "#666666",
                      margin: "md",
                      flex: 0,
                      weight: "bold"
                    }
                  ]
                },
                {
                  type: "text",
                  text: page.description || "แอปพลิเคชันใหม่ที่น่าสนใจ พร้อมโปรโมชันและสิทธิพิเศษมากมาย!",
                  size: "sm",
                  color: "#999999",
                  wrap: true
                }
              ]
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
                    uri: shareUrl
                  },
                  style: "primary",
                  color: primaryColor
                }
              ]
            }
          }
        }
      ]);
      setIsShareModalOpen(false);
    } catch (error) {
      console.error('Error sharing to LINE:', error);
    }
  }, [liff, page, profile, shareUrl, primaryColor]);

  const copyShareLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
      alert('ไม่สามารถคัดลอกลิงก์ได้');
    }
  }, [shareUrl]);

  const handleShare = useCallback(async () => {
    try {
      await navigator.share({
        title: `ชวนเพื่อนใช้ ${page.name}`,
        text: `${profile?.displayName || 'เพื่อนของคุณ'} ชวนคุณมาใช้แอปพลิเคชัน ${page.name}!`,
        url: shareUrl
      });
      setIsShareModalOpen(false);
    } catch (err) {
      console.error('Error sharing:', err);
    }
  }, [page.name, profile?.displayName, shareUrl]);

  const closeModal = useCallback(() => setIsShareModalOpen(false), []);

  const couponText = {
    th : "คูปอง",
    en : "coupon"
  }

  return (
    <>
      <div className="p-4 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {profile?.pictureUrl && (
            <img
              src={profile.pictureUrl}
              alt="Profile"
              className="w-10 h-10 rounded-full"
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
          {showInvite && <button
            onClick={handleOpenShareModal}
            className="flex items-center justify-center rounded-full border-2 text-sm gap-1 px-3 py-1.5"
            style={{ 
              borderColor: primaryColor,
              color: primaryColor,
              backgroundColor: "white"
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
          </button>}

          {page?.metadata?.template === "promotion" && <button
            className="flex items-center gap-2 bg-primary rounded-full px-3 py-1.5 text-white text-lg font-medium shadow-none border-none focus:outline-none"
            style={{ backgroundColor: primaryColor }}
            type="button"
            onClick={() => navigate(`/a/${page.liff_id}/${page.slug}/my-coupons`)}
          >
            <Ticket />
            <span className="text-sm">{couponCount} {couponText[language]}</span>
          </button>}

          <PointButton points={0} primaryColor={primaryColor} onClick={navigateToReward} showPoint={page?.metadata?.layout?.showPoint} />
        </div>
      </div>

      {isShareModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white p-5 rounded-lg w-11/12 max-w-md animate-scaleIn">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">ชวนเพื่อน</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="ปิด"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {profile?.pictureUrl && (
              <div className="flex justify-center mb-2">
                <img 
                  src={profile.pictureUrl} 
                  alt={profile.displayName || "โปรไฟล์"}
                  className="w-16 h-16 rounded-full border-2 border-white shadow-md"
                />
              </div>
            )}

            <p className="text-center text-gray-600 mb-4">
              สแกน QR Code นี้เพื่อเข้าร่วมใช้งานแอปพลิเคชัน
            </p>

            <div className="flex justify-center mb-6">
              <div className="p-2 border-4 border-white shadow-md rounded-lg bg-white">
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
                className="w-full py-3 rounded-lg flex items-center justify-center gap-2 bg-[#06C755] text-white font-medium hover:bg-opacity-90 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.952 12.992c0-3.584-3.6-6.496-8.016-6.496-4.416 0-8.016 2.912-8.016 6.496 0 3.232 2.864 5.936 6.752 6.432.272.064.64.192.736.432.08.224.048.576.024.8 0 0-.112.656-.136.8-.048.224-.208.864.752.464s4.992-2.944 6.816-5.024c1.232-1.376 1.088-2.768 1.088-3.904zm-10.928 1.6H7.792a.318.318 0 01-.32-.32V11.76c0-.176.144-.32.32-.32s.32.144.32.32v2.192h.912c.176 0 .32.144.32.32s-.144.32-.32.32zm1.76 0a.318.318 0 01-.32-.32v-2.512a.318.318 0 01.32-.32c.176 0 .32.144.32.32v2.512c0 .176-.144.32-.32.32zm4.384 0h-.912a.318.318 0 01-.32-.32V11.76c0-.176.144-.32.32-.32s.32.144.32.32v2.192h.912c.176 0 .32.144.32.32s-.144.32-.32.32zm1.824.208a.6.6 0 01-.112-.016.318.318 0 01-.288-.352l.416-2.512a.32.32 0 01.368-.272c.176.032.304.192.272.368l-.416 2.512a.394.394 0 01-.24.272z"/>
                </svg>
                ชวนเพื่อนใน LINE
              </button>

              <button
                onClick={copyShareLink}
                className="w-full py-3 rounded-lg border flex items-center justify-center gap-2 font-medium relative transition-all"
                style={{ 
                  borderColor: copied ? primaryColor : '#e2e8f0',
                  color: copied ? primaryColor : '#4a5568'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                {copied ? 'คัดลอกแล้ว' : 'คัดลอกลิงก์'}
                
                {copied && (
                  <span className="absolute right-3 text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </span>
                )}
              </button>

              {navigator.share && (
                <button
                  onClick={handleShare}
                  className="w-full py-3 rounded-lg border border-gray-300 flex items-center justify-center gap-2 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
