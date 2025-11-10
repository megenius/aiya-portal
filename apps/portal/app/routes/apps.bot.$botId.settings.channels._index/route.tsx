import { useOutletContext, useParams } from "@remix-run/react"
import React from "react"
import MainContent from "./_components/MainContent"
import { Bot } from "~/@types/app"
import { useWorkspaceChannels } from "~/hooks/workspace/useWorkspaceChannels"
import { useBotChannels } from "~/hooks/bot/useBotChannels"
import { useFacebookSDK } from "~/hooks/useFacebookSDK"


const Route = () => {
  useFacebookSDK({ appId: import.meta.env.VITE_FB_APP_ID });
  const { bot } = useOutletContext<{ bot: Bot }>()

  return (
    <>
      <MainContent bot={bot} />
    </>
  )
}

export default Route
