import React, { Suspense } from "react"
import { Outlet, useNavigate, useOutletContext, useParams } from "@remix-run/react"
import { useEffect } from "react";
import { useAppSelector } from "~/store";
import MainContent from "./_components/MainContent";
import { Bot } from "~/@types/app";
import { useBotKnowlegde } from "~/hooks/bot/useBotKnowlegde";
import { Loading } from "@repo/preline";
import { ClientOnly } from "remix-utils/client-only";
// const MainContent = React.lazy(() => import("./_components/MainContent"))

const Route = () => {
  const navigate = useNavigate()
  const { bot } = useOutletContext<{ bot: Bot }>();
  const { id } = useParams();
  const { data: knowledge, isLoading } = useBotKnowlegde(id as string);

  if (isLoading || !knowledge) {
    return <Loading />;
  }

  return (
    <>
      <Suspense fallback="">
        <ClientOnly>
          {() =>
            <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-5">
              <MainContent bot={bot} knowledge={knowledge} />
            </div>
          }
        </ClientOnly>
      </Suspense>
    </>
  )
}

export default Route


