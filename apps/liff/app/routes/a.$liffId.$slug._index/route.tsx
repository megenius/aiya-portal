import { LoaderFunctionArgs } from '@remix-run/node';
import { json, MetaFunction, ShouldRevalidateFunction, useLoaderData, useNavigate, useSearchParams } from '@remix-run/react';
import _ from 'lodash';
import { useEffect } from 'react';
import Loading from '~/components/Loading';
import { useAdvanceProfile } from '~/hooks/AdvanceProfiles/useAdvanceProfile';
import { useLiff } from '~/hooks/useLiff';
import { useLineProfile } from '~/hooks/useLineProfile';
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
  const isThaiLanguage = language.startsWith("th");
  const lang = isThaiLanguage ? "th" : "en";
  const navigate = useNavigate();

  const [search] = useSearchParams()
  const dest = search.get("dest") || ""
  const { data: profile, isLoading: isProfileLoading } = useLineProfile();
  
  // Only fetch advance profile if user is logged in and profile is loaded with a userId
  const { data: advanceProfile, isLoading: isAdvanceProfileLoading } = 
    useAdvanceProfile({ 
      uid: profile?.userId || "",
      enabled: isLoggedIn && !isProfileLoading && !!profile?.userId
    });

  useEffect(() => {
    // Only proceed if user is logged in and profile is loaded
    if (!isLoggedIn || isProfileLoading) {
      return;
    }
    
    // Make sure we have a userId before checking advance profile
    if (!profile?.userId) {
      return;
    }
    
    // Wait for advance profile loading to complete
    if (isAdvanceProfileLoading) {
      return;
    }

    // Navigate based on whether advance profile exists
    if (!advanceProfile) {
      navigate(`/a/${page.liff_id}/${page.slug}/interests?dest=${dest}`);
    } else {
      navigate(`/a/${page.liff_id}/${page.slug}/shop`);
    }
  }, [advanceProfile, isAdvanceProfileLoading, isLoggedIn, isProfileLoading, navigate, page, dest, profile]);  

  // Show loading indicator during all processing
  return <Loading />;
}

export default Route;