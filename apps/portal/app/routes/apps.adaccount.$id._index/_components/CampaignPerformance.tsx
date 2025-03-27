import { useParams } from '@remix-run/react';
import React, { Suspense, useMemo } from 'react';
import { ClientOnly } from "remix-utils/client-only";
import { FacebookAdAccount } from '~/@types/app';
import { useAdCampaignPerformance } from '~/hooks/adaccount/useAdCampaignPerformance';

const Chart = React.lazy(() => import('react-apexcharts')
);

interface CampaignProps {
  adaccount: FacebookAdAccount
}

const CampaignPerformance: React.FC<CampaignProps> = ({ adaccount }) => {
  const { id } = useParams();
  const { data } = useAdCampaignPerformance({ variables: { id: id as string } });

  const formatCurrency = (value) => `${adaccount.metadata.currency} ${value.toLocaleString()}`;

  const { chartOptions, series } = useMemo(() => {
    if (!data) return {
      chartOptions: {},
      series: [],
    };

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
          endingShape: 'rounded-sm',
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
        categories: data.map(item => item.name),
      },
      yaxis: {
        title: {
          text: adaccount.metadata.currency,
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


    return { chartOptions, series };
  }, [data]);



  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Campaign Performance</h3>
      <Chart options={chartOptions} series={series} type="bar" height={350} />
    </div>
  );
}

export { CampaignPerformance };