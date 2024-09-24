import { Outlet, useParams } from "@remix-run/react"
import React, { Suspense } from "react"
import MainContent from "./_components/MainContent"
import { Loading } from "@repo/preline"
import { useBot } from "~/hooks/bot"
import { ClientOnly } from "remix-utils/client-only"


const Route = () => {
  const { botId } = useParams()
  const { data: bot, isLoading } = useBot({ id: botId });
  if (isLoading) {
    return <Loading />
  }

  return (
    <Suspense fallback="">
      <ClientOnly>
        {() =>
          <MainContent>
            <Outlet context={{ bot }} />
          </MainContent>
        }
      </ClientOnly>
    </Suspense>
  )
}

export default Route
