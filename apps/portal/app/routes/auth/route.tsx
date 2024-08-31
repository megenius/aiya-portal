import { Outlet, useNavigate } from "@remix-run/react"
import { SideBar } from "./_components/SideBar"
import { useEffect } from "react";
import { useAppSelector } from "~/store";

const Route = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return <div></div>
  }

  return (
    <>
      <main className="flex min-h-full">
        <SideBar />
        <Outlet />
      </main>
    </>
  )
}

export default Route


