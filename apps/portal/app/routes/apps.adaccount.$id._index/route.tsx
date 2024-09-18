import React from "react"
import { Outlet, useNavigate, useOutletContext } from "@remix-run/react"
import { useEffect } from "react";
import { useAppSelector } from "~/store";
import Overview from "./_components/Overview";
import MainContent from "./_components/MainContent";
import { FacebookAdAccount } from "~/@types/app";
import MarketingDashboardChart from "./_components/MarketingDashboardChart";
import Campaign from "./_components/Campaign";
import RecentCampaigns from "./_components/RecentCampaigns";
import TopAds from "./_components/TopAds";

const Route = () => {
  const navigate = useNavigate()
  const { adaccount } = useOutletContext<{ adaccount: FacebookAdAccount }>()

  return (
    <>
      <MainContent>
        <Overview adaccount={adaccount} />
        <div className="grid grid-cols-2 gap-4">
          <MarketingDashboardChart />
          <Campaign />
        </div>
        <Campaign />
        <RecentCampaigns />
        <TopAds />
        {/* <Overview adaccount={adaccount} /> */}
      </MainContent>
    </>
  )
}

export default Route


