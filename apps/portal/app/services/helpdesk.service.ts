import { Product } from "~/@types/app";
import api from "./api";

export const fetchHelpdesks = (lang) => api.get(`/helpdesks?lang=${lang}`);

export const fetchHelpdesk = (id, lang) =>
  api.get(`/helpdesk/${id}?lang=${lang}`);
