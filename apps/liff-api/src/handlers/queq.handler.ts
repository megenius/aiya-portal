import { createItem, readItem, readItems, updateItem } from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Ad, Ads } from "~/types/app";
import { Env } from "~/types/hono.types";
import * as _ from "lodash";

const factory = createFactory<Env>();

export const getAds = factory.createHandlers(logger(), async (c) => {
  const res = await fetch(c.env.QUEQ_URL + "/QueQAds/Ads/ReqAdsList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-QueQAds-UserToken": c.env.QUEQ_TOKEN,
    },
    body: JSON.stringify({
      latitude: 13.746944,
      longitude: 100.539719,
      board_name: "",
      board_location: "",
    }),
  });

  const data = await res.json<Ads>();
  return c.json(data);
});

export const getAd = factory.createHandlers(logger(), async (c) => {
  const { id } = c.req.param();
  const res = await fetch(c.env.QUEQ_URL + "/QueQAds/Ads/ReqAdsFreeCode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-QueQAds-UserToken": c.env.QUEQ_TOKEN,
    },
    body: JSON.stringify({
      ads_code: id,
    }),
  });

  const data = await res.json<Ad>();
  return c.json(data);
});
