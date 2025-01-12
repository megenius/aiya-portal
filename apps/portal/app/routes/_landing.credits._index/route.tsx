import React, { useState } from 'react';
import {
  Gift,
  Clock,
  AlertCircle,
  ChevronRight,
  Battery,
  ArrowUpRight,
  InfoIcon,
  Plus
} from 'lucide-react';
import Container from '../_landing/_components/Container';

const CreditPage = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [showRedeemForm, setShowRedeemForm] = useState(false);
  const [redeemCode, setRedeemCode] = useState('');

  const credits = {
    total: 100000,
    used: 45000,
    promotional: [
      {
        id: 1,
        name: 'Welcome Bonus',
        amount: 50000,
        remaining: 25000,
        expiryDate: '2024-03-01',
        usageLimit: 'All features',
        status: 'active'
      },
      {
        id: 2,
        name: 'Early Adopter Bonus',
        amount: 30000,
        remaining: 20000,
        expiryDate: '2024-02-15',
        usageLimit: 'API calls only',
        status: 'active'
      },
      {
        id: 3,
        name: 'Beta Testing Reward',
        amount: 20000,
        remaining: 0,
        expiryDate: '2024-01-01',
        usageLimit: 'All features',
        status: 'expired'
      }
    ]
  };

  return (
    <Container>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Promotional Credits
          </h1>
          <p className="mt-1 text-gray-600">
            Track your available credits and usage
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowRedeemForm(true)}
            className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            Redeem Credits
          </button>
          <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            <ArrowUpRight className="w-4 h-4" />
            Top Up Credits
          </button>
        </div>
      </div>

      {/* Credit Summary */}
      <div className="p-4 mb-8 bg-gradient-to-tr from-blue-50 to-blue-100 border border-blue-200 rounded-xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-600 mb-2">Total Credits</span>
            <span className="text-2xl font-semibold text-gray-800">{credits.total.toLocaleString()}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-600 mb-2">Credits Used</span>
            <span className="text-2xl font-semibold text-gray-800">{credits.used.toLocaleString()}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-600 mb-2">Credits Available</span>
            <span className="text-2xl font-semibold text-gray-800">
              {(credits.total - credits.used).toLocaleString()}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${(credits.used / credits.total) * 100}%` }}
              />
            </div>
            <span className="text-sm text-gray-600">
              {Math.round((credits.used / credits.total) * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('active')}
            className={`py-4 px-1 inline-flex items-center gap-2 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'active'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-blue-600'
              }`}
          >
            <Battery className="w-4 h-4" />
            Active Credits
          </button>
          <button
            onClick={() => setActiveTab('expired')}
            className={`py-4 px-1 inline-flex items-center gap-2 border-b-2 font-medium text-sm whitespace-nowrap ${activeTab === 'expired'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-blue-600'
              }`}
          >
            <Clock className="w-4 h-4" />
            Expired Credits
          </button>
        </nav>
      </div>

      {/* Credit Cards */}
      <div className="grid gap-4">
        {credits.promotional
          .filter(credit =>
            activeTab === 'active'
              ? credit.status === 'active'
              : credit.status === 'expired'
          )
          .map((credit) => (
            <div
              key={credit.id}
              className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4 md:mb-0">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-600">
                    <Gift className="w-5 h-5" />
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-800">
                      {credit.name}
                    </h3>
                    {credit.status === 'expired' && (
                      <span className="inline-flex items-center gap-x-1.5 py-1 px-2 rounded-md text-xs font-medium bg-red-100 text-red-700">
                        Expired
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    {credit.remaining.toLocaleString()} credits remaining
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    Expires: {new Date(credit.expiryDate).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <InfoIcon className="w-4 h-4" />
                    {credit.usageLimit}
                  </div>
                </div>
                <button className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Info Box */}
      <div className="mt-8 p-4 bg-gray-50 border rounded-xl">
        <div className="flex gap-2">
          <AlertCircle className="flex-shrink-0 mt-0.5 w-4 h-4 text-gray-500" />
          <div className="text-sm text-gray-600">
            <p className="font-medium mb-1">About Promotional Credits</p>
            <p>
              Promotional credits are valid for specific services and expire on the date shown.
              Credits are automatically applied to eligible services in the order they expire.
              Expired credits cannot be reactivated or extended.
            </p>
          </div>
        </div>
      </div>



      {/* Redeem Credits Modal */}
      {showRedeemForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <Gift className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">
                      Redeem Promotional Credits
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Enter your promotional code to redeem credits
                      </p>
                      <input
                        type="text"
                        className="mt-2 block w-full rounded-md border-gray-200 py-2 px-3 text-sm"
                        placeholder="Enter code"
                        value={redeemCode}
                        onChange={(e) => setRedeemCode(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto"
                  onClick={() => setShowRedeemForm(false)}
                >
                  Redeem
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={() => setShowRedeemForm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </Container>
  );
};

export default CreditPage;