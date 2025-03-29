// hooks/useWorkspaceDocuments.ts
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchWorkspaceDocuments } from "~/services/workspaces";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  workspaceId: string;
}

export const useWorkspaceDocuments = ({
  variables: { workspaceId },
}: QueryProps) => {
  return useQuery({
    queryKey: ["workspaces", workspaceId, "documents"],
    queryFn: () => fetchWorkspaceDocuments(workspaceId).then((res) => res.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};
