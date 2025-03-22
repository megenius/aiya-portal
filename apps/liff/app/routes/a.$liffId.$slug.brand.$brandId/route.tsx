import {
  ShouldRevalidateFunction,
  useLoaderData,
} from "@remix-run/react";

import { json, MetaFunction } from '@remix-run/cloudflare';


import { useLiff } from "~/hooks/useLiff";
import MainContent from "./components/MainContent";
import { LoaderFunctionArgs } from "@remix-run/node";
import _ from "lodash";
import { fetchByLiffIdAndSlug } from "~/services/page-liff";
import { fetchBrand } from "~/services/brands";

export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
  const page = data?.page;
  const brand = data?.brand;
  return [
    { title: brand?.name || "Loading..." },
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

export const clientLoader = async ({ request, params }: LoaderFunctionArgs) => {
  const { liffId, slug, brandId } = params;
  const brand = await fetchBrand({ brandId });
  const page = await fetchByLiffIdAndSlug(liffId as string, slug as string);
  return json({
    page,
    brand
  });
};

const BrandDetailRoute = () => {
  // const { page } = useOutletContext<{ page: PageLiff }>();
  const { page, brand } = useLoaderData<typeof clientLoader>();
  const { language } = useLiff({ liffId: page.liff_id });
  const isThaiLanguage = language.startsWith("th");
  // Using English as default language for now
  const lang = "en";

  return (
    <>
      {page?.liff_id && (
        <>
          <MainContent brand={brand} language={lang} />
        </>
      )}
    </>
  );
};

export default BrandDetailRoute;
