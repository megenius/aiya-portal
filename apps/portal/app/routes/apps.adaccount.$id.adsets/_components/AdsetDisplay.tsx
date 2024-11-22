import { CurrencyFormatter } from '@repo/ui';
import { formatDate } from 'date-fns';
import React from 'react';
import { NumericFormat } from 'react-number-format';

const AdsetDisplay = ({ adsets, adaccount }) => {

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full inline-block align-middle">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Adset Name / Campaign
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bidding Strategy
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Daily Budget
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Budget Remaining
              </th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lifetime Budget
              </th> */}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Time
              </th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created Time
              </th> */}

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Spend
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Revenue
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ROAS
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Impressions
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reach
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Clicks
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Purchased
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {adsets.map((adset) => (
              <tr key={adset.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <p>
                    {adset.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {adset.campaign_name}
                  </p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {adset.bid_strategy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={adset.daily_budget || 0} currency={adaccount?.metadata?.currency} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={adset.budget_remaining || 0} currency={adaccount?.metadata?.currency} />
                </td>
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={adset.lifetime_budget || 0} currency={adaccount?.metadata?.currency} />
                </td> */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <p>{formatDate(new Date(adset.start_time), 'yyyy-MM-dd')}</p>
                  <p className="text-xs text-gray-500">{formatDate(new Date(adset.start_time), 'HH:mm:ss')}</p>
                </td>
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {adset.created_time}
                </td> */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={adset.spend || 0} currency={adaccount?.metadata?.currency} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={adset.purchase_value || 0} currency={adaccount?.metadata?.currency} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <NumericFormat value={adset.roas} decimalScale={2} suffix='x' displayType='text' />
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={adset.impressions} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={adset.reach} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={Number(adset.clicks || "0")} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {adset.purchase}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdsetDisplay;