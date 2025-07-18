import { LoaderFunctionArgs } from "@remix-run/node";
import { json, MetaFunction } from "@remix-run/cloudflare";
import {
  Outlet,
  ShouldRevalidateFunction,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import _ from "lodash";
import { fetchByLiffIdAndSlug } from "~/services/page-liff";
import Loading from "~/components/Loading";
import { getDirectusFileUrl } from "~/utils/files";
import { useEffect } from "react";
import { useLiff } from "~/hooks/useLiff";

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
  const { language, isLoggedIn, isInitialized } = useLiff({ liffId: page.liff_id ?? "" });
  const lang = language.startsWith("th") ? "th" : "en"
  const navigate = useNavigate();

  // Redirect to login page if not logged in (client-side)
  useEffect(() => {
    if (isInitialized && !isLoggedIn) {
      navigate(`/a/${page.liff_id}/${page.slug}/auth/login?dest=${encodeURIComponent(window.location.pathname)}`, { replace: true });
    }
  }, [isInitialized, isLoggedIn, navigate, page.liff_id, page.slug]);
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
