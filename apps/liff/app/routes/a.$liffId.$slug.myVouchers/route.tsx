import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { useLiff } from "~/hooks/useLiff";
import { ShouldRevalidateFunction, useLoaderData } from "@remix-run/react";
import { json, MetaFunction } from "@remix-run/cloudflare";

import Tabs from "~/components/Tabs";
import { useState } from "react";
import VoucherCardShimmer from "../../components/VoucherCardShimmer";
import { useLineProfile } from "~/hooks/useLineProfile";
import { useVouchersUser } from "~/hooks/vouchers/useVouchersUser";
import { LoaderFunctionArgs } from "@remix-run/node";
import _ from "lodash";
import { fetchByLiffIdAndSlug } from "~/services/page-liff";
import { useLineLiff } from "~/hooks/useLineLiff";

export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
  const page = data?.page;
  return [
    { title: "My Vouchers" },
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
  // const { page } = useOutletContext<{ page: PageLiff }>();
  const { page } = useLoaderData<typeof clientLoader>();
  const { data: liff } = useLineLiff();
  const { language } = useLiff({ liffId: page.liff_id as string });
  const { data: profile, isLoading: isProfileLoading } = useLineProfile();
  const isThaiLanguage = language.startsWith("th");
  // const lang = isThaiLanguage ? "th" : "en";
  const lang = "en";
  // const { data: vouchers, isLoading: isVouchersLoading } = useVouchers({
  //   q: "",
  //   status: "published",
  // });
  const { data: myVouchers, isLoading: isMyVouchersLoading } = useVouchersUser({
    userId: profile?.userId || "",
  });
  const [activeTab, setActiveTab] = useState("available");

  const tabs = [
    { id: "available", label: { th: "ใช้ได้", en: "Available" } },
    { id: "used", label: { th: "ใช้แล้ว", en: "Used" } },
    { id: "expired", label: { th: "หมดอายุ", en: "Expired" } },
  ];

  return (
    <div className="h-screen-safe bg-gray-50">
      <div className="bg-white">
        {!liff?.isInClient() && <Header language={lang} />}
        <Tabs
          language={lang}
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          primaryColor={page.bg_color ?? ""}
        />
      </div>

      {isMyVouchersLoading && isProfileLoading ? (
        <VoucherCardShimmer />
      ) : (
        <MainContent
          activeTab={activeTab}
          page={page}
          vouchers={myVouchers || []}
          language={lang}
          primaryColor={page.bg_color ?? ""}
        />
      )}
    </div>
  );
};

export default Route;
