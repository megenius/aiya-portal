import type { MetaFunction } from "@remix-run/cloudflare";
import Loading from "~/components/Loading";

export const meta: MetaFunction = () => {
  return [
    { title: "AIYA" },
  ];
};

export default function Index() {
  return (
    <Loading />
  );
}
