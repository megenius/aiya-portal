import {
  Channel,
  Orderbot,
  Product,
  Workspace,
  WorkspaceBot,
  WorkspaceChannel,
  WorkspaceFacebookAdAccount,
  WorkspaceMember,
} from "~/@types/app";
import api from "./api";

export const fetchWorkspaces = () =>
  api.get<{ items: Workspace[] }>("/workspaces");

export const fetchWorkspace = (id) =>
  api.get<Workspace>(`/workspaces/${id}`).then((res) => res.data);

export const fetchWorkspaceBySlug = (slug) =>
  api
    .get<{ items: Workspace[] }>(`/workspaces?q=slug:${slug}`)
    .then((res) => (res.data?.items?.length > 0 ? res.data.items[0] : null));

export const insertWorkspace = (data: Workspace) =>
  api.post<Workspace>("/workspaces", data);

export const updateWorkspace = (id: string, data: Workspace) => {
  return api.patch(`/workspaces/${id}`, data);
};

export const deleteWorkspace = (id: string) => {
  return api.delete(`/workspaces/${id}`);
};

export const fetchWorkspaceMembers = (id: string) =>
  api.get<{ items: WorkspaceMember[] }>("/workspaces/" + id + "/members");

export const fetchWorkspaceChannels = (id: string) =>
  api.get<{ items: WorkspaceChannel[] }>("/workspaces/" + id + "/channels");

export const deleteWorkspaceChannel = (
  workspaceId: string,
  channelId: string
) => api.delete("/workspaces/" + workspaceId + "/channels/" + channelId);

export const insertWorkspaceLineChannel = (
  id: string,
  data: WorkspaceChannel
) => api.post<WorkspaceChannel>("/workspaces/" + id + "/channels/line", data);

export const insertWorkspaceFacecbookChannels = (
  id: string,
  items: WorkspaceChannel[]
) =>
  api.post<WorkspaceChannel>(
    "/workspaces/" + id + "/channels/facebooks",
    items
  );

export const fetchAdAccounts = (id: string) =>
  api.get<{ items: WorkspaceFacebookAdAccount[] }>(
    "/workspaces/" + id + "/ad-accounts"
  );

export const fetchWorkspaceProducts = (id: string) =>
  api.get<{ items: Product[] }>("/workspaces/" + id + "/products");

export const fetchWorkspaceOrderbots = (id: string) =>
  api.get<{ items: Orderbot[] }>("/workspaces/" + id + "/orderbots");

export const inviteWorkspaceMembers = (id: string, emails: string[], role) =>
  api.post("/workspaces/" + id + "/members/invite", {
    emails,
    role,
  });

export const removeWorkspaceMembers = (id: string, memberId: string) =>
  api.delete(`/workspaces/${id}/members/${memberId}`);


// -------- WORKSPACE BOTS --------
export const fetchWorkspaceBots = (id: string) =>
  api.get<{ items: WorkspaceBot[] }>("/workspaces/" + id + "/bots");

export const fetchWorkspaceBot = (id: string, botId: string) =>
  api.get<WorkspaceBot>(`/workspaces/${id}/bots/${botId}`);

export const insertWorkspaceBot = (id: string, data: WorkspaceBot) =>
  api.post<WorkspaceBot>(`/workspaces/${id}/bots`, data);

export const updateWorkspaceBot = (
  id: string,
  botId: string,
  data: WorkspaceBot
) => {
  return api.patch(`/workspaces/${id}/bots/${botId}`, data);
}

export const deleteWorkspaceBot = (id: string, botId: string) => {
  return api.delete(`/workspaces/${id}/bots/${botId}`);
}