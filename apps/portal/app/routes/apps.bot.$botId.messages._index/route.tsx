import { useOutletContext, useParams } from "@remix-run/react"
import React, { Suspense } from "react"
import MainContent from "./_components/MainContent"
import { Bot } from "~/@types/app"
import { ClientOnly } from "remix-utils/client-only"

const Route = () => {
  const { bot } = useOutletContext<{ bot: Bot }>()
  return (
    <>
      <Suspense fallback="">
        <ClientOnly>
          {() =>
            <MainContent bot={bot} />
          }
        </ClientOnly>
      </Suspense>
    </>
  )
}

export default Route
