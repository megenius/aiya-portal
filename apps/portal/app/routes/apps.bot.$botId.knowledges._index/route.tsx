import React from "react"
import { Outlet, useNavigate, useOutletContext } from "@remix-run/react"
import { useEffect } from "react";
import { useAppSelector } from "~/store";
import { Suspense } from "react"
import { ClientOnly } from "remix-utils/client-only"
import { usePrelineInit } from "~/hooks/usePrelineInit";
// const MainContent = React.lazy(() => import("./_components/MainContent"))

import { Bot } from "~/@types/app";
import MainContent from "./_components/MainContent";
import { use } from "i18next";

const Route = () => {
  const { bot } = useOutletContext<{ bot: Bot }>();
  
  return (
    <>
      <Suspense fallback="">
        <ClientOnly>
          {() =>
            <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-5">
              <MainContent bot={bot} />
            </div>
          }
        </ClientOnly>
      </Suspense>
    </>
  )
}

export default Route


