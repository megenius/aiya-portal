import { useNavigate } from "@remix-run/react";
import React, { useState } from "react";
import { useLineLiff } from "~/hooks/useLineLiff";
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
  userProfileId?: string; // เพิ่ม userProfileId สำหรับใช้เป็น referrer
}

const Header: React.FC<HeaderProps> = ({ page, profile, language, userProfileId }) => {
  const navigate = useNavigate();
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const welcomeText = page.metadata.welcomeText[language];
  const subWelcomeText = page.metadata.subWelcomeText[language];
  const { data: liff } = useLineLiff();

  const navigateToReward = () => {
    navigate(`/a/${page.liff_id}/${page.slug}/reward`);
  };

  // ฟังก์ชันสำหรับแชร์ลิงก์ referral
  const handleInviteFriend = async () => {
    if (!userProfileId) {
      console.error('Missing userProfileId');
      alert('ไม่สามารถสร้างลิงก์ชวนเพื่อนได้ กรุณาลองใหม่อีกครั้ง');
      return;
    }

    try {
      // สร้าง URL สำหรับแชร์
      const shareUrl = new URL(window.location.origin);
      shareUrl.pathname = `/a/${page.liff_id}/${page.slug}`;
      shareUrl.searchParams.set('ref', userProfileId);
      // เปิด Line Share Dialog
      if (liff) {
        await liff.shareTargetPicker([
          {
            type: "text",
            text: `${profile?.displayName || 'เพื่อนของคุณ'} ชวนคุณมาใช้แอปพลิเคชัน ${page.name}! คลิกที่ลิงก์นี้เลย: ${shareUrl.toString()}`
          }
        ]);
      } else {
        // Fallback สำหรับกรณีที่ไม่มี LIFF SDK
        if (navigator.share) {
          await navigator.share({
            title: `ชวนเพื่อนใช้ ${page.name}`,
            text: `${profile?.displayName || 'เพื่อนของคุณ'} ชวนคุณมาใช้แอปพลิเคชัน ${page.name}!`,
            url: shareUrl.toString()
          });
        } else {
          // ถ้า Web Share API ไม่สามารถใช้ได้ แสดง modal สำหรับ copy URL
          setIsInviteModalOpen(true);
        }
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  // ฟังก์ชันสำหรับ copy URL
  const copyShareLink = async () => {
    const shareUrl = new URL(window.location.origin);
    shareUrl.pathname = `/a/${page.liff_id}/${page.slug}`;
    shareUrl.searchParams.set('ref', userProfileId || '');

    try {
      await navigator.clipboard.writeText(shareUrl.toString());
      alert('คัดลอกลิงก์สำเร็จ');
    } catch (error) {
      console.error('Failed to copy:', error);
      alert('ไม่สามารถคัดลอกลิงก์ได้');
    }

    setIsInviteModalOpen(false);
  };

  return (
    <>
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
        <div className="flex items-center gap-2">
          {/* ปุ่มชวนเพื่อน */}
          <button
            onClick={handleInviteFriend}
            className="flex items-center justify-center rounded-full bg-white border border-primary text-primary px-3 py-1 text-sm"
            style={{
              borderColor: page.bg_color ?? undefined,
              color: page.bg_color ?? undefined
            }}
          >
            <span className="mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <line x1="19" y1="8" x2="19" y2="14"></line>
                <line x1="16" y1="11" x2="22" y2="11"></line>
              </svg>
            </span>
            {/* ชวนเพื่อน */}
          </button>

          <button
            onClick={navigateToReward}
            className="flex items-center justify-center rounded-full bg-blue-50 border-2 border-primary text-sm gap-1"
            style={{ borderColor: page.bg_color ?? undefined }}
          >
            <div className="px-2 py-1 flex items-center gap-1 rounded-full border bg-primary text-white" style={{ backgroundColor: page.bg_color ?? undefined }}>
              <h4 className="">Point</h4>
            </div>
            <div className="flex items-center gap-1 pe-2 text-primary" style={{ color: page.bg_color ?? undefined }}>
              <h4 className="font-medium">0</h4>
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
          </button>
        </div>
      </div>

      {/* Modal สำหรับแชร์ลิงก์ */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg w-11/12 max-w-md">
            <h3 className="text-lg font-bold mb-4">ชวนเพื่อน</h3>
            <p className="mb-4">คัดลอกลิงก์นี้และส่งให้เพื่อนของคุณ</p>
            <div className="flex mb-4">
              <button
                onClick={copyShareLink}
                className="w-full bg-primary text-white py-2 rounded"
                style={{ backgroundColor: page.bg_color ?? undefined }}
              >
                คัดลอกลิงก์
              </button>
            </div>
            <button
              onClick={() => setIsInviteModalOpen(false)}
              className="w-full border border-gray-300 py-2 rounded"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
