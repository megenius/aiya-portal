import { Context } from "hono";
import { Logger, LogLevel } from "@repo/shared/utils";
import { HTTPException } from "hono/http-exception";
import { logForward } from "../forward";
import { logError } from "../errors";
import { Bindings } from "../types";

const forwardLogger = new Logger("forward", LogLevel.DEBUG);

type Destination = string;

interface ForwardResult {
  destination: Destination;
  status?: number;
  statusText?: string;
  error?: string;
}

// List of destination URLs
const DESTINATIONS: Destination[] = ["https://destination3.example.com"];

// Forward handling function
export async function handle(
  c: Context<{ Bindings: Bindings }>,
  webhookData: any
): Promise<Response> {
  try {
    const forwardPromises: Promise<any>[] = DESTINATIONS.map((destination) =>
      safeForward(c, destination, webhookData)
    );

    const results = await Promise.allSettled(forwardPromises);
    return c.json(
      results.map((result) =>
        result.status === "fulfilled"
          ? result.value
          : { destination: "unknown", error: "Failed to process request" }
      )
    );
  } catch (error: unknown) {
    forwardLogger.error(
      `Unexpected error: ${error instanceof Error ? error.message : "Unknown error"}`
    );
    await logError(c, "FORWARD_ERROR", error);
    throw new HTTPException(500, {
      message: "Failed to process forwarded requests",
    });
  }
}

async function safeForward(
  c: Context<{ Bindings: Bindings }>,
  destination: string,
  webhookData: any
): Promise<any> {
  forwardLogger.debug(`Attempting to forward request to ${destination}`);
  try {
    const response = await fetch(destination, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookData),
    });

    forwardLogger.debug(
      `Successful response from ${destination}: ${response.status} ${response.statusText}`
    );
    await logForward(
      c,
      destination,
      true,
      response.status,
      response.statusText,
      null
    );
    return {
      destination,
      success: true,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    forwardLogger.error(`Error forwarding to ${destination}: ${errorMessage}`);
    await logForward(c, destination, false, null, null, errorMessage);
    return {
      destination,
      success: false,
      error: errorMessage,
    };
  }
}
