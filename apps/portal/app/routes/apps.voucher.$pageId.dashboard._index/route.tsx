import { useOutletContext } from "@remix-run/react";
import React, { Suspense } from "react";
import { ClientOnly } from "remix-utils/client-only";
import { Loading } from "@repo/preline";
import { components } from "~/@types/directus";
import MainContent from "./_components/MainContent";

type PageLiff = components["schemas"]["ItemsPagesLiff"];

const Route = () => {
  const { voucherPage } = useOutletContext<{ voucherPage: PageLiff }>();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ClientOnly>
          {() => (
            <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
              <MainContent voucherPage={voucherPage} />
            </div>
          )}
        </ClientOnly>
      </Suspense>
    </>
  );
};

export default Route;
