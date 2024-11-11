import React, { Suspense } from "react"
import { Outlet, useNavigate, useParams } from "@remix-run/react"
import { useEffect } from "react";
import { useAppSelector } from "~/store";
import MainContent from "./_components/MainContent";
import { ClientOnly } from "remix-utils/client-only";
import { Loading } from "@repo/preline";
import { useBot } from "~/hooks/bot";

const Route = () => {
  return (
    <>
      <Suspense fallback="">
        <ClientOnly>
          {() =>
            <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-5">
              <MainContent />
            </div>
          }
        </ClientOnly>
      </Suspense>
    </>
  )
}

export default Route


