import {
  MetaFunction,
  useOutletContext,
} from "@remix-run/react";
import MainContent from "./_components/MainContent";
import Loading from "~/components/Loading";
import Header from "./_components/Header";
import { PageLiff } from "~/types/page";
import { useMe } from "~/hooks/useMe";

export const meta: MetaFunction = () => {
  return [
    { title: "Rewards" },
  ];
};

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff,lang: string }>();
  const { data: profile, isLoading: isProfileLoading } = useMe()

  if (isProfileLoading) {
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
