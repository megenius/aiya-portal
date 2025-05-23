import { LoaderFunctionArgs } from '@remix-run/node';
import { json, MetaFunction } from '@remix-run/cloudflare';
import { ShouldRevalidateFunction, useLoaderData, useNavigate, useSearchParams } from '@remix-run/react';
import _ from 'lodash';
import { useEffect } from 'react';
import Loading from '~/components/Loading';
import { useLiff } from '~/hooks/useLiff';
import { useLineProfile } from '~/hooks/useLineProfile';
import { useProfile } from '~/hooks/Profiles/useProfile';
import { fetchByLiffIdAndSlug } from '~/services/page-liff';

export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
  const page = data?.page;
  return [
    { title: page?.name || "Loading..." },
    {
      tagName: "link",
      rel: "icon",
      type: "image/x-icon",
      href: page?.favicon || "/images/favicon.ico",
    },
  ];
};

export const shouldRevalidate: ShouldRevalidateFunction = ({
  currentParams,
  nextParams,
}) => {
  return !!!_.isEqual(currentParams, nextParams);
};

export const clientLoader = async ({ params }: LoaderFunctionArgs) => {
  const { liffId, slug } = params;
  const page = await fetchByLiffIdAndSlug(liffId as string, slug as string);
  return json({
    page,
  });
};

const Route = () => {
  const { page } = useLoaderData<typeof clientLoader>();
  const { language, isLoggedIn } = useLiff({ liffId: page.liff_id ?? "" });
  // const isThaiLanguage = language.startsWith("th");
  // const lang = isThaiLanguage ? "th" : "en";
  const navigate = useNavigate();

  const [search] = useSearchParams()
  // const dest = search.get("dest") || ""
  const referrerId = search.get("ref") || "";
  
  // const { data: profile, isLoading: isProfileLoading } = useLineProfile();

  // เปลี่ยนจาก useAdvanceProfile เป็น useProfile
  // const { data: userProfile, isLoading: isUserProfileLoading } =
  //   useProfile({
  //     uid: profile?.userId || "",
  //     liff_id: page.liff_id as string,
  //     enabled: isLoggedIn && !isProfileLoading && !!profile?.userId
  //   });

  // useEffect(() => {
  //   if (!isLoggedIn || isProfileLoading) {
  //     return;
  //   }

  //   if (!profile?.userId) {
  //     return;
  //   }
  //   if (isUserProfileLoading) {
  //     return;
  //   }

  //   if (!userProfile) {
  //     const refParam = referrerId ? `&ref=${referrerId}` : '';
  //     // navigate(`/a/${page.liff_id}/${page.slug}/interests?dest=${dest}${refParam}`);
  //     navigate(`/a/${page.liff_id}/${page.slug}/interests?ref=${referrerId}`);
  //   } else {
  //     navigate(`/a/${page.liff_id}/${page.slug}/shop`);
  //   }
  // }, [userProfile, isUserProfileLoading, isLoggedIn, isProfileLoading, navigate, page, profile, referrerId]);
  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    // Immediately redirect to the interests page with referrer ID
    navigate(`/a/${page.liff_id}/${page.slug}/interests?ref=${referrerId}`);
  }, [navigate, isLoggedIn, page, referrerId]);

  return <Loading />;
}

export default Route;