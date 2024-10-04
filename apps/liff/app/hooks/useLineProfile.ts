import { useQuery } from "@tanstack/react-query";
import liff from "@line/liff";

export function useLineProfile() {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => liff?.getProfile(),
    enabled: false,
  });
}
