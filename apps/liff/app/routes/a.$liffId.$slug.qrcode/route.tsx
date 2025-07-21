import { MetaFunction, Link, useOutletContext, useSearchParams } from '@remix-run/react';
import { useState, useEffect } from 'react';
import Loading from '~/components/Loading';
import QRCodeGenerator from '~/components/QRCodeGenerator'; // ใช้ component ที่มีอยู่แล้ว
import { useLineProfile } from '~/contexts/LineLiffContext';
import { PageLiff } from '~/types/page';

export const meta: MetaFunction = () => {
  return [
    { title: `QR Code` },
  ];
};

export default function QrCodeRoute() {
  const { page } = useOutletContext<{ page: PageLiff,lang: string }>();
  const [search] = useSearchParams();
  const profileId = search.get('id');
  const [shareUrl, setShareUrl] = useState<string>('');
  const { profile, isLoading: isProfileLoading, error: profileError } = useLineProfile();

  useEffect(() => {
    if (profileId && page) {
      const url = new URL(window.location.origin);
      url.pathname = `/a/${page.liff_id}/${page.slug}`;
      url.searchParams.set('ref', profileId);
      setShareUrl(url.toString());
    }
  }, [profileId, page]);

  if (isProfileLoading || profileError || !page) {
    return <Loading />;
  }

  return (
    <div className="h-screen-safe bg-white p-4 flex flex-col items-center">
      <div className="flex items-center justify-between w-full mb-6">
        <Link
          to={`/a/${page.liff_id}/${page.slug}/shop`}
          className="text-primary flex items-center"
          style={{ color: page.bg_color || undefined }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span className="ml-1">กลับ</span>
        </Link>
        <h1 className="text-xl font-bold">QR Code สำหรับชวนเพื่อน</h1>
        <div className="w-6"></div> {/* Spacer to center title */}
      </div>

      {profileError ? (
        <div className="text-red-500">{profileError.message}</div>
      ) : shareUrl && (
        <QRCodeGenerator
          // ส่ง props ตามที่ QRCodeGenerator component รับ
          url={shareUrl}
          logo={page.image}
          profileImage={profile?.pictureUrl}
          profileName={profile?.displayName}
          title="สแกน QR Code เพื่อเข้าร่วมกับเรา"
          primaryColor={page.bg_color}
        />
      )}
    </div>
  );
}
