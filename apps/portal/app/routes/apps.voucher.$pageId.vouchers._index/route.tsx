import { useOutletContext } from "@remix-run/react";
import React, { Suspense } from "react";
import { ClientOnly } from "remix-utils/client-only";
import { Loading } from "@repo/preline";
import { components } from "~/@types/directus";
import VoucherTabs from "./_components/VoucherTabs";
import VoucherListSkeleton from "./_components/VoucherListSkeleton";
import { useVoucherDetails } from "~/hooks/useVoucherDetails";

type PageLiff = components["schemas"]["ItemsPagesLiff"];

const Route = () => {
  const { voucherPage } = useOutletContext<{ voucherPage: PageLiff }>();

  // Details data for vouchers
  const { data: detailsData, isLoading: detailsLoading } = useVoucherDetails(
    voucherPage.id as string
  );

  const allVouchers = detailsData?.allVouchers || [];
  const popularVouchers = detailsData?.popularVouchers || [];
  const bannerVouchers = detailsData?.bannerVouchers || [];

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ClientOnly>
          {() => (
            <div className="p-2 sm:p-5 sm:py-0 md:pt-5 h-screen flex flex-col">
              {detailsLoading ? (
                <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6">
                  <VoucherListSkeleton />
                </div>
              ) : (
                <VoucherTabs
                  voucherPage={voucherPage}
                  allVouchers={allVouchers}
                  popularVouchers={popularVouchers}
                  bannerVouchers={bannerVouchers}
                />
              )}
            </div>
          )}
        </ClientOnly>
      </Suspense>
    </>
  );
};

export default Route;