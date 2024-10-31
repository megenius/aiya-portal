import { CAPIEventMessage } from "~/types/app";

//send to capi
export const sendEventToCapi = async ({
  pageId,
  datasetId,
  psid,
  value,
  eventName = "Purchase",
  eventTime = Math.floor(Date.now() / 1000),
  currency = "THB",
  accessToken,
  action_source = "business_messaging",
  messaging_channel = "messenger",
}: CAPIEventMessage) => {
  const event = {
    event_name: eventName,
    event_time: eventTime,
    action_source,
    messaging_channel,
    user_data: {
      page_id: pageId,
      page_scoped_user_id: psid,
    },
    custom_data: {
      currency: currency,
      value: value,
    },
  };
  const url = `https://graph.facebook.com/${datasetId}/events?access_token=${accessToken}`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [event],
      partner_agent: "AIYA",
    }),
  };

  try {
    const response = await fetch(url, options);
    return await response.json<any>();
  } catch (error) {
    console.error("Error sending to CAPI", error);
    return error;
  }
};

