import { defer, json, LinksFunction, LoaderFunction, LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare"
import { Await, Outlet, useLoaderData, useParams, useSearchParams, ShouldRevalidateFunction } from "@remix-run/react"
import {
  createDirectus,
  authentication,
  rest,
  staticToken,
  readItem,
  readItems
} from "@directus/sdk";
import _ from 'lodash'
import { Suspense, useEffect, useState } from "react";
import liff from '@line/liff';
import { PageLiff } from "~/types/page";
import DynamicFavicon from "~/components/DynamicFavicon";
import { useGetPageLiff } from "~/hooks/useGetPageLiff";
import { fetchByLiffIdAndSlug } from "~/services/page-liff";
import { useLineLiff } from "~/hooks/useLineLiff";
import Loading from "~/components/Loading";

export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
  const page = data?.page
  return [
    { title: page?.name || "Loading..." },
  ];
};

export const clientLoader = async ({ request, params }: LoaderFunctionArgs) => {
  const { liffId, slug } = params;
  const page = await fetchByLiffIdAndSlug(liffId as string, slug as string);
  return json({
    page
  });
}

const Layout = () => {
  const { page } = useLoaderData<typeof clientLoader>();
  useLineLiff();


  if (!page) {
    return <Loading />
  }

  return (
    <>
      <DynamicFavicon href={page?.favicon} />
      <Outlet context={{ page }} />
    </>
  )
}

export default Layout