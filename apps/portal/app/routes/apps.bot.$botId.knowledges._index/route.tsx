import React from "react"
import { Outlet, useNavigate, useOutletContext } from "@remix-run/react"
import { useEffect } from "react";
import { useAppSelector } from "~/store";
import { Suspense } from "react"
import { ClientOnly } from "remix-utils/client-only"
const MainContent = React.lazy(() => import("./_components/MainContent"))

import { Bot } from "~/@types/app";

const Route = () => {
  const navigate = useNavigate()
  const { bot } = useOutletContext<{ bot: Bot }>();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     window.location.href = '/';
  //   }
  // }, [isAuthenticated]);

  // if (isAuthenticated) {
  //   return <div></div>
  // }

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


