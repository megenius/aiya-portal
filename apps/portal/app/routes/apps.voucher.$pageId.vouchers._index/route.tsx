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
            <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
              <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6">
                <div className="mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {voucherPage.name} - Vouchers
                  </h1>
                  <p className="text-gray-600">
                    Manage and view all vouchers in this LIFF application
                  </p>
                </div>

                {detailsLoading ? (
                  <VoucherListSkeleton />
                ) : (
                  <VoucherTabs
                    voucherPage={voucherPage}
                    allVouchers={allVouchers}
                    popularVouchers={popularVouchers}
                    bannerVouchers={bannerVouchers}
                  />
                )}
              </div>
            </div>
          )}
        </ClientOnly>
      </Suspense>
    </>
  );
};

export default Route;