import { useOutletContext, useParams } from "@remix-run/react"
import React, { Suspense } from "react"
import { Workspace } from "~/@types/app"
import { ClientOnly } from "remix-utils/client-only"

const MainContent = React.lazy(() => import("./_components/MainContent"))

const Route = () => {
  const { workspace } = useOutletContext<{ workspace: Workspace }>()
  return (
    <>
      <Suspense fallback="">
        <ClientOnly>
          {() =>
            <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
              <MainContent workspace={workspace} />
            </div>
          }
        </ClientOnly>
      </Suspense>
    </>
  )
}

export default Route
