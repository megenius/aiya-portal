import React from 'react';
import { MessageSquare, Users, Zap, BarChart3, ArrowRight, Check, Shield, Globe, Bot } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-8">
                  🎉 New: Multi-language Support
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
                  <span className="block">Transform Customer</span>
                  <span className="block text-blue-600">Engagement with AI</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                  Build intelligent chatbots, manage conversations across channels, and analyze customer interactions - all from one powerful platform.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a href="#" className="rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-all">
                    Start Free Trial
                  </a>
                  <a href="#" className="text-base font-semibold leading-6 text-gray-900 flex items-center hover:text-blue-600">
                    Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
                <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    No credit card required
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    14-day free trial
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Cancel anytime
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">10k+</div>
              <div className="mt-2 text-sm text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">1M+</div>
              <div className="mt-2 text-sm text-gray-600">Messages/Month</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">95%</div>
              <div className="mt-2 text-sm text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">50+</div>
              <div className="mt-2 text-sm text-gray-600">Integrations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for AI-powered conversations
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Built for teams who want to deliver exceptional customer experiences at scale.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature Cards */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <Bot className="h-10 w-10 text-blue-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">AI-Powered Chatbots</h3>
                <p className="mt-4 text-gray-600">
                  Train custom chatbots with your business knowledge. Natural language understanding for human-like conversations.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <Globe className="h-10 w-10 text-blue-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Multi-channel Support</h3>
                <p className="mt-4 text-gray-600">
                  Connect with LINE, Facebook, and other platforms. Manage all conversations from a unified dashboard.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <BarChart3 className="h-10 w-10 text-blue-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Advanced Analytics</h3>
                <p className="mt-4 text-gray-600">
                  Track performance metrics, user engagement, and conversation quality. Data-driven insights for optimization.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <Users className="h-10 w-10 text-blue-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Team Collaboration</h3>
                <p className="mt-4 text-gray-600">
                  Manage team access, roles, and permissions. Work together in dedicated workspaces.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <Shield className="h-10 w-10 text-blue-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Enterprise Security</h3>
                <p className="mt-4 text-gray-600">
                  Advanced security features, data encryption, and compliance with privacy standards.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <Zap className="h-10 w-10 text-blue-600" />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Quick Integration</h3>
                <p className="mt-4 text-gray-600">
                  Easy setup and integration with your existing tools. Get started in minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Trusted by innovative companies
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gray-100"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">John Smith</h3>
                    <p className="text-sm text-gray-500">CEO at TechCorp</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-600">
                  "AIYA has transformed how we handle customer support. The AI chatbots are incredibly intelligent and the analytics help us continuously improve."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
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
    </div>
  );
}