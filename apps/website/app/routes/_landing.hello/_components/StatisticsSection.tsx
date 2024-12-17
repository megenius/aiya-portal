export default function StatisticsSection() {
  const stats = [
    { value: '10k+', label: 'Active Users' },
    { value: '1M+', label: 'Messages/Month' },
    { value: '95%', label: 'Customer Satisfaction' },
    { value: '50+', label: 'Integrations' }
  ];

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
              <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}