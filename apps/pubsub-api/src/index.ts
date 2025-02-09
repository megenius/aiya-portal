import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";

type Bindings = {
  PUBSUB_TOPIC: string;
  PUBSUB_PROJECT_ID: string;
  PUBSUB_CREDENTIALS: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.use("*", cors());
app.use("*", logger());

app.get("/", (c) => {
  return c.text("PubSub API is running!");
});

function base64url(source: string): string {
  let encodedSource = btoa(source);
  encodedSource = encodedSource.replace(/\+/g, '-');
  encodedSource = encodedSource.replace(/\//g, '_');
  encodedSource = encodedSource.replace(/=+$/, '');
  return encodedSource;
}

async function getAccessToken(credentials: ServiceAccountCredentials): Promise<string> {
  const header = {
    alg: 'RS256',
    typ: 'JWT',
    kid: credentials.private_key_id
  };

  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/pubsub',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  // Convert private key to proper format
  const privateKey = credentials.private_key
    .replace(/-----BEGIN PRIVATE KEY-----\n/, '')
    .replace(/\n-----END PRIVATE KEY-----\n?/, '')
    .replace(/\n/g, '');

  // Create the JWT
  const encodedHeader = base64url(JSON.stringify(header));
  const encodedClaim = base64url(JSON.stringify(claim));
  const signInput = `${encodedHeader}.${encodedClaim}`;

  // Import the private key
  const binaryKey = Uint8Array.from(atob(privateKey), c => c.charCodeAt(0));
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    binaryKey,
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256',
    },
    false,
    ['sign']
  );

  // Sign the input
  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(signInput)
  );

  // Create final JWT
  const encodedSignature = base64url(
    String.fromCharCode(...new Uint8Array(signature))
  );
  const jwt = `${signInput}.${encodedSignature}`;

  // Exchange JWT for access token
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  const data = await response.json();
  return data.access_token;
}

interface ServiceAccountCredentials {
  private_key: string;
  private_key_id: string;
  client_email: string;
}

app.post("/:topicName/publish", async (c) => {
  try {
    console.log("Publishing message to Pub/Sub topic:", c.req.param("topicName"));
    
    const body = await c.req.json();
    const credentials = JSON.parse(c.env.PUBSUB_CREDENTIALS);
    
    const accessToken = await getAccessToken(credentials);
    const topicName = `projects/${c.env.PUBSUB_PROJECT_ID}/topics/${c.req.param("topicName")}`;
    const apiUrl = `https://pubsub.googleapis.com/v1/${topicName}:publish`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [{ data: base64url(JSON.stringify(body)) }],
      }),
    });

    if (!response.ok) {
      console.error(
        "Pub/Sub API error:",
        response.status,
        await response.text()
      );
      return c.json({ error: "Failed to publish message" }, 500);
    }

    const data = await response.json();
    console.log("Message published to Pub/Sub:", data);
    return c.json({ message: "Message published to Pub/Sub", data });
  } catch (error: any) {
    console.error("Failed to publish to Pub/Sub:", error);
    return c.json(
      { error: "Failed to publish message", details: error.message },
      500
    );
  }
});

export default app;

// TODO: Implement token refresh logic.  Access tokens expire.
