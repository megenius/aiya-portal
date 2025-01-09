import { Product } from "~/@types/app";
import api from "./api";

export const fetchHelpdesks = () => api.get(`/helpdesk`);

export const fetchHelpdesk = (id) => api.get(`/items/saas_helpdesk/${id}`);
