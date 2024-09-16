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


const campaignData = [
  { name: 'Campaign A', spend: 5000, revenue: 15000 },
  { name: 'Campaign B', spend: 8000, revenue: 24000 },
  { name: 'Campaign C', spend: 3000, revenue: 9000 },
  { name: 'Campaign D', spend: 10000, revenue: 36000 },
];


const formatCurrency = (value) => `$${value.toLocaleString()}`;

export default function Campaign() {
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: campaignData.map(item => item.name),
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return formatCurrency(val);
        },
      },
    },
    colors: ['#818cf8', '#86efac'],
    legend: {
      position: 'top',
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
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Campaign Performance</h3>
            <Chart options={chartOptions} series={series} type="bar" height={350} />
          </div>
        }
      </ClientOnly>
    </Suspense>
  );
}