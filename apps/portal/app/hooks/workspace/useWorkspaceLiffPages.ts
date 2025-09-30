import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "~/store";
import { fetchWorkspaceLiffPages } from "~/services/workspaces";

interface QueryProps {
  variables: Variables;
}

interface Variables {
  workspaceId: string;
}

export const useWorkspaceLiffPages = ({
  variables: { workspaceId },
}: QueryProps) => {
  return useQuery({
    queryKey: ["workspaces", workspaceId, "liff-pages"],
    queryFn: () => fetchWorkspaceLiffPages(workspaceId).then((res) => res.data.items),
    enabled: useAppSelector((state) => state.auth.isAuthenticated),
  });
};