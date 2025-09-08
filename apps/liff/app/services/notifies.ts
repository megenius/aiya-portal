import { ServiceMessage } from "~/types/app";
import api from "./api";

export const sendLineServiceMessage = (data: ServiceMessage) =>
  api.post("/notifies/service-message", data);
