import { useParams } from '@remix-run/react';
import { CurrencyFormatter } from '@repo/ui';
import { Activity, Blocks, Calendar, ChevronDown, CircleDollarSign, HandCoins } from 'lucide-react';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import { AdDashboard, FacebookAdAccount } from '~/@types/app';
import { useAdDashboard } from '~/hooks/adaccount/useAdDashboard';
import MetricCard from './MetricCard';
import StatCard from './StatCard';
import SalesChart from './SalesChart';
interface OverviewProps {
  adaccount: FacebookAdAccount
  addata?: AdDashboard
}

const Overview: React.FC<OverviewProps> = ({ adaccount, addata }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <div className="flex items-center space-x-2 bg-white rounded-md shadow-sm px-3 py-2">
          <Calendar size={16} />
          <span>Last 28 days</span>
          {/* <ChevronDown size={16} /> */}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-200 shadow-xs rounded-xl overflow-hidden">
        <StatCard
          title="Total Revenue"
          value={<CurrencyFormatter amount={addata?.purchase_value} currency={adaccount?.metadata?.currency} />}
          icon={<HandCoins />}
        // change={-3.4}
        />
        <StatCard
          title="Total Ad Spend"
          value={<CurrencyFormatter amount={addata?.spend} currency={adaccount?.metadata?.currency} />}
          icon={<CircleDollarSign />}
        // change={3.4}
        />

        <StatCard
          title="ROAS"
          value={<NumericFormat value={addata?.roas} decimalScale={2} suffix="x" displayType='text' />}
          icon={<Blocks />}
        // change={12.9}
        />
        <StatCard
          title="Active Ads"
          value={addata?.ads_volume}
          icon={<Activity />}
        // change={0.1}
        />
      </div>
    </>

  )
};

export default Overview;
