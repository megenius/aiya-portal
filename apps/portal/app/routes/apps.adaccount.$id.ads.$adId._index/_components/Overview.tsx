import { useParams } from '@remix-run/react';
import { CurrencyFormatter } from '@repo/ui';
import { Activity, Blocks, Calendar, ChevronDown, CircleDollarSign, HandCoins, ShoppingBasket } from 'lucide-react';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import { AdDashboard, FacebookAdAccount } from '~/@types/app';
import MetricCard from './MetricCard';
import StatCard from './StatCard';
import SalesChart from './SalesChart';
import { AdInsight } from '~/@types/ads/ad.type';
interface OverviewProps {
  adaccount: FacebookAdAccount
  addata?: AdInsight
}

const Overview: React.FC<OverviewProps> = ({ adaccount, addata }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className='space-y-2'>
          <h2 className="text-2xl font-bold">{addata?.name}</h2>
          <p>
            Campaign: {addata?.campaign_name}
          </p>
          <p> Adset: {addata?.adset_name}</p>
        </div>
        <div className="flex items-center space-x-2 bg-white rounded-md shadow px-3 py-2">
          <Calendar size={16} />
          <span>Last 28 days</span>
          {/* <ChevronDown size={16} /> */}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-200 shadow-sm rounded-xl overflow-hidden">
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
          title="Purchase"
          value={addata?.purchase}
          icon={<ShoppingBasket />}
        // change={0.1}
        />
      </div>
    </>

  )
};

export default Overview;
