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
  // const { data: advanceProfile, isLoading: isAdvanceProfileLoading } = useAdvanceProfile({ uid: profile?.userId ?? "" });

  // useEffect(() => {
  //   if (!isLoggedIn || isProfileLoading || isAdvanceProfileLoading) {
  //     return;
  //   }

  //   if (!advanceProfile) {
  //     navigate(`/a/${page.liff_id}/${page.slug}/interests?dest=${dest}`);
  //     return
  //   }

  //   navigate(`/a/${page.liff_id}/${page.slug}/shop`);

  // }, [isLoggedIn, advanceProfile, isAdvanceProfileLoading]);

  // if (!isLoggedIn || isProfileLoading || isAdvanceProfileLoading) {
  //   return <Loading />;
  // }

  if (!isLoggedIn || isProfileLoading) {
    return <Loading />;
  }

  return ( 
    <MainContent
      page={page}
      profile={profile}
      dest={dest}
    />
  )
}

export default Route;


const MainContent = ({page, profile, dest}) => {
  const navigate = useNavigate();

  const { data: advanceProfile, isLoading: isAdvanceProfileLoading } = useAdvanceProfile({ uid: profile?.userId ?? "" });


  useEffect(() => {
    if (!isAdvanceProfileLoading) {
      return
    }

    if (!advanceProfile) {
      navigate(`/a/${page.liff_id}/${page.slug}/interests?dest=${dest}`);
      return
    }

    navigate(`/a/${page.liff_id}/${page.slug}/shop`);

  }, [advanceProfile, isAdvanceProfileLoading]);  

  return <div></div>
}

// const route: React.FC<routeProps> = () => {
//   const { page } = useOutletContext<{ page: PageLiff }>()
//   const { data: liff } = useLineLiff()
//   const methods = useForm()
//   const tracking = useTracking()
//   const navigate = useNavigate()

//   const resolveUrl = (url: string) => {
//     if (url?.startsWith("liff://landing")) {
//       return ""
//     }
//     else if (url?.startsWith("liff://close")) {
//       return url
//     } else if (url?.startsWith("liff://")) {
//       return url.replace("liff://", "../")
//     }
//     return url
//     // liff?.isInClient() ? url : `../${url}`
//   }

//   const openWindow = async (url: string) => {
//     console.log("Open window", url);
//     const { browser } = page.metadata
//     const isExternal = browser === "external"

//     if (page.metadata.tracking) {
//       await tracking.mutateAsync({
//         tracking: page.metadata.tracking,
//         data: methods.getValues()
//       })
//     }

//     if (browser === "liff") {
//       if (url.startsWith("http")) {
//         window.location.href = url
//       } if (url === 'liff://close') {
//         liff?.closeWindow()
//       } else {
//         navigate(url)
//       }
//     } else {
//       liff?.openWindow({
//         url,
//         external: isExternal
//       })
//     }

//   }

//   const onSubmit = async (values: any) => {
//     console.log("Form submitted", values)
//     const { destination } = values
//     const destUrl = resolveUrl(destination)

//     console.log("Destination", destUrl);
    
//     openWindow(destUrl)
//   }

//   if (!page) {
//     return
//   }

//   return (
//     <FormProvider {...methods}>
//       <form onSubmit={methods.handleSubmit(onSubmit)}>
//         {page?.liff_id &&
//           <PageViewer page={page} />
//         }
//       </form>
//     </FormProvider>
//   );
// };

// export default route;