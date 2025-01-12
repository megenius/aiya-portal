import React, { useState, useEffect } from 'react';
import { Copy, CheckCircle, Search, Zap, Users, Bot, Clock } from 'lucide-react';
import Container from '../_landing/_components/Container';
import { use } from 'i18next';
import { useTranslation } from 'react-i18next';
import useCoupons from '~/hooks/billings/useCoupons';
import { useLanguage } from '~/hooks/useLanguage';
import { SaasCoupon } from '~/@types/app';

const CouponPage = () => {
  const [copiedCode, setCopiedCode] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredCoupons, setFilteredCoupons] = useState<Array<SaasCoupon>>([]);
  const [sortBy, setSortBy] = useState('discount');
  const { lang } = useLanguage()
  const { data: coupons, refetch } = useCoupons({ lang });
  const { t } = useTranslation();

  const categories = [
    { id: 'all', label: 'All Plans' },
    { id: 'startup', label: 'Startup' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'new-user', label: 'New Users' },
    { id: 'upgrade', label: 'Upgrades' }
  ];

  useEffect(() => {
    if (coupons) {
      let filtered = coupons?.filter(coupon => {
        const matchesSearch =
          coupon.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coupon.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || coupon.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });

      filtered = [...filtered].sort((a, b) => b.discountValue - a.discountValue);
      setFilteredCoupons(filtered);
    }
  }, [coupons, searchTerm, selectedCategory, sortBy]);

  useEffect(() => {
    refetch();
  }, [lang])

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code).then(
      () => {
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(''), 3000);
      }
    );
  };

  const daysUntilExpiry = (date) => {
    const diff = new Date(date) - new Date();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  return (
    <Container>
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-10">
        <div className="inline-flex items-center justify-center p-2 rounded-lg bg-blue-100 mb-4">
          <Bot className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold md:text-3xl text-gray-800 mb-2">
          {t('coupons.title')}
        </h2>
        {/* <p className="text-gray-600">
          Select a plan that fits your automation needs
        </p> */}
      </div>

      {/* Search and Filters */}
      <div className="hidden max-w-2xl mx-auto mb-10 space-y-4">
        <div className="relative">
          <input
            type="text"
            className="w-full py-3 px-4 ps-11 bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20"
            placeholder="Search discounts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories?.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`py-2 px-4 text-sm rounded-lg transition-colors ${selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>Sort by: Highest Discount</span>
        </div>
      </div>

      {/* Featured Plans */}
      <div className="hidden mb-10 ">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Featured Plans
          </h3>
          <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
            Best Value
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coupons?.filter(coupon => coupon.featured)?.map((coupon) => (
            <div
              key={coupon.code}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-2">
                  Featured
                </span>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {coupon.description}
                </h3>

                <ul className="space-y-3 mb-6">
                  {coupon?.benefits?.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-3">
                  <code className="text-sm font-mono">
                    {coupon.code}
                  </code>
                  <button
                    onClick={() => handleCopyCode(coupon.code)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    {copiedCode === coupon.code ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <Copy className="h-5 w-5" />
                    )}
                  </button>
                </div>

                <div className="text-sm text-gray-600">
                  <p className="flex items-center gap-1 mb-1">
                    <Clock className="h-4 w-4" />
                    Expires in {daysUntilExpiry(coupon.validUntil)} days
                  </p>
                  <p>{coupon.terms}</p>
                  {coupon.minPurchase > 0 && (
                    <p>Min. purchase: ${coupon.minPurchase}</p>
                  )}
                  <p>Max discount: ${coupon.maxDiscount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Coupons */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCoupons?.map((coupon) => (
          <div
            key={coupon.code}
            className="bg-white rounded-xl p-6 border border-gray-200"
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
              {coupon.discount}
            </span>

            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {coupon.description}
            </h3>

            <ul className="space-y-3 mb-6">
              {coupon?.benefits?.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-3">
              <code className="text-sm font-mono">
                {coupon.code}
              </code>
              <button
                onClick={() => handleCopyCode(coupon.code)}
                className="text-gray-400 hover:text-gray-600"
              >
                {copiedCode === coupon.code ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="text-sm text-gray-600">
              <p className="flex items-center gap-1 mb-1">
                <Clock className="h-4 w-4" />
                Expires in {daysUntilExpiry(coupon.end_date)} days
              </p>
              <p>{coupon.terms}</p>
              {coupon.minPurchase > 0 && (
                <p>Min. purchase: ${coupon.minPurchase}</p>
              )}
              {coupon.maxDiscount > 0 && (
                <p>Max discount: ${coupon.maxDiscount}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Terms Footer */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>
          {t('coupons.terms')}
        </p>
      </div>
    </Container>
  );
};

export default CouponPage;