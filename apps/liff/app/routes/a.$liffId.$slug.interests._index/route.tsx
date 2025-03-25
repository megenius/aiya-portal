import {
  json,
  MetaFunction,
  ShouldRevalidateFunction,
  useLoaderData,
  useSearchParams,
} from "@remix-run/react";
import { useLiff } from "~/hooks/useLiff";
import Loading from "~/components/Loading";
import { useLineProfile } from "~/hooks/useLineProfile";
import MainContent from "./components/MainContent";
import { LoaderFunctionArgs } from "@remix-run/node";
import _ from "lodash";
import { fetchByLiffIdAndSlug } from "~/services/page-liff";
import { useEffect } from "react";

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
  const [search] = useSearchParams()
  const dest = search.get("dest") || "";

  const { data: profile, isLoading: isProfileLoading } = useLineProfile();

  if (!isLoggedIn) {
    return <Loading />;
  }

  if (!profile) {
    return <Loading />
  }

  return (
    <>
      <MainContent page={page} lineProfile={profile} language={lang} dest={dest} />
    </>
    // <div className="p-4">
    //   <div className="bg-white rounded-lg shadow p-6">
    //     <h1 className="text-2xl font-bold text-gray-800 mb-4">
    //       {lang === "th" ? "แบบสำรวจ" : "Survey"}
    //     </h1>
    //     <p className="text-gray-600">
    //       {lang === "th"
    //         ? "ยินดีต้อนรับสู่หน้าแบบสำรวจ กรุณารอการอัพเดตเพิ่มเติม"
    //         : "Welcome to the survey page. Please wait for further updates."}
    //     </p>

    //     {profile && (
    //       <div className="mt-4 p-3 bg-gray-50 rounded-lg">
    //         <p className="text-sm text-gray-500">
    //           {lang === "th" ? "เข้าสู่ระบบโดย:" : "Logged in as:"}
    //         </p>
    //         <div className="flex items-center mt-2">
    //           {profile.pictureUrl && (
    //             <img
    //               src={profile.pictureUrl}
    //               alt="Profile"
    //               className="w-10 h-10 rounded-full mr-3"
    //             />
    //           )}
    //           <span className="font-medium">{profile.displayName}</span>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default Route;
