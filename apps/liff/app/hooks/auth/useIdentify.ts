import { useMutation, useQueryClient } from "@tanstack/react-query";
import { store } from "~/store";
import { AuthState, SignInCredential } from "~/types/auth";
import { setCredentials } from "~/store/slices/authSlice";
import { identify } from "~/services/auth";

export const useIdentify = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credential: SignInCredential) =>
      identify(credential).then((response) => response.data),
    onSuccess: (data: AuthState) => {
      store.dispatch(setCredentials(data));

      queryClient.invalidateQueries({
        queryKey: ["me"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
