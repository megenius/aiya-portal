import React from "react";
import { useNavigate, useParams, useOutletContext } from "@remix-run/react";
import LazyImage from "~/components/LazyImage";
import { getDirectusFileUrl } from "~/utils/files";
import { Voucher } from "~/types/app";
import BackButton from "~/components/BackButton";
import { Share2 } from "lucide-react";
import { useLineLiff } from "~/contexts/LineLiffContext";
import type { PageLiff } from "~/types/page";
import ShareModal from "~/components/ShareModal";
import type { Lang } from "~/i18n/messages";

interface HeaderProps {
  language: string;
  voucher?: Voucher;
  color?: string;
  isFollowed?: boolean;
  isIsClient: boolean;
}

const Header: React.FC<HeaderProps> = ({
  language,
  voucher,
  color,
  isFollowed,
  isIsClient,
}) => {
  const { liffId, slug, couponId } = useParams();
  const { page } = useOutletContext<{ page: PageLiff; lang: string }>();
  const { liff } = useLineLiff();
  const navigate = useNavigate();
  const [_isFollowed, setIsFollowed] = React.useState(isFollowed || false);
  const [isShareModalOpen, setIsShareModalOpen] = React.useState(false);

  const navigateToBack = () => {
    const idx = window.history.state?.idx ?? window.history.length;
    if (idx > 0) {
      navigate(-1);
    } else {
      navigate(`/a/${liffId}/${slug}/shop`);
    }
  };

  const handleFollow = () => {
    setIsFollowed(!_isFollowed);
  };

  const handleShare = () => {
    setIsShareModalOpen(true);
  };

  const shareUrl = `${typeof window !== "undefined" ? window.location.origin : ""}/share/${slug}/coupon/${couponId}`;
  const title = voucher?.metadata?.title?.[language === "en" ? "en" : "th"] || voucher?.title || voucher?.name || "";
  const description = voucher?.metadata?.description?.[language === "en" ? "en" : "th"] || voucher?.description || "";

  const handleShareLine = async () => {
    if (!liff || !voucher) return;
    try {
      await liff.shareTargetPicker([
        {
          type: "text",
          text: `${title}\n\n${description}\n\n${shareUrl}`,
        },
      ]);
      setIsShareModalOpen(false);
    } catch (error) {
      console.error("LINE share error:", error);
    }
  };

  const handleShareOther = async () => {
    if (!navigator.share) return;
    try {
      await navigator.share({
        title: title,
        text: description,
        url: shareUrl,
      });
      setIsShareModalOpen(false);
    } catch (error) {
      console.error("Web share error:", error);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert(language === "en" ? "Link copied!" : "คัดลอกลิงก์แล้ว!");
      setIsShareModalOpen(false);
    } catch (error) {
      console.error("Copy error:", error);
    }
  };
  return (
    <>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <BackButton onClick={navigateToBack} variant="header" />
          <div className="flex items-center space-x-2">
            <LazyImage
              src={getDirectusFileUrl(
                (voucher?.voucher_brand_id?.logo as string) ?? "",
              )}
              alt={voucher?.voucher_brand_id?.name ?? ""}
              wrapperClassName="h-7 w-7"
              className="h-full w-full rounded-full border object-cover shadow-sm"
              placeholder="blur"
              blurDataURL={getDirectusFileUrl(
                (voucher?.voucher_brand_id?.logo as string) ?? "",
                { width: 24, height: 24 },
              )}
            />
            <h1 className="text-lg font-semibold">
              {voucher?.voucher_brand_id?.name}
            </h1>
          </div>
        </div>
        <button
          onClick={handleShare}
          className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
          aria-label={language === "en" ? "Share" : "แชร์"}
        >
          <Share2 className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        language={language as Lang}
        primaryColor={color}
        shareUrl={shareUrl}
        title={title}
        description={description}
        isInLineApp={liff?.isInClient() ?? false}
        onShareLine={liff?.isInClient() ? handleShareLine : undefined}
        onShareOther={navigator.share ? handleShareOther : undefined}
        onCopyLink={handleCopyLink}
      />
    </>
  );
};

export default Header;
