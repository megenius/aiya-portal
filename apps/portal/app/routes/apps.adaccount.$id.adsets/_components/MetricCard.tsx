
const MetricCard: React.FC<{ title: string; value: any }> = ({ title, value }) => (
  <div className="p-4 flex flex-col bg-white border border-gray-200 rounded-xl">
    <div className="flex justify-between items-center mb-1">
      <h2 className="text-4xl font-semibold text-gray-800">{value}</h2>
    </div>
    <h3 className="text-gray-500">{title}</h3>
  </div>
);

export default MetricCard