import { User } from "~/@types/app";
import api from "./api";

export const fetchExchageToken = ({ code, shortLivedToken }) => {
  return api
    .post<{
      accessToken: string;
      expiresIn: number;
      code: string;
    }>("/facebook/exchange-token", { code, shortLivedToken })
    .then((response) => response.data);
};

export const subscribeApp = (channelId: string) => {
  return api
    .post("/facebook/subscribe", { channelId })
    .then((response) => response.data);
};

export const unsubscribeApp = (channelId: string) => {
  return api
    .post("/facebook/unsubscribe", { channelId })
    .then((response) => response.data);
};
