import { LoaderFunctionArgs } from "@remix-run/node";
import { json, MetaFunction } from "@remix-run/cloudflare";
import {
  Outlet,
  ShouldRevalidateFunction,
  useLoaderData,
} from "@remix-run/react";
import _ from "lodash";
import { fetchByLiffIdAndSlug } from "~/services/page-liff";
import Loading from "~/components/Loading";
import { getDirectusFileUrl } from "~/utils/files";
import { useLineLiff } from "~/contexts/LineLiffContext";

export const meta: MetaFunction<typeof clientLoader> = ({ data }) => {
  const page = data?.page;
  return [
    { title: page?.name || "Loading..." },
    {
      tagName: "link",
      rel: "icon",
      type: "image/x-icon",
      href: getDirectusFileUrl(page?.image as string) || "/images/favicon.ico",
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
  const { isInitialized, language, isLoggedIn } = useLineLiff();
  // const lang = language.startsWith("th") ? "th" : "en";
  const lang = "th";

  if (!isInitialized || !isLoggedIn) {
    return <Loading primaryColor={page?.bg_color as string} />;
  }

  if (!page) {
    return <Loading />;
  }
  return (
    <div className="bg-gray-200">
      <div className="h-screen-safe max-w-md mx-auto bg-white">
        <Outlet context={{ page, lang }} />
      </div>
    </div>
  );
};

export default Route;
