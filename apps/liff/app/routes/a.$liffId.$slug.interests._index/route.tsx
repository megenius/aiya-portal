import {
  ShouldRevalidateFunction,
  useLoaderData,
  useSearchParams,
} from "@remix-run/react";
import { useLiff } from "~/hooks/useLiff";
import Loading from "~/components/Loading";
import { useLineProfile } from "~/hooks/useLineProfile";
import MainContent from "./components/MainContent";
import { json, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import _ from "lodash";
import { fetchByLiffIdAndSlug } from "~/services/page-liff";

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
  const referrerId = search.get("ref") || undefined; // เพิ่มการดึงค่า referrer จาก URL

  const { data: profile, isLoading: isProfileLoading } = useLineProfile();

  if (!isLoggedIn) {
    return <Loading />;
  }

  if (!profile) {
    return <Loading />
  }

  return (
    <>
      <MainContent 
        page={page} 
        lineProfile={profile} 
        language={lang} 
        dest={dest} 
        referrerId={referrerId} // ส่งค่า referrer ไปยัง MainContent
      />
    </>
  );
};

export default Route;
