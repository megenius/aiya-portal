import { useQuery } from "@tanstack/react-query";
import { readMe } from "~/services/me";
import { useAppSelector } from "~/store";

export function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => readMe().then((response) => response.data),
    enabled: useAppSelector((state) => state.auth.isAuthenticated)
  });
}