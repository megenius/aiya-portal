import { useQuery } from "@tanstack/react-query";
import { fetchProfile } from "~/services/profiles";

// interface ProfileProps {
//     id: string;
//     enabled?: boolean; // Add optional enabled parameter
// }

// export function useProfile({ id, enabled = true }: ProfileProps) {
  
//   return useQuery({
//     queryKey: ["profiles",id],
//     queryFn: () => fetchProfile({id}),
//     enabled: enabled && !!id, // Use the passed enabled parameter
//     // staleTime: 5 * 60 * 1000, // 5 minutes
//   });
// }

interface UseProfileParams {
  uid?: string;
  liff_id?: string;
  id?: string;
  enabled?: boolean;
}

export function useProfile({ uid, liff_id, id, enabled = true }: UseProfileParams) {
  return useQuery({
    queryKey: ['profiles', { id, uid, liff_id }],
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
