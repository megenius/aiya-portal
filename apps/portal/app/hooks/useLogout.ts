import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "~/services/auth";
import { store } from "~/store";
import { logout } from "~/store/slices/authSlice";
import { setUser } from "~/store/slices/userSlice";

export const useLogout = () => {
  return useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      store.dispatch(logout());
      store.dispatch(setUser({
        id: "",
        email: "",
        first_name: "",
        last_name: "",
        avatar: "",
      }));
    },
  });
};
