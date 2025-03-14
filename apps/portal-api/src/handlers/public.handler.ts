import { createItem, readItem, readItems, sleep, updateItem } from "@directus/sdk";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { createFactory } from "hono/factory";
import { directusMiddleware } from "~/middleware/directus.middleware";
import { Env } from "~/types/hono.types";
import { logger as honoLogger } from "hono/logger";
import { Bot } from "~/types/app";

const factory = createFactory<Env>();

// -------- HelpDesk --------
export const getHelpDesks = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const directus = c.get("directus");
      const { lang = "th-TH" } = c.req.query();

      const items = await directus.request(
        readItems("saas_helpdesk", {
          deep: {
            translations: {
              _filter: {
                languages_code: {
                  _eq: lang,
                },
              },
            },
          },
          fields: ["*", { translations: ["name"] }],
        })
      );

      const mappedItems = items.map((item) => {
        const translation = item.translations?.[0]
          ? (item.translations?.[0] as {
              name: string;
            })
          : null;

        const mappedItem = {
          ...item,
          name: translation?.name,
        };

        delete mappedItem.translations;

        return mappedItem;
      });

      return c.json(mappedItems);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

export const getHelpDesk = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const directus = c.get("directus");
      const { id } = c.req.param();
      const { lang = "th-TH" } = c.req.query();

      const item = await directus.request(
        readItem("saas_helpdesk", id, {
          deep: {
            translations: {
              _filter: {
                languages_code: {
                  _eq: lang,
                },
              },
            },
          },
          fields: ["*", { translations: ["*"] }],
        })
      );

      const translation = item.translations?.[0]
        ? (item.translations?.[0] as {
            content: string;
          })
        : null;

      const mappedItem = {
        ...item,
        content: translation?.content,
      };

      delete mappedItem.translations;

      return c.json(mappedItem);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

// -------- Terms --------
export const getTerms = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const directus = c.get("directus");
      const { lang = "th-TH" } = c.req.query();

      const items = await directus.request(
        readItems("saas_terms", {
          deep: {
            translations: {
              _filter: {
                languages_code: {
                  _eq: lang,
                },
              },
            },
          },
          fields: ["*", { translations: ["*"] }],
        })
      );

      const mappedItems = items.map((item) => {
        const translation = item.translations?.[0]
          ? (item.translations?.[0] as {
              content: string;
            })
          : null;

        const mappedItem = {
          ...item,
          content: translation?.content,
        };

        delete mappedItem.translations;

        return mappedItem;
      });

      return c.json(mappedItems);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

export const getTerm = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const directus = c.get("directus");
      const { lang = "th-TH" } = c.req.query();
      const { id } = c.req.param();

      const item = await directus.request(
        readItem("saas_terms", id, {
          deep: {
            translations: {
              _filter: {
                languages_code: {
                  _eq: lang,
                },
              },
            },
          },
          fields: ["*", { translations: ["*"] }],
        })
      );

      const translation = item.translations?.[0]
        ? (item.translations?.[0] as {
            content: string;
          })
        : null;

      const mappedItem = {
        ...item,
        content: translation?.content,
      };

      delete mappedItem.translations;

      return c.json(mappedItem);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

// -------- Create Inquiry --------
export const createInquiry = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const directus = c.get("directus");
      const data = await c.req.json();
      const item = await directus.request(createItem("bots_inquiries", data));

      const directAdmin = c.get("directAdmin");
      const bot = await directAdmin.request<Bot>(
        readItem("bots", item.bot as string)
      );
      const metadata = bot.metadata || {};
      const notifications = metadata?.fallback.notifications || [];

      const outboxes = []
      // notifications to create mail_outbox
      for (const notification of notifications) {
        const outbox = await directAdmin.request(
          createItem("mail_outbox", {
            email: notification.email,
            name: `Inquired by ${item.name}`,
            template: "e095ff2e-54bb-40fb-be3c-06ac51e1558a",
            field1: item.name,
            field2: item.email,
            field3: item.subject,
            field4: item.description,
            field5: item.inquiry_type,
            status: "draft"
          })
        );
        outboxes.push(outbox.id)
      }

      for(const oid of outboxes) {
        await directAdmin.request(
          updateItem("mail_outbox", oid, {
            status: "ready"
          })
        )
      }

      return c.json(item);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);
