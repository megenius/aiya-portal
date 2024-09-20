import { Bindings, Env } from "~/@types/hono.types";

const exchangeToken = async ({
  env,
  code,
  shortLivedToken,
}: {
  code?: string;
  shortLivedToken?: string;
  env: Bindings;
}) => {
  const { FB_API_URL, FB_APP_ID, FB_APP_SECRET } = env;

  const url = new URL("https://graph.facebook.com/oauth/access_token");
  url.searchParams.append("client_id", FB_APP_ID);
  url.searchParams.append("client_secret", FB_APP_SECRET);

  if (code) {
    url.searchParams.append("code", code);
  } else if (shortLivedToken) {
    url.searchParams.append("grant_type", "fb_exchange_token");
    url.searchParams.append("fb_exchange_token", shortLivedToken);
  }

  console.log("fbURL", url.toString());

  const response = await fetch(url.toString(), {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`Failed to exchange token: ${response.statusText}`);
  }

  return response.json();
};

export default exchangeToken;
