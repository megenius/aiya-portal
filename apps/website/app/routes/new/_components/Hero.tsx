import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      {/* Badge */}
      <div className="text-center">
        <span className="inline-flex items-center gap-x-2 py-2 px-4 rounded-full text-sm bg-white border border-gray-200 shadow-sm dark:bg-slate-900 dark:border-gray-700">
          🎉 New: Multi-language Support
        </span>
      </div>

      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <h1 className="block text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
          Transform Customer
          <div className="mt-1">
            <span className="bg-blue-600 text-white px-2 rounded-lg dark:bg-blue-500">
              Engagement with AI
            </span>
          </div>
        </h1>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto mt-8">
        <p className="text-center text-lg text-gray-600 dark:text-gray-400">
          Build intelligent chatbots, manage conversations across channels, and analyze customer interactions - all from one powerful platform.
        </p>
      </div>

      {/* Features */}
      <div className="max-w-2xl mx-auto mt-10">
        <div className="flex justify-center gap-6">
          <span className="text-sm text-gray-600">AI-Powered</span>
          <span className="text-sm text-gray-600">Multi-Channel</span>
          <span className="text-sm text-gray-600">Analytics</span>
          <span className="text-sm text-gray-600">Live Chat</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-10 flex justify-center gap-3">
        <a className="inline-flex items-center gap-x-2 py-3 px-6 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          Start Free Trial
          <ArrowRight className="w-4 h-4" />
        </a>
        <a className="inline-flex items-center gap-x-2 py-3 px-6 text-sm font-medium text-gray-800 hover:text-gray-600 rounded-lg border border-gray-200 shadow-sm hover:shadow-md disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          Watch Demo
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Trial Benefits */}
      <div className="mt-8">
        <div className="flex justify-center items-center gap-x-8">
          <span className="text-sm text-gray-600">No credit card required</span>
          <span className="text-sm text-gray-600">14-day free trial</span>
          <span className="text-sm text-gray-600">Cancel anytime</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;