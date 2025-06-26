import { ChatApp } from "~/@types/app";
import api from "./api";

export const fetchChats = (wsid: string) =>
  api.get<{ items: ChatApp[] }>("/chats?wsid=" + wsid);

export const fetchChat = (id: string) => api.get<ChatApp>(`/items/chats/${id}`);

export const insertChat = (data: ChatApp) => api.post<ChatApp>("/items/chats", data);

export const updateChat = (id: string, data: ChatApp) => {
  return api.patch(`/items/chats/${id}`, data);
};

export const deleteChat = (id: string) => {
  return api.delete(`/items/chats/${id}`);
};
