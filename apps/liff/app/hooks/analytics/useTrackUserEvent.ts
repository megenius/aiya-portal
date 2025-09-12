import { useCallback } from "react";
import { createUserEvent, CreateUserEventPayload } from "~/services/userEvents";

type Options = {
  liff?: number;
  baseProps?: Record<string, unknown>;
};

export function useTrackUserEvent(options?: Options) {
  return useCallback(
    async (
      event_type: CreateUserEventPayload["event_type"],
      event_properties?: CreateUserEventPayload["event_properties"]
    ): Promise<void> => {
      const payload: CreateUserEventPayload = {
        event_type,
        event_properties: {
          ...(options?.baseProps || {}),
          ...(event_properties || {}),
        },
        ...(typeof options?.liff === "number" ? { liff: options?.liff } : {}),
      };
      try {
        await createUserEvent(payload);
      } catch (err) {
        if (
          typeof process !== "undefined" &&
          (process as any)?.env?.NODE_ENV !== "production"
        ) {
          console.warn("track user event failed", err);
        }
      }
    },
    [options?.liff, options?.baseProps]
  );
}
