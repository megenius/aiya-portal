import { Hono } from "hono";
import { LineWebhook } from "./types";
import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

const app = new Hono();

app
  .get("/", (c) => {
    return c.text("Hello AIYA");
  })
  .post("/webhook", async (c) => {
    const body: LineWebhook = await c.req.json();
    // console.log(JSON.stringify(body))
    const tokens = {
      Ua29b798287b0acc26cc5ec62e30185e2:
        "Wg1MI4cu2U7sbmFk3e/puYxFrTx340J6Ey2rkK3DIBQUvWc2xGJgbfEcGZxiY/tqokV/5Y5n0ZFL5GL6RJ3zfYtkZSuVHEXBIJp3TKrR6SGJAmrL40PPj/UKxNm8w+yQv6t3cTL8KKHfEiB0Zq8UlwdB04t89/1O/w1cDnyilFU=",
      U7db71ed69950f67c7b8aee6fbed98d28:
        "SJX5N6Tl+mcvFrXhKWcWSaKhPr7zKYZ6zVis118KgNdAtfiKRG+nbkD0mCRQGpGndZ99DRxv18WIdmNS+VFBec0HDo5ZSJbWq70vtAaLZNhajTytacOnV472v4Nl+z9+k1ZqTscxGwtfo+V8d9nXRQdB04t89/1O/w1cDnyilFU=",
    } as any;

    const channels = {
      Ua29b798287b0acc26cc5ec62e30185e2: "[TEST]",
      U7db71ed69950f67c7b8aee6fbed98d28: "[PROD]",
    } as any;

    const userIds = {
      Uaa7ec3788adecb2e314faea663d852ca: "Rat",
      Uc33d90bd4804b617b7aa04239b5487e4: "Mook",
      U155839afe2bbffb86ad3613ca7e121b2: "Boy",
    } as any;

    const token = tokens[body.destination];
    const channel = channels[body.destination];

    const promises = Array();
    if (token) {
      body.events.forEach((event) => {
        const { beacon, message } = event;
        const date = `${format(new Date(event.timestamp), "yyyy-MM-dd")}`;
        const time = `${formatInTimeZone(
          new Date(event.timestamp),
          "Asia/Bangkok",
          "HH:mm:ss.SSS"
        )}`;
        const user = `${userIds[event.source.userId]}`;

        if (beacon) {
          promises.push(
            fetch("https://api.line.me/v2/bot/message/reply", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                replyToken: event.replyToken,
                messages: [
                  {
                    type: "text",
                    text: `${time} | ${beacon.hwid}`,
                  },
                ],
              }),
            }).then((res) => {
              console.log(`${user} | ${time} | ${beacon?.hwid} | ${channel}`);
            })
          );
        } else if (message) {
          console.log(`${user} | ${time} | ${message?.text} | ${channel}`);
        }
      });
    }

    await Promise.all(promises)

    return c.json({});
  });
export default app;
