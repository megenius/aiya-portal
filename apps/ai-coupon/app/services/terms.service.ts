import api from "./api";

export const fetchTerms = (lang) => api.get(`/terms?lang=${lang}`);

export const fetchTerm = (id, lang) => api.get(`/terms/${id}?lang=${lang}`);
