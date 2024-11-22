import { CurrencyFormatter } from '@repo/ui';
import React from 'react';
import { NumericFormat } from 'react-number-format';

const CampaignDisplay = ({ campaigns, adaccount }) => {
  // Sample campaign data
  // const campaigns = [
  //   { "id": "120214205016310720", "name": "VNE | MSG | TESTING | แก้หน้าอก | ABO | 6 Nov 24 | Daily Budget =  188.-", "status": "ACTIVE", "spend": "2337.84", "impressions": "9776", "clicks": "316", "reach": "5764", "purchase": "0", "purchase_value": 0, "roas": 0 },
  //   { "id": "120214204998210720", "name": "VNE | MSG | NBH MAIN | แก้หน้าอก | ABO | 6 Nov 24 | Daily Budget = 500.-", "status": "ACTIVE", "spend": "8871.91", "impressions": "94880", "clicks": "2585", "reach": "48760", "purchase": "0", "purchase_value": 0, "roas": 0 }
  // ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full inline-block align-middle">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Campaign Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
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
            {campaigns.map((campaign) => (
              <tr key={campaign.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {campaign.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${campaign.status === 'ACTIVE'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {campaign.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={campaign.spend || 0} currency={adaccount?.metadata?.currency} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={campaign.purchase_value || 0} currency={adaccount?.metadata?.currency} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <NumericFormat value={campaign.roas} decimalScale={2} suffix='x' displayType='text' />
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={campaign.impressions} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={campaign.reach} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={Number(campaign.clicks || "0")} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {campaign.purchase}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignDisplay;