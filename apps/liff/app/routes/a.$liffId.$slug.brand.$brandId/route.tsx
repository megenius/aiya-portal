import {
  ShouldRevalidateFunction,
  useLoaderData,
  useOutletContext,
} from "@remix-run/react";
import { json, MetaFunction } from '@remix-run/cloudflare';
import { useLiff } from "~/hooks/useLiff";
import MainContent from "./_components/MainContent";
import { LoaderFunctionArgs } from "@remix-run/node";
import _ from "lodash";
import { fetchByLiffIdAndSlug } from "~/services/page-liff";
import { fetchBrand } from "~/services/brands";
import { PageLiff } from "~/types/page";

export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
  const brand = data?.brand;
  return [
    { title: brand?.name || "Loading..." }
  ];
};

export const shouldRevalidate: ShouldRevalidateFunction = ({
  currentParams,
  nextParams,
}) => {
  return !!!_.isEqual(currentParams, nextParams);
};

export const clientLoader = async ({ params }: LoaderFunctionArgs) => {
  const { brandId } = params;
  const brand = await fetchBrand({ brandId });
  return json({
    brand
  });
};

const BrandDetailRoute = () => {
  const { page,lang } = useOutletContext<{ page: PageLiff,lang: string }>();
  const { brand } = useLoaderData<typeof clientLoader>();

  return (
    <>
      {page?.liff_id && (
        <>
          <MainContent brand={brand} language={lang} page={page} />
        </>
      )}
    </>
  );
};

export default BrandDetailRoute;
