import { LoaderFunctionArgs } from "@remix-run/node";
import {
  MetaFunction,
  ShouldRevalidateFunction,
  json,
  useLoaderData,
} from "@remix-run/react";
import _ from "lodash";
import { fetchByLiffIdAndSlug } from "~/services/page-liff";
import MainContent from "./components/MainContent";
import { useLiff } from "~/hooks/useLiff";
import { useLineLiff } from "~/hooks/useLineLiff";
import { useLineProfile } from "~/hooks/useLineProfile";
import Loading from "~/components/Loading";
import Header from "./components/Header";
import { useProfile } from "~/hooks/Profiles/useProfile";
import { Profile } from "~/types/app";

export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
  const page = data?.page;
  return [
    { title: "Rewards" },
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
  const { data: liff } = useLineLiff();
  const { language } = useLiff({ liffId: page.liff_id as string });
  const { data: lineProfile, isLoading: isLineProfileLoading } =
    useLineProfile();
  const { data: profile, isLoading: isProfileLoading } = useProfile({
    uid: lineProfile?.userId,
    liff_id: page?.liff_id as string,
    enabled: !isLineProfileLoading && !!lineProfile?.userId,
  });
  const isThaiLanguage = language.startsWith("th");
  // const lang = isThaiLanguage ? "th" : "en";
  const lang = "th";

  if (isLineProfileLoading || isProfileLoading) {
    return <Loading />;
  }
  

  return (
    profile && <>
      {<Header language={lang} profile={profile} />}
      <MainContent profile={profile} primaryColor={page.bg_color ?? ""} language={lang} />
    </>
  );
};

export default Route;
