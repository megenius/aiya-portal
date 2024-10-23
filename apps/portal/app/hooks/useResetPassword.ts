import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "~/services/auth";

interface MutationFn {
  variables: {
    token: string;
    password: string;
  };
}

export const useResetPassword = () => {
  return useMutation({
    mutationFn: ({ variables: { token, password } }: MutationFn) =>
      resetPassword(token, password).then((response) => response.data),
    onSuccess: () => {},
  });
};
