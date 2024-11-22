import React, { Suspense } from "react"
import { Outlet, useNavigate, useOutletContext, useParams } from "@remix-run/react"
import { useEffect } from "react";
import { useAppSelector } from "~/store";
import Overview from "./_components/Overview";
import { FacebookAdAccount } from "~/@types/app";
import { CampaignPerformance } from "./_components/CampaignPerformance";
import { ClientOnly } from "remix-utils/client-only";
import { CurrencyFormatter } from "@repo/ui";
import MetricCard from "./_components/MetricCard";
import { RoasChart } from "./_components/RoasChart";
import { Loading } from "@repo/preline";
import { useAdaccountInsight } from "~/hooks/adaccount/useAdaccountInsight";
import CampaignDisplay from "./_components/CampaignDisplay";

const MainContent = React.lazy(() => import("./_components/MainContent"))


const Route = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { adaccount } = useOutletContext<{ adaccount: FacebookAdAccount }>()
  const { data, isLoading } = useAdaccountInsight({
    variables: {
      id: id as string,
    },
  });

  if (isLoading) {
    return <Loading />
  }

  return (
    <Suspense fallback="">
      <ClientOnly>
        {() =>
          <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
            <Overview adaccount={adaccount} addata={data} />

            <RoasChart adaccount={adaccount} addata={data} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-4 mb-6">
              <MetricCard title="Impressions" value={<CurrencyFormatter amount={data?.impressions} />} />
              <MetricCard title="Reach" value={<CurrencyFormatter amount={data?.reach} />} />
              <MetricCard title="Frequency" value={(data?.frequency || 0).toFixed(2)} />
              <MetricCard title="Purchases" value={(data?.purchase || 0).toString()} />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-4 mb-6">
              <MetricCard title="CPC" value={<CurrencyFormatter amount={data?.cpc} />} />
              <MetricCard title="CPM" value={<CurrencyFormatter amount={data?.cpm} />} />
              <MetricCard title="CPP" value={<CurrencyFormatter amount={data?.cpp} />} />
              <MetricCard title="CTR" value={`${(data?.ctr || 0).toFixed(2)}%`} />
            </div>
            <CampaignPerformance adaccount={adaccount} />
            <CampaignDisplay adaccount={adaccount} />
            {/* <RecentCampaigns adaccount={adaccount}/> */}
            {/* <TopAds /> */}
            {/* <Overview adaccount={adaccount} /> */}
          </div>
        }
      </ClientOnly>
    </Suspense>
  )

}

export default Route


