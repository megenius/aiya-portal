import { useMutation, useQueryClient } from "@tanstack/react-query";
import { store } from "~/store";
import { scheduleTokenRenewal, setCredentials } from "~/store/slices/authSlice";
import { login } from "~/services/auth";
import { AuthState, SignInCredential } from "~/@types/auth";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credential: SignInCredential) =>
      login(credential).then((response) => response.data),
    onSuccess: (data: AuthState) => {
      console.log('[SSO] useLogin onSuccess called');
      store.dispatch(setCredentials(data));
      scheduleTokenRenewal(store.dispatch, Number(data.expiresAt));

      // Check for SSO redirect in sessionStorage
      const ssoRedirect = sessionStorage.getItem('sso_redirect');
      console.log('[SSO] useLogin onSuccess - checking for redirect:', ssoRedirect);

      if (ssoRedirect) {
        console.log('[SSO] Found redirect, navigating to:', ssoRedirect);
        sessionStorage.removeItem('sso_redirect');
        sessionStorage.removeItem('sso_navigating');

        // Navigate immediately
        window.location.replace(ssoRedirect);
        return; // Skip query invalidation, navigation will trigger re-renders
      }

      console.log('[SSO] No redirect found, proceeding with default behavior');
      // Default behavior: invalidate queries for normal login flow
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
