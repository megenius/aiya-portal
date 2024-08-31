import React from "react"
import { Outlet, useNavigate, useOutlet, useOutletContext } from "@remix-run/react"
import MainContent from "./_components/MainContent";
import { Bot } from "~/@types/app";

const Route = () => {
  const { bot } = useOutletContext<{ bot: Bot }>()

  return (
    <>
      <MainContent bot={bot} />
    </>
  )
}

export default Route


