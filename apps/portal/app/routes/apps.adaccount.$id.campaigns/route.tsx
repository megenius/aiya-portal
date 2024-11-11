import { useOutletContext, useParams } from "@remix-run/react"
import React from "react"
import MainContent from "./_components/MainContent"
import { Bot, FacebookAdAccount } from "~/@types/app"
import { useWorkspaceChannels } from "~/hooks/workspace/useWorkspaceChannels"
import { useBotChannels } from "~/hooks/bot/useBotChannels"


const Route = () => {
  const { adaccount } = useOutletContext<{ adaccount: FacebookAdAccount }>()

  return (
    <>
      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-5">
        <MainContent adaccount={adaccount} />
      </div>
    </>
  )
}

export default Route
