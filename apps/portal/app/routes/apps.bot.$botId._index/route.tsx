import React from "react"
import { Outlet, useNavigate, useOutletContext } from "@remix-run/react"
import { useEffect } from "react";
import { useAppSelector } from "~/store";
import { Bot } from "~/@types/app";

const Route = () => {
  const navigate = useNavigate()
  const { bot } = useOutletContext<{bot: Bot}>()

  useEffect(() => {
    if (bot) {
      if (bot.type === "orderbot") {
        navigate("./slips")
      } else {
        navigate("./dashboard")
      }
    }

  }, [navigate]);

  return <div></div>
}

export default Route


