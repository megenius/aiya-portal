import { useMutation } from "@tanstack/react-query";
import { Tracking } from "~/types/page";
import mustache from "mustache";
import axios from "axios";

interface TrackingMethods {
  tracking: Tracking;
  data: any;
}

export function useTracking() {
  return useMutation({
    mutationFn: ({ tracking, data }: TrackingMethods) =>
      sendTracking(tracking, data),
  });
}

const sendTracking = (tracking: Tracking, data: any) => {
  const { onClick } = tracking.button;
  const timestamp = new Date().toISOString();
  const trackingBody = mustache.render(JSON.stringify(onClick.body), {
    TIMESTAMP: timestamp,
    ...data,
  });

  return axios(onClick.url, {
    method: "POST",
    data: trackingBody,
  });
};
