import { Sparkles, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const metrics = [
    { value: '99.9%', label: 'Uptime' },
    { value: '5M+', label: 'Messages/Day' },
    { value: '50+', label: 'Integrations' },
    { value: '10K+', label: 'Active Bots' }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] bg-top"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-16 lg:py-24">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-8">
              <Sparkles className="h-4 w-4 mr-2" />
              New: Multi-language AI Understanding
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              <span className="block">Build Smarter</span>
              <span className="block text-blue-600 mt-2">AI Customer Service</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl lg:max-w-none">
              Create, deploy, and scale intelligent chatbots that understand your customers. One platform for all your conversational AI needs.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
              <a href="#" className="w-full sm:w-auto rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-all">
                Get Started Free
              </a>
              <a href="#" className="w-full sm:w-auto rounded-lg border border-gray-300 px-8 py-4 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center">
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Preview */}
          <div className="flex-1">
            <div className="relative rounded-xl bg-white shadow-2xl border border-gray-200 p-4">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-lg opacity-20 blur-2xl"></div>
              <img
                src="/api/placeholder/600/400"
                alt="AIYA Dashboard Preview"
                className="rounded-lg w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
