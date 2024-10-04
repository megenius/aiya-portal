import { json, LoaderFunctionArgs } from "@remix-run/cloudflare";

export const loader = async ({ context, params }: LoaderFunctionArgs) => {
  return json({ message: "Hello, world!" });
}