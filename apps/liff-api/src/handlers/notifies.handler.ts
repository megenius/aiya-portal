import { readItems } from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import * as _ from "lodash";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { Env } from "~/types/hono.types";
import {
  getLineChannelAccessToken,
  issueServiceNotificationToken,
  sendServiceMessage,
} from "~/utils/line";
import { decryptWithSecret } from "~/utils/secretHelper";

const factory = createFactory<Env>();

export const sendLineServiceMessage = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { liff_id } = c.get("jwtPayload");
      const { liff_access_token, template_name, template_params } =
        await c.req.json();
      const directus = c.get("directAdmin");

      // 1) ดึง secret ciphertext ของ liff แล้ว decrypt เป็น liffSecret
      const pageLiff = await directus.request(
        readItems("pages_liff", {
          fields: [
            "liff_id",
            {
              channel: ["provider_access_token"],
            },
          ],
          filter: { liff_id: { _eq: liff_id } },
          limit: 1,
        })
      );
      if (!pageLiff.length || !pageLiff[0].channel?.provider_access_token) {
        return c.json({ error: "Page liff or secret not found" }, 404);
      }

      // const channelId = liff_id.split("-")[0];
      // const channelSecret = await decryptWithSecret(
      //   c.env.LIFF_SECRET_KEY,
      //   pageLiff[0].liff_secret_ciphertext
      // );

      // 2) ขอ channel access token (stateless)
      // const cat = await getLineChannelAccessToken({
      //   channelId,
      //   channelSecret,
      // });
      // const channelAccessToken = cat.access_token;
      const channelAccessToken = pageLiff[0].channel?.provider_access_token;

      // 3) แลก service notification token จาก LIFF access token
      const nt = await issueServiceNotificationToken({
        channelAccessToken,
        liffAccessToken: liff_access_token,
      });
      let notificationToken = nt.notificationToken;

      // 4) ส่ง Service Message ตาม template (ตัวอย่างใช้ ticket_issued_simple_th)
      const sendResult = await sendServiceMessage({
        channelAccessToken,
        templateName: template_name,
        notificationToken,
        templateParams: template_params,
      });

      // 5) อัปเดต notificationToken ใหม่ที่ LINE ส่งกลับ (เพื่อใช้ครั้งถัดไป)
      notificationToken = sendResult.notificationToken;

      return c.json({ success: true });
    } catch (e: any) {
      console.error(e);
      return c.json({ error: "notify failed", detail: e?.message ?? e }, 500);
    }
  }
);
