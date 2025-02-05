import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface DateBarChartProps {
  title: string;
  data?: Array<{
    date: string;
    value: number;
  }>;
}

const DateBarChart: React.FC<DateBarChartProps> = ({ title, data = [] }) => {
  return (
    <div className="bg-white">
      <div className="p-4 md:p-6">
        <h3 className="text-lg font-bold text-gray-800">
          {title}
        </h3>

        <div className="mt-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis
                dataKey="date"
                stroke="#71717a"
                fontSize={12}
              />
              <YAxis
                stroke="#71717a"
                fontSize={12}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                        <p className="text-sm font-medium text-gray-800">{label}</p>
                        <p className="text-sm text-indigo-600">
                          Conversations: {payload[0].value}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="value"
                fill="#6366f1"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DateBarChart;
