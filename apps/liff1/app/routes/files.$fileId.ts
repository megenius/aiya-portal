import {
  authentication,
  createDirectus,
  readAssetRaw,
  rest,
} from "@directus/sdk";
import { LoaderFunctionArgs } from "@remix-run/cloudflare";

let client: any = null;

const getDirectusClient = (url: string, token: string) => {
  if (client) {
    return client;
  }

  client = createDirectus(url).with(authentication()).with(rest());
  client.setToken(token);

  return client;
};

export const loader = async ({
  context,
  params,
  request,
}: LoaderFunctionArgs) => {
  const { fileId } = params;
  const url = new URL(request.url);
  const key = url.searchParams.get("key") as string || ""

  const { DIRECTUS_URL, DIRECTUS_SERVICE_TOKEN } = context.cloudflare.env;
  const client = getDirectusClient(DIRECTUS_URL, DIRECTUS_SERVICE_TOKEN);

  const fileStream = await client.request(
    readAssetRaw(fileId as string, { key })
  );

  return new Response(fileStream, {
    headers: {
      "Content-Type": "application/octet-stream",
    },
  });
};
