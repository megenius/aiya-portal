import React from "react"
import { Suspense } from "react"
import { ClientOnly } from "remix-utils/client-only"

const Route = () => {
  return (
    <>
      <Suspense fallback="">
        <ClientOnly>
          {() =>
            <main id="content" className="pb-[40px] sm:pb-[64px] ">
              Credit
            </main>
          }
        </ClientOnly>
      </Suspense>
    </>
  )
}

export default Route


