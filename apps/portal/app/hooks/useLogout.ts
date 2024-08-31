import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "~/services/auth";
import { store } from "~/store";
import { logout } from "~/store/slices/authSlice";

export const useLogout = () => {
  return useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      store.dispatch(logout());
    },
  });
};
