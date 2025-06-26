import { useMutation } from "@tanstack/react-query";
import { resetPasswordRequest } from "~/services/auth";

interface MutationFn {
  variables: {
    email: string;
  };
}

export const useResetPasswordRequest = () => {
  return useMutation({
    mutationFn: ({ variables: { email } }: MutationFn) =>
      resetPasswordRequest(email).then((response) => response.data),
    onSuccess: () => {},
  });
};
