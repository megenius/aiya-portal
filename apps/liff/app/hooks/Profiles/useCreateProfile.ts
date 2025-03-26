import { useMutation } from "@tanstack/react-query";
import { createProfile } from "~/services/profiles";
import { Profile } from "~/types/app";

interface MutationFn {
  variables: Partial<Profile>;
}

export function useCreateProfile() {
  return useMutation({
    mutationFn: async ({ variables }: MutationFn) => {
      // ต้องมั่นใจว่ามี liff_id และ uid ในข้อมูลที่ส่งไป เพื่อให้ API สามารถสร้าง ID ได้
      if (!variables.liff_id || !variables.uid) {
        throw new Error('liff_id and uid are required for profile creation');
      }
      
      try {
        console.log('Attempting to create profile with:', variables);
        const result = await createProfile(variables);
        console.log('Profile created successfully:', result);
        return result;
      } catch (error) {
        console.error('Error in useCreateProfile:', error);
        throw error;
      }
    },
    onError: (error: any) => {
      console.error('Mutation error:', error);
    }
  });
}
