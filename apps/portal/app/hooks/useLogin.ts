import { useMutation, useQueryClient } from "@tanstack/react-query";
import { store } from "~/store";
import {
  scheduleTokenRenewal,
  setCredentials,
} from "~/store/slices/authSlice";
import { login } from "~/services/auth";
import { AuthState, SignInCredential } from "~/@types/auth";

export const useLogin = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ email, password }: SignInCredential) =>
      login(email, password).then((response) => response.data),
    onSuccess: (data: AuthState) => {
      store.dispatch(setCredentials(data));
      scheduleTokenRenewal(store.dispatch, Number(data.expiresAt));

      queryClient.invalidateQueries({
        queryKey: ["me"],
        exact: true,
        refetchType: "active",
      });

      queryClient.invalidateQueries({
        queryKey: ["workspaces"],
        exact: true,
        refetchType: "active",
      });
    },
  });
};
