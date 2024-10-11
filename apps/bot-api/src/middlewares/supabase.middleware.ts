import { createFactory } from "hono/factory";
import { Env } from "~/types/hono.types";
import { createClient } from "@supabase/supabase-js";

const factory = createFactory<Env>();

let initialized = false;

export const supabaseMiddleware = factory.createMiddleware(async (c, next) => {
  const supabase = createClient(c.env.SUPABASE_URL, c.env.SUPABASE_ANON_KEY);
  c.set("supabase", supabase);
  initialized = true;
  await next();
});
