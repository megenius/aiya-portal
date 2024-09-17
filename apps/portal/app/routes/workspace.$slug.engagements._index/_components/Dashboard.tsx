import React, { useState, useMemo } from 'react';

const ReactApexChart = React.lazy(() => import('react-apexcharts'));

const Dashboard: React.FC<{ conversationsData: Conversation[] }> = ({ conversationsData = [] }) => {

  const [selectedConversation, setSelectedConversation] = useState(null);

  const metrics = useMemo(() => {
    if (!Array.isArray(conversationsData) || conversationsData.length === 0) {
      return {
        conversionRate: "0.00",
        avgLeadScore: "0.00",
        totalConversations: 0,
        avgResponseTime: "0.00",
        avgFirstResponseTime: "0.00",
        csatScore: "N/A"
      };
    }

    const totalConversations = conversationsData.length;
    const totalLeadScore = conversationsData.reduce((acc, conv) => acc + (conv.analysis?.lead_potential_score || 0), 0);
    const totalResponseTime = conversationsData.reduce((acc, conv) => acc + (conv.average_response_time || 0), 0);
    const totalFirstResponseTime = conversationsData.reduce((acc, conv) => acc + (conv.first_response_time || 0), 0);
    
    const conversions = conversationsData.filter(conv => (conv.analysis?.lead_potential_score || 0) > 7).length;

    return {
      conversionRate: ((conversions / totalConversations) * 100).toFixed(2),
      avgLeadScore: (totalLeadScore / totalConversations).toFixed(2),
      totalConversations,
      avgResponseTime: (totalResponseTime / totalConversations).toFixed(2),
      avgFirstResponseTime: (totalFirstResponseTime / totalConversations).toFixed(2),
      csatScore: "N/A"
    };
  }, [conversationsData]);

  const classificationData = useMemo(() => {
    if (!Array.isArray(conversationsData)) return {};
    return conversationsData.reduce((acc, conv) => {
      const classification = conv.analysis?.classification || 'Unknown';
      acc[classification] = (acc[classification] || 0) + 1;
      return acc;
    }, {});
  }, [conversationsData]);

  const barChartOptions = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: Array.isArray(conversationsData) ? conversationsData.map(conv => conv.user_name || 'Unknown') : [],
    },
    yaxis: {
      title: {
        text: 'Average Response Time (s)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " seconds"
        }
      }
    }
  };

  const barChartSeries = [{
    name: 'Average Response Time',
    data: Array.isArray(conversationsData) ? conversationsData.map(conv => conv.average_response_time || 0) : []
  }];

  const pieChartOptions = {
    chart: {
      type: 'pie',
      height: 350
    },
    labels: Object.keys(classificationData),
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };

  const pieChartSeries = Object.values(classificationData);

  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-4 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Conversion Data Dashboard</h1>
      
      {/* Key Metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Conversion Rate</h3>
            <p className="mt-2 text-3xl font-bold text-gray-800 dark:text-white">{metrics.conversionRate}%</p>
          </div>
        </div>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Avg Lead Score</h3>
            <p className="mt-2 text-3xl font-bold text-gray-800 dark:text-white">{metrics.avgLeadScore}</p>
          </div>
        </div>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Total Conversations</h3>
            <p className="mt-2 text-3xl font-bold text-gray-800 dark:text-white">{metrics.totalConversations}</p>
          </div>
        </div>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Avg Response Time</h3>
            <p className="mt-2 text-3xl font-bold text-gray-800 dark:text-white">{metrics.avgResponseTime}s</p>
          </div>
        </div>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">Avg First Response Time</h3>
            <p className="mt-2 text-3xl font-bold text-gray-800 dark:text-white">{metrics.avgFirstResponseTime}s</p>
          </div>
        </div>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">CSAT Score</h3>
            <p className="mt-2 text-3xl font-bold text-gray-800 dark:text-white">{metrics.csatScore}</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Response Times</h3>
            <div className="h-80">
              <ReactApexChart options={barChartOptions} series={barChartSeries} type="bar" height={350} />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Conversation Classifications</h3>
            <div className="h-80">
              <ReactApexChart options={pieChartOptions} series={pieChartSeries} type="pie" height={350} />
            </div>
          </div>
        </div>
      </div>

      {/* Conversation Details Table */}
      <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Conversation Details</h3>
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Agent</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Classification</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lead Score</th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {Array.isArray(conversationsData) && conversationsData.map((conv) => (
                        <tr key={conv.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{conv.user_name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{conv.agent_name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{conv.analysis?.classification}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{conv.analysis?.lead_potential_score.toFixed(2)}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              type="button"
                              className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                              onClick={() => setSelectedConversation(conv)}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Conversation Details */}
      {selectedConversation && (
        <div className="mt-6 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Conversation Details: {selectedConversation.user_name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Classification:</strong> {selectedConversation.analysis?.classification}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Interests:</strong> {selectedConversation.analysis?.interest.join(', ')}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Recommendation:</strong> {selectedConversation.analysis?.recommendation}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400"><strong>Justification:</strong> {selectedConversation.analysis?.justification}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;



export interface Conversation {
  id: string
  conversation_id: string
  link: string
  unread_count: number
  user_name: string
  user_email: string
  user_id: string
  agent_name: string
  agent_email: string
  agent_id: string
  start_time: string
  end_time: string
  total_duration: number
  total_messages: number
  agent_messages: number
  user_messages: number
  first_response_time: number
  average_response_time: number
  min_response_time: number
  max_response_time: number
  response_times: number[]
  analysis: Analysis
  chat_history: ChatHistory[]
}

export interface Analysis {
  classification: string
  interest: string[]
  recommendation: string
  lead_potential_score: number
  justification: string
}

export interface ChatHistory {
  role: string
  content: string
  time: string
}