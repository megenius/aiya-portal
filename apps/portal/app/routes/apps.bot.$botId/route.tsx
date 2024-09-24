import React from "react"
import { Outlet, useNavigate, useParams } from "@remix-run/react"
import { SideBar } from "./_components/SideBar"
import { useEffect } from "react";
import { useAppSelector } from "~/store";
import { useBot } from "~/hooks/bot";
import { Loading } from "@repo/preline";
import Header from "./_components/Header";

const Route = () => {
  const { botId } = useParams()
  const navigate = useNavigate()
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { data: bot, isLoading } = useBot({ id: botId });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/sign-in");
    }
  }, [isAuthenticated]);

  if (!bot || isLoading) {
    return <Loading />
  }

  return (
    <>
      <Header bot={bot} />
      <main id="content" className="max-w-[85rem] mx-auto pt-[59px] lg:pt-0">
        <Outlet context={{ bot }} />
      </main>
    </>
  )
}

export default Route


