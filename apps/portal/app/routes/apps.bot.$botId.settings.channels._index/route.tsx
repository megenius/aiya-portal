import { useOutletContext, useParams } from "@remix-run/react"
import React from "react"
import MainContent from "./_components/MainContent"
import { Bot } from "~/@types/app"
import { useWorkspaceChannels } from "~/hooks/workspace/useWorkspaceChannels"
import { useBotChannels } from "~/hooks/bot/useBotChannels"


const Route = () => {
  const { bot } = useOutletContext<{ bot: Bot }>()

  return (
    <>
      <MainContent bot={bot} />
    </>
  )
}

export default Route
