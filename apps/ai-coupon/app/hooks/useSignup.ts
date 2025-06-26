import { useMutation } from "@tanstack/react-query";
import { SignUpCredential } from "~/@types/auth";
import { logoutApi, signUp } from "~/services/auth";
import { store } from "~/store";
import { logout } from "~/store/slices/authSlice";

interface MutationFn {
  variables: SignUpCredential;
}

export const useSignup = () => {
  return useMutation({
    mutationFn: ({ variables }: MutationFn) =>
      signUp(variables).then((response) => response.data),
    onSuccess: () => {},
  });
};
