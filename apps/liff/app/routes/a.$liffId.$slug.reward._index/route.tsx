import { LoaderFunctionArgs } from "@remix-run/node";
import { MetaFunction, ShouldRevalidateFunction, json, useLoaderData } from "@remix-run/react";
import _ from "lodash";
import { fetchByLiffIdAndSlug } from "~/services/page-liff";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useLiff } from "~/hooks/useLiff";
import { useLineLiff } from "~/hooks/useLineLiff";
import { useLineProfile } from "~/hooks/useLineProfile";

export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
  const page = data?.page
  return [
    { title: "Rewards" },
    { tagName: "link", rel: "icon", type: "image/x-icon", href: page?.favicon || "/images/favicon.ico" }
  ];
};


export const shouldRevalidate: ShouldRevalidateFunction = ({ currentParams, nextParams }) => {
  return !!!_.isEqual(currentParams, nextParams);
};

export const clientLoader = async ({ params }: LoaderFunctionArgs) => {
  const { liffId, slug } = params;
  const page = await fetchByLiffIdAndSlug(liffId as string, slug as string);
  return json({
    page
  });
}

const Route = () => {
const { page } = useLoaderData<typeof clientLoader>();
  const { data: liff } = useLineLiff();
  const { language } = useLiff({ liffId: page.liff_id ?? "" });
  const { data: profile, isLoading:isProfileLoading } = useLineProfile();
  const isThaiLanguage = language.startsWith("th");
  // const lang = isThaiLanguage ? "th" : "en";
  const lang = "en";
  return (
    <>
    {!liff?.isInClient() && <Header language={lang}/>}
      <MainContent primaryColor={page.bg_color ?? ""} language={lang}/>
    </>
  );
};

export default Route;
