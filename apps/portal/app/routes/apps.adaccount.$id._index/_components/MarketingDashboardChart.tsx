import React, { Suspense, useMemo } from 'react';
import { ClientOnly } from "remix-utils/client-only";

const Chart = React.lazy(() => import('react-apexcharts')
);

const data = [
  { month: '2023-01', spend: 5000, revenue: 15000 },
  { month: '2023-02', spend: 6000, revenue: 18000 },
  { month: '2023-03', spend: 7500, revenue: 24000 },
  { month: '2023-04', spend: 8000, revenue: 28000 },
  { month: '2023-05', spend: 10000, revenue: 35000 },
];

const formatCurrency = (value) => `$${value.toLocaleString()}`;

export default function MarketingDashboardChart() {
  const chartOptions = {
    chart: {
      type: 'line',
      height: 265,
      toolbar: {
        show: false,
      },
    },
    colors: ['#16a34a', '#94a3b8'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    xaxis: {
      categories: data.map(item => item.month),
    },
    yaxis: {
      labels: {
        formatter: (value) => formatCurrency(value),
      },
    },
    tooltip: {
      y: {
        formatter: (value) => formatCurrency(value),
      },
    },
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: 'Revenue',
      data: data.map(item => item.revenue),
    },
    {
      name: 'Spend',
      data: data.map(item => item.spend),
    },
  ];

  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const totalSpend = data.reduce((sum, item) => sum + item.spend, 0);
  const roas = totalRevenue / totalSpend;

  return (
    <Suspense fallback="">
      <ClientOnly>
        {() =>
          <div className="p-5 flex flex-col bg-white border border-stone-200 shadow-sm rounded-xl">
            <h2 className="inline-block font-semibold text-stone-800">
              Revenue vs. Spend
            </h2>
            {/* Subheader */}
            <div className="grid md:grid-cols-2 items-center gap-y-1 md:gap-y-0 md:gap-x-4">
              <div>
                <h4 className="text-lg text-stone-800">
                  {formatCurrency(totalRevenue)}
                  <span className="inline-flex items-center gap-x-1 text-sm text-green-500 ml-2">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                    {roas.toFixed(2)}x ROAS
                  </span>
                </h4>
              </div>
              <div className="md:text-end">
                <p className="text-sm text-stone-500">
                  Total Spend: {formatCurrency(totalSpend)}
                </p>
              </div>
            </div>
            {/* End Subheader */}
            {/* Apex Line Chart */}
            <div className="min-h-[215px] md:min-h-[265px]">
              <Chart options={chartOptions} series={series} type="line" height={265} />
            </div>
            {/* Legend Indicator */}
            <div className="flex justify-center items-center gap-x-4 mt-5">
              <div className="inline-flex items-center">
                <span className="size-2.5 inline-block bg-green-600 rounded-sm me-2"></span>
                <span className="text-[13px] text-stone-600">
                  Revenue
                </span>
              </div>
              <div className="inline-flex items-center">
                <span className="size-2.5 inline-block bg-stone-400 rounded-sm me-2"></span>
                <span className="text-[13px] text-stone-600">
                  Spend
                </span>
              </div>
            </div>
            {/* End Legend Indicator */}
          </div>
        }
      </ClientOnly>
    </Suspense>
  );
}