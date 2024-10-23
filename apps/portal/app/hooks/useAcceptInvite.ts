import { useMutation } from "@tanstack/react-query";
import { accpetInvite } from "~/services/users";

interface MutationFn {
  variables: {
    id: string;
    user_id: string;
  };
}

export const useAcceptInvite = () => {
  return useMutation({
    mutationFn: ({ variables: { id, user_id } }: MutationFn) =>
      accpetInvite({ id, user_id }).then((response) => response.data),
    onSuccess: () => {},
  });
};
