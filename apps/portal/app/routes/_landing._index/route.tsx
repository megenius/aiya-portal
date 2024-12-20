import React from "react"
import { Suspense } from "react"
import { ClientOnly } from "remix-utils/client-only"
const MainContent = React.lazy(() => import("./_components/MainContent"))

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


