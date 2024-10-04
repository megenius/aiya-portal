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

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const page = data?.page
  return [
    { title: page?.name },
  ];
};

export const shouldRevalidate: ShouldRevalidateFunction = ({
  actionResult,
  currentParams,
  currentUrl,
  defaultShouldRevalidate,
  formAction,
  formData,
  formEncType,
  formMethod,
  nextParams,
  nextUrl,
}) => {
  return true;
};

export const loader = async ({ context, params }: LoaderFunctionArgs) => {
  const { liffId, slug } = params
  const directusClient = createDirectus(context.cloudflare.env.DIRECTUS_URL)
    .with(authentication("json"))
    .with(staticToken(context.cloudflare.env.DIRECTUS_SERVICE_TOKEN))
    .with(rest());

  console.log("Get page", liffId, slug);

  const pages = await directusClient.request(readItems("pages_liff", {
    filter: {
      liff_id: liffId,
      slug,
    },
    limit: 1
  })) as PageLiff[]

  if (pages.length > 0) {
    const page = pages[0]

    console.log("Render page", page.id);
    return json({
      page
    })
  }

  return json({
    page: null
  })
}

const Layout = () => {
  const { page: serverPage } = useLoaderData<typeof loader>()
  const { liffId, slug } = useParams()
  const [friendFlag, setFriendFlag] = useState<boolean>(false);
  const [page, setPage] = useState<PageLiff>(serverPage as PageLiff);

  useEffect(() => {
    console.log("Init LIFF", liffId);
    if (liffId) {
      liff.init({ liffId: liffId as string }).then((res => {
        liff.getFriendship().then(res => {
          setFriendFlag(res.friendFlag)
        })
      }))
    }
  }, [liffId, serverPage]);

  useEffect(() => {
    if (!serverPage) {
      return
    }
    const page = serverPage as PageLiff
    console.log("Set page", page.id);
    setPage(page)
  }, [serverPage])


  if (!serverPage) {
    console.log("No page found");
    return <div>No page found</div>
  }

  return (
    <Suspense fallback={<div />}>
      <Await resolve={page}>
        {(page) => {
          return <>
            <DynamicFavicon href={page?.favicon} />
            <Outlet context={{ page, friendFlag, liff }} />
          </>
        }}
      </Await >
    </Suspense>
  )
}

export default Layout
