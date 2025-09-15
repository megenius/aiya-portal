import { MetaFunction } from "@remix-run/cloudflare";
import ErrorView from "~/components/ErrorView";

export const meta: MetaFunction = () => {
  return [
    { title: "Not Found" },
    { name: "robots", content: "noindex" },
  ];
};

export default function CatchAllNotFound() {
  const language =
    typeof navigator !== "undefined" && navigator.language?.startsWith("en")
      ? ("en" as const)
      : ("th" as const);

  // Important: Render a 200-OK page with a friendly message instead of throwing 404,
  // to avoid host-level 404 replacement pages.
  return (
    <ErrorView status={404} language={language} />
  );
}
