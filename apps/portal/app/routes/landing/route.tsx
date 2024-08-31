import { Outlet, useNavigate } from "@remix-run/react"
import Header from "./_components/Header"
import SideBar from "./_components/SideBar"
import { useAppSelector } from "~/store";
import { useEffect } from "react";

const Route = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {   
    if (!isAuthenticated) {
      navigate("/auth/sign-in");
    }
  }, [isAuthenticated]);

  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  )
}

export default Route


