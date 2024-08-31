import { useQuery } from "@tanstack/react-query";
import { readMe } from "~/services/users";

export function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => readMe().then((response) => response.data),
  });
}
