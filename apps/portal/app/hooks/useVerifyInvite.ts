import { useQuery } from "@tanstack/react-query";
import { verifyInvite } from "~/services/users";

export const useVerifyInvite = ({ token }) => {
  return useQuery({
    queryKey: ["verify-invite"],
    queryFn: () => verifyInvite(token).then((res) => res.data),
    enabled: !!token,
  });
};
