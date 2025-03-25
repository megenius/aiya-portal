import { useMutation } from "@tanstack/react-query";
import { createAdvanceProfile } from "~/services/advanceProfiles";
import { AdvanceProfile } from "~/types/app";

interface MutationFn {
  variables: Partial<AdvanceProfile>;
}

export function useCreateAdvanceProfile() {
//   const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ variables }: MutationFn) => 
      createAdvanceProfile(variables).then((response) => response.data),
    // onSuccess: (res) => {
    // },
  });
}
