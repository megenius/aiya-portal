import { Hono } from "hono";
import { AwsClient } from "aws4fetch";
import { Env } from "~/@types/hono.types";

export const s3Routes = new Hono<Env>().get("/presigned-url", async (c) => {
  const { bucket, key } = c.req.query();

  if (!bucket || !key) {
    return c.json({ error: "Missing bucket or key parameter" }, 400);
  }

  const region = c.env.AWS_REGION;
  const host = `s3.${region}.amazonaws.com/${bucket}`;
  const path = `/${key}`;

  const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = c.env;

  const aws = new AwsClient({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region,
    service: "s3",
  });

  const signedRequest = await aws.sign(`https://${host}${path}`, {
    method: "GET",
    aws: {
      service: "s3",
      region,
      signQuery: true,
    },
  });
  const url = signedRequest.url;

  return c.json({ url: url.toString() });
});
