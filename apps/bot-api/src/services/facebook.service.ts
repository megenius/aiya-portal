interface CAPIMessage {
  pageId: string;
  datasetId: string;
  psid: string;
  value: number;
  currency?: string;
  eventName?: string;
  eventTime?: number;
  accessToken: string;
}

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
}: CAPIMessage) => {
  const url = `https://graph.facebook.com/${datasetId}/events?access_token=${accessToken}`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          event_name: eventName,
          event_time: eventTime,
          action_source: "business_messaging",
          messaging_channel: "messenger",
          user_data: {
            page_id: pageId,
            page_scoped_user_id: psid,
          },
          custom_data: {
            currency: currency,
            value: value,
          },
        },
      ],
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
