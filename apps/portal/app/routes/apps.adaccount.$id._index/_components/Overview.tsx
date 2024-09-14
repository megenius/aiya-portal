import { useParams } from '@remix-run/react';
import { CurrencyFormatter } from '@repo/ui';
import React from 'react';
import { FacebookAdAccount } from '~/@types/app';
import { useFacebookAdDashboard } from '~/hooks/adaccount/useFacebookAdDashboard';

interface OverviewProps {
  adaccount: FacebookAdAccount
}

const Overview: React.FC<OverviewProps> = ({ adaccount }) => {
  const { id } = useParams();
  const { data, isLoading } = useFacebookAdDashboard({
    variables: {
      id: id as string,
    },
  });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-200 shadow-sm rounded-xl overflow-hidden">
        <div className="flex flex-col p-5 bg-white">
          <h1 className='text-xl font-semibold'>
            Purchase
          </h1>
          <div className="mt-3">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600">
              {data?.purchase}
            </h2>
            <div className="hidden mt-2 flex flex-wrap items-center gap-y-1 gap-x-2">
              <p className="text-sm text-gray-500">Sales last 30 days</p>
              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-md">
                <svg
                  className="shrink-0 w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                  <polyline points="16 17 22 17 22 11" />
                </svg>
                3.4%
              </span>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="flex flex-col p-5 bg-white sm:border-s-0 md:border-s border-t sm:border-t md:border-t-0 border-neutral-200">
        <h1 className='text-xl font-semibold'>
          Revenue
        </h1>
        <div className="mt-3">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600">
            <CurrencyFormatter amount={0} currency={adaccount?.metadata?.currency} />
          </h2>
          <div className="hidden mt-2 flex flex-wrap items-center gap-y-1 gap-x-2">
            <p className="text-sm text-gray-500">Sales last 30 days</p>
            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-md">
              <svg
                className="shrink-0 w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
              37.3%
            </span>
          </div>
        </div>
      </div>
      {/* End Card */}
      {/* Card */}
      <div className="flex flex-col p-5 bg-white border-s border-t sm:border-t-0 border-neutral-200">
        <h1 className='text-xl font-semibold'>
          Spent
        </h1>
        <div className="mt-3">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600">
            <CurrencyFormatter amount={data?.spend} currency={adaccount?.metadata?.currency} />
          </h2>
          <div className="hidden mt-2 flex flex-wrap items-center gap-y-1 gap-x-2">
            <p className="text-sm text-gray-500">Sales last 30 days</p>
            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-md">
              <svg
                className="shrink-0 w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
              12.9%
            </span>
          </div>
        </div>
      </div>
      {/* End Card */}
      {/* Card */}
      <div className="flex flex-col p-5 bg-white sm:border-s-0 md:border-s border-t sm:border-t md:border-t-0 border-neutral-200">
        <h1 className='text-xl font-semibold'>
          ROAS
        </h1>
        <div className="mt-3">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600">
            {data?.roas}
          </h2>
          <div className="hidden mt-2 flex flex-wrap items-center gap-y-1 gap-x-2">
            <p className="text-sm text-gray-500">Sales last 30 days</p>
            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-md">
              <svg
                className="shrink-0 w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                <polyline points="16 17 22 17 22 11" />
              </svg>
              3.4%
            </span>
          </div>
        </div>
      </div>
      {/* End Card */}
    </div >
      {/* End Stats Grid */ }
    </>
  );
};

export default Overview;