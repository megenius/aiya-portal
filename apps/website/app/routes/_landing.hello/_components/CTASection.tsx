import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-24 text-center shadow-2xl rounded-3xl">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to revolutionize your customer engagement?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Join thousands of companies already using AIYA to deliver exceptional customer experiences.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="rounded-lg bg-white px-8 py-4 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50 transition-all">
              Start your free trial
            </a>
            <a href="#" className="text-base font-semibold leading-6 text-white flex items-center hover:text-blue-100 transition-colors">
              Schedule a demo <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}