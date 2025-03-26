import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "~/services/profiles";

interface UseProfileParams {
  uid?: string;
  liff_id?: string;
  id?: string;
  enabled?: boolean;
}

export function useProfile({ uid, liff_id, id, enabled = true }: UseProfileParams) {
  return useQuery({
    queryKey: ['profile', { id, uid, liff_id }],
    queryFn: async () => {
      if (id) {
        return fetchProfile({ id });
      } else if (uid && liff_id) {
        return fetchProfile({ uid, liff_id });
      } else if (uid) {
        return fetchProfile({ uid });
      }
      return null;
    },
    enabled: enabled && (!!id || !!uid),
  });
}
