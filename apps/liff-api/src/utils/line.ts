export async function getLineChannelAccessToken(params: {
  channelId: string;
  channelSecret: string;
}): Promise<{ access_token: string; token_type: string; expires_in: number }> {
  const { channelId: channelId, channelSecret: channelSecret } = params;

  const res = await fetch("https://api.line.me/oauth2/v2.1/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: channelId,
      client_secret: channelSecret,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(
      `LINE token request failed (channelId=${channelId}, status=${res.status}): ${detail}`
    );
  }

  const json = (await res.json()) as {
    access_token: string;
    token_type: string;
    expires_in: number;
  };

  return json;
}

// 1) แลก LIFF access token -> service notification token
export async function issueServiceNotificationToken(params: {
  channelAccessToken: string;
  liffAccessToken: string;
}) {
  const { channelAccessToken, liffAccessToken } = params;

  const res = await fetch("https://api.line.me/message/v3/notifier/token", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${channelAccessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ liffAccessToken }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(
      `issueServiceNotificationToken failed: ${res.status} ${detail}`
    );
  }

  // ตัวอย่างที่คาดหวัง:
  // { notificationToken, expiresIn, remainingCount, sessionId }
  return res.json() as Promise<{
    notificationToken: string;
    expiresIn: number;
    remainingCount: number;
    sessionId: string;
  }>;
}

// 2) ส่ง service message ตาม template + notificationToken
export async function sendServiceMessage(params: {
  channelAccessToken: string;
  templateName: string;
  notificationToken: string;
  templateParams: Record<string, string>;
}) {
  const {
    channelAccessToken,
    templateName,
    notificationToken,
    templateParams,
  } = params;

  const url = "https://api.line.me/message/v3/notifier/send?target=service";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${channelAccessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      templateName,
      params: templateParams,
      notificationToken,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`sendServiceMessage failed: ${res.status} ${detail}`);
  }

  return res.json() as Promise<{
    notificationToken: string;
  }>;
}
