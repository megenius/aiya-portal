import React from "react";
import { components } from "~/@types/directus";
import VoucherStats from "./VoucherStats";
import { useVoucherDashboard } from "~/hooks/useVoucherDashboard";
import { useVoucherDetails } from "~/hooks/useVoucherDetails";
import VoucherTabs from "./VoucherTabs";
import { Loading } from "@repo/preline";
import { getDirectusFileUrl } from "~/utils/files";

type PageLiff = components["schemas"]["ItemsPagesLiff"];

interface MainContentProps {
  voucherPage: PageLiff;
}

const MainContent: React.FC<MainContentProps> = ({ voucherPage }) => {
  const { data: dashboardData, isLoading: dashboardLoading } = useVoucherDashboard(voucherPage.id as string);
  const { data: detailsData, isLoading: detailsLoading } = useVoucherDetails(voucherPage.id as string);

  const isLoading = dashboardLoading || detailsLoading;

  if (isLoading) {
    return <Loading />;
  }

  // ใช้ข้อมูลจาก details หรือ fallback ไป dashboard data
  const stats = dashboardData?.stats || {
    total: 0,
    active: 0,
    used: 0,
    redemptionRate: 0
  };

  const allVouchers = detailsData?.allVouchers || dashboardData?.recentVouchers || [];
  const popularVouchers = detailsData?.popularVouchers || [];
  const bannerVouchers = detailsData?.bannerVouchers || [];

  if (!dashboardData && !detailsData) {
    return (
      <div className="space-y-6">
        <div className="mb-6">
          <div className="flex items-center gap-4">
            {voucherPage.image && (
              <img
                className="h-12 w-12 rounded-lg object-cover"
                src={getDirectusFileUrl(voucherPage.image)}
                alt={voucherPage.name || "Voucher App"}
              />
            )}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {voucherPage.name} Dashboard
              </h1>
              <p className="text-gray-600">
                Monitor your LIFF voucher application performance
              </p>
              <div className="mt-2 text-sm text-yellow-600">
                No voucher data found for this LIFF page yet.
              </div>
            </div>
          </div>
        </div>

        <VoucherStats stats={stats} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <div className="flex items-center gap-4">
          {voucherPage.image && (
            <img
              className="h-12 w-12 rounded-lg object-cover"
              src={getDirectusFileUrl(voucherPage.image)}
              alt={voucherPage.name || "Voucher App"}
            />
          )}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {voucherPage.name} Dashboard
            </h1>
            <p className="text-gray-600">
              Monitor your LIFF voucher application performance
            </p>
          </div>
        </div>
      </div>

      <VoucherStats stats={stats} />

      {/* Voucher Tabs - แสดงข้อมูลแยกประเภท */}
      <VoucherTabs
        voucherPage={voucherPage}
        allVouchers={allVouchers}
        popularVouchers={popularVouchers}
        bannerVouchers={bannerVouchers}
      />
    </div>
  );
};

export default MainContent;