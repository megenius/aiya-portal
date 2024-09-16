import { useParams } from '@remix-run/react';
import { CurrencyFormatter } from '@repo/ui';
import { Calendar, ChevronDown } from 'lucide-react';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import { FacebookAdAccount } from '~/@types/app';
import { useAdDashboard } from '~/hooks/adaccount/useAdDashboard';
import MetricCard from './MetricCard';

interface OverviewProps {
  adaccount: FacebookAdAccount
}

const Overview: React.FC<OverviewProps> = ({ adaccount }) => {
  const { id } = useParams();
  const { data, isLoading } = useAdDashboard({
    variables: {
      id: id as string,
    },
  });

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <div className="flex items-center space-x-2 bg-white rounded-md shadow px-3 py-2">
          <Calendar size={16} />
          <span>Last 7 days</span>
          {/* <ChevronDown size={16} /> */}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-4 mb-6">
        <MetricCard title="Total Ad Spend" value={<CurrencyFormatter amount={data?.spend} currency={adaccount?.metadata?.currency} />} />
        <MetricCard title="Total Revenue" value={<CurrencyFormatter amount={data?.revenue} currency={adaccount?.metadata?.currency} />} />
        <MetricCard title="Average ROAS" value={<NumericFormat value={data?.roas || 0} decimalScale={2} suffix="x" displayType='text' />} />
        <MetricCard title="Active Ads" value={data?.ads_volume || 0} />
      </div>

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
    </>

  )
};

export default Overview;

