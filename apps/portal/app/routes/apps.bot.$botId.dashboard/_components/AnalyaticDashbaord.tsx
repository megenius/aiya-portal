import React from 'react';
import { useState } from 'react';
import { LineChart, BarChart, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Bar, ResponsiveContainer } from 'recharts';
import { ChevronDown, CircleSlash2, Brain, MessageCircle, Users2, BarChart2, Clock, Target, Zap, CheckCircle } from 'lucide-react';
import { stats } from '~/@types/app';

const COLORS = ['#2563eb', '#dc2626', '#059669', '#d97706', '#7c3aed', '#db2777'];

interface AnalyticsReport {
  summary: {
    conversations: {
      total: number;
      fallbacks: number;
      fallbackRate: number;
    };
    users: {
      total: number;
      activeHours: number;
      averageUsersPerHour: number;
    };
    performance: {
      avgConfidence: number;
      successRate: number;
    };
  };
  knowledge: {
    metrics: {
      byId: Record<string, {
        id: string;
        conversations: number;
        avgConfidence: number;
        intents: Array<{
          name: string;
          count: number;
          percentage: number;
        }>;
      }>;
      unknown: {
        conversations: number;
        intents: Array<{
          name: string;
          count: number;
          percentage: number;
        }>;
      };
      total: {
        withKnowledge: number;
        withoutKnowledge: number;
        utilizationRate: number;
      };
    };
    topIntents: Array<{
      intent: string;
      total: number;
      byKnowledge: Array<{
        id: string;
        count: number;
        percentage: number;
      }>;
    }>;
  };
  hourlyActivity: Array<{
    hour: string;
    conversations: number;
    uniqueUsers: number;
    fallbacks: number;
  }>;
  metadata: {
    timezone: string;
    queryTime: number;
    timeRange: {
      start: string;
      end: string;
    };
  };
}

interface AnalyaticDashbaordProps {
  stats: stats.AnalyticsReport
}

const AnalyaticDashbaord: React.FC<AnalyaticDashbaordProps> = ({ stats }) => {
  const [data] = useState<AnalyticsReport>({
    summary: stats.summary,
    knowledge: {
      metrics: {
        byId: {
          'fb81b7bd-c451-4745-b0fb-a95a6297f4d0': {
            id: 'fb81b7bd-c451-4745-b0fb-a95a6297f4d0',
            conversations: 1,
            avgConfidence: 0,
            intents: [{ name: 'แผนการดำเนินงานประจำปี', count: 1, percentage: 100 }]
          }
        },
        unknown: {
          conversations: stats.knowledgeUsage.unknown?.conversations || 0,
          intents: stats.knowledgeUsage.unknown?.intents || []
        },
        total: {
          withKnowledge: stats.knowledgeUsage.summary.totalKnown,
          withoutKnowledge: stats.knowledgeUsage.summary.totalUnknown,
          utilizationRate: stats.knowledgeUsage.summary.knowledgeUtilization
        }
      },
      topIntents: []
    },
    hourlyActivity: stats.hourlyActivity,
    metadata: {
      timezone: stats.metadata.timezone,
      queryTime: stats.metadata.queryTime,
      timeRange: { start: stats.metadata.startTime, end: stats.metadata.endTime }
    }
  });

  const formatPercentage = (value: number) => `${value.toFixed(1)}%`;

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Primary Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">


        <div className="bg-white border shadow-sm rounded-xl p-4 md:p-5">
          <div className="flex items-center gap-x-2">
            <Target className="w-[32px] h-[32px] text-green-600" />
            <div className="grow">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Success Rate
              </p>
              <div className="mt-1 flex items-center gap-x-2">
                <h3 className="text-xl font-medium text-gray-800">
                  {formatPercentage(data.summary.performance.successRate)}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border shadow-sm rounded-xl p-4 md:p-5">
          <div className="flex items-center gap-x-2">
            <Brain className="w-[32px] h-[32px] text-purple-600" />
            <div className="grow">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Knowledge Usage
              </p>
              <div className="mt-1 flex items-center gap-x-2">
                <h3 className="text-xl font-medium text-gray-800">
                  {formatPercentage(data.knowledge.metrics.total.utilizationRate)}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border shadow-sm rounded-xl p-4 md:p-5">
          <div className="flex items-center gap-x-2">
            <Zap className="w-[32px] h-[32px] text-yellow-600" />
            <div className="grow">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Avg Confidence
              </p>
              <div className="mt-1 flex items-center gap-x-2">
                <h3 className="text-xl font-medium text-gray-800">
                  {formatPercentage(data.summary.performance.avgConfidence * 100)}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white border shadow-sm rounded-xl p-4 md:p-5">
          <div className="flex items-center gap-x-2">
            <Users2 className="w-[32px] h-[32px] text-blue-600" />
            <div className="grow">
              <p className="text-xs uppercase tracking-wide text-gray-500">Users & Activity</p>
              <div className="mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Unique Users</p>
                    <p className="text-lg font-semibold">{data.summary.users.total}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Active Hours</p>
                    <p className="text-lg font-semibold">{data.summary.users.activeHours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border shadow-sm rounded-xl p-4 md:p-5">
          <div className="flex items-center gap-x-2">
            <CircleSlash2 className="w-[32px] h-[32px] text-red-600" />
            <div className="grow">
              <p className="text-xs uppercase tracking-wide text-gray-500">Fallbacks</p>
              <div className="mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Total</p>
                    <p className="text-lg font-semibold">{data.summary.conversations.fallbacks}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Rate</p>
                    <p className="text-lg font-semibold">{formatPercentage(data.summary.conversations.fallbackRate)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border shadow-sm rounded-xl p-4 md:p-5">
          <div className="flex items-center gap-x-2">
            <CheckCircle className="w-[32px] h-[32px] text-green-600" />
            <div className="grow">
              <p className="text-xs uppercase tracking-wide text-gray-500">Knowledge Stats</p>
              <div className="mt-2">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">With Knowledge</p>
                    <p className="text-lg font-semibold">{data.knowledge.metrics.total.withKnowledge}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Without</p>
                    <p className="text-lg font-semibold">{data.knowledge.metrics.total.withoutKnowledge}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-4 mb-6">
        {/* Hourly Activity Chart */}
        <div className="bg-white border shadow-sm rounded-xl p-4 md:p-5">
          <h3 className="font-semibold text-gray-800 mb-4">Hourly Activity</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.hourlyActivity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="conversations" stroke="#2563eb" name="Conversations" />
                <Line type="monotone" dataKey="fallbacks" stroke="#dc2626" name="Fallbacks" />
                <Line type="monotone" dataKey="uniqueUsers" stroke="#059669" name="Users" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Intent Distribution Pie Chart */}
        <div className="bg-white border shadow-sm rounded-xl p-4 md:p-5">
          <h3 className="font-semibold text-gray-800 mb-4">Intent Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.knowledge.metrics.unknown.intents}
                  dataKey="count"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={(entry) => entry.name}
                >
                  {data.knowledge.metrics.unknown.intents.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Knowledge Distribution */}
        <div className="bg-white border shadow-sm rounded-xl p-4 md:p-5">
          <h3 className="font-semibold text-gray-800 mb-4">Knowledge Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                {
                  name: 'Knowledge Usage',
                  withKnowledge: data.knowledge.metrics.total.withKnowledge,
                  withoutKnowledge: data.knowledge.metrics.total.withoutKnowledge,
                }
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="withKnowledge" fill="#2563eb" name="With Knowledge" />
                <Bar dataKey="withoutKnowledge" fill="#dc2626" name="Without Knowledge" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Success vs Fallback Rate */}
        <div className="bg-white border shadow-sm rounded-xl p-4 md:p-5">
          <h3 className="font-semibold text-gray-800 mb-4">Success vs Fallback Rate</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Success', value: data.summary.performance.successRate },
                    { name: 'Fallback', value: data.summary.conversations.fallbackRate }
                  ]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  <Cell fill="#059669" />
                  <Cell fill="#dc2626" />
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detailed Intent Analysis */}
      <div className="bg-white border shadow-sm rounded-xl">
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Intent Analysis</h3>
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Intent</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Count</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Percentage</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {data.knowledge.metrics.unknown.intents.map((intent, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            {intent.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {intent.count}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {formatPercentage(intent.percentage)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            <span className={`inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium ${intent.name === 'FALLBACK'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-green-100 text-green-800'
                              }`}>
                              {intent.name === 'FALLBACK' ? 'Failed' : 'Success'}
                            </span>
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
    </div>
  );
}

export default AnalyaticDashbaord;