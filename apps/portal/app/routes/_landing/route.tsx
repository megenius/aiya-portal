import { Outlet, useNavigate } from "@remix-run/react"
import Header from "./_components/Header"
import SideBar from "./_components/SideBar"
import { useAppSelector } from "~/store";
import { useEffect } from "react";
import Footer from "./_components/Footer";

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
      <main id="content" className="lg:ps-[260px] pt-[59px] pb-[40px] sm:pb-[64px]">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default Route


