import {
  Channel,
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
  api.post<Workspace>("/items/saas_teams", data);

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

export const fetchWorkspaceBots = (id: string) =>
  api.get<{ items: WorkspaceBot[] }>("/workspaces/" + id + "/bots");

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
  api.get<{ items: Product[] }>(
    "/workspaces/" + id + "/products"
  );

  export const fetchWorkspaceOrders = (id: string) =>
    api.get<{ items: WorkspaceFacebookAdAccount[] }>(
      "/workspaces/" + id + "/orders"
    );