import { useMutation, useQueryClient } from "@tanstack/react-query";
import { User } from "~/@types/app";
import { updateMe } from "~/services/users";

export function useUpdateMe() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<User>) =>
      updateMe(data).then((response) => response.data),
    onSuccess: (user: User) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["me"],
        exact: true,
        refetchType: "active",
      });
    },
  });
}

export default useUpdateMe;
