interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600">
          {icon}
        </div>
        <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-4 text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
