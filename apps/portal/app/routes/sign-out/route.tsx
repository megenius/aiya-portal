import { useNavigate } from "@remix-run/react";
import { useEffect } from "react"
import { useLogout } from "~/hooks/useLogout"
import { useAppSelector } from "~/store";

const Route = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const logout = useLogout()

  useEffect(() => {
    logout.mutateAsync()
  }, [])

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth/sign-in')
    }
  }, [isAuthenticated]);


  return <div></div>
}

export default Route

