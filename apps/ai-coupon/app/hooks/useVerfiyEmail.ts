import { useMutation } from "@tanstack/react-query";
import { SignUpCredential } from "~/@types/auth";
import { verifyEmail } from "~/services/auth";

interface MutationFn {
  variables: {
    token: string;
  };
}

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: ({ variables: { token } }: MutationFn) =>
      verifyEmail(token).then((response) => response.data),
    onSuccess: () => {},
  });
};
