import { useNavigate, useOutletContext } from '@remix-run/react';
import { useEffect } from 'react';
import Loading from '~/components/Loading';
import { PageLiff } from '~/types/page';

const Route = () => {
  const { page } = useOutletContext<{ page: PageLiff }>();
  const navigate = useNavigate();

  // const [search] = useSearchParams()
  // const dest = search.get("dest") || ""
  // const referrerId = search.get("ref") || ""; // เพิ่มการดึงค่า referrer จาก URL

  
  // const { data: profile, isLoading: isProfileLoading } = useLineProfile();

  // เปลี่ยนจาก useAdvanceProfile เป็น useProfile
  // const { data: userProfile, isLoading: isUserProfileLoading } =
  //   useProfile({
  //     uid: profile?.userId || "",
  //     liff_id: page.liff_id as string,
  //     enabled: !isProfileLoading && !!profile?.userId
  //   });

  // useEffect(() => {
  //   // Only proceed if user is logged in and profile is loaded
  //   if (isProfileLoading) {
  //     return;
  //   }

  //   // Make sure we have a userId before checking profile
  //   if (!profile?.userId) {
  //     return;
  //   }

  //   // Wait for profile loading to complete
  //   if (isUserProfileLoading) {
  //     return;
  //   }

  //   // Navigate based on whether profile exists
  //   if (!userProfile) {
  //     // ส่งต่อข้อมูล referrer ไปยังหน้า interests
  //     // const refParam = referrerId ? `&ref=${referrerId}` : '';
  //     // navigate(`/a/${page.liff_id}/${page.slug}/interests?dest=${dest}${refParam}`);
  //     const data = {
  //       uid: profile.userId as string,
  //       liff_id: page.liff_id as string,
  //       display_name: profile.displayName,
  //       picture_url: profile.pictureUrl,
  //       referrer_id: referrerId, // เพิ่มข้อมูล referrer (ถ้ามี)
  //     };
      
  //     createProfile.mutate(
  //       { variables: data },
  //       {
  //         onSuccess: () => {
  //           if (dest) {
  //             navigate(
  //               `/a/${page.liff_id}/${page.slug}/${dest}`
  //             );
  //           } else {
  //             navigate(`/a/${page.liff_id}/${page.slug}/shop`);
  //           }
  //         },
  //         onError: (error) => {
  //           console.error('Profile creation error:', error);
  //           alert(`เกิดข้อผิดพลาดในการสร้างโปรไฟล์ [${error.message}]`);
  //         }
  //       }
  //     );
  //   } else {
  //     navigate(`/a/${page.liff_id}/${page.slug}/shop`);
  //   }
  // }, [userProfile, isUserProfileLoading, isProfileLoading, navigate, page, dest, profile, referrerId]);

  useEffect(() => {
    navigate(`/a/${page.liff_id}/${page.slug}/shop`);
  }, [navigate, page]);

  return <Loading primaryColor={page?.bg_color as string} />;
}

export default Route;