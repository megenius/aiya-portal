import { components } from "../directus";

export type Document = components["schemas"]["ItemsDocuments"];
export type CreateWorkspaceDocument = Omit<Document, "id">;
export type WorkspaceDocument = Document;
