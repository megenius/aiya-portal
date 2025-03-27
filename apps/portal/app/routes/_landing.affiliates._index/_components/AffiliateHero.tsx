import React, { useEffect } from 'react';
import { TrendingUp, Users, DollarSign, Award, ArrowRight, Zap, Target, Gift } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { startTransition, useState } from 'react';

const AffiliateHero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t, ready } = useTranslation('affiliate');

  const highlights = [
    {
      icon: <DollarSign className="w-6 h-6 text-blue-500" />,
      title: t('highlights.commission.title'),
      description: t('highlights.commission.description')
    },
    {
      icon: <Gift className="w-6 h-6 text-green-500" />,
      title: t('highlights.bonus.title'),
      description: t('highlights.bonus.description')
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: t('highlights.start.title'),
      description: t('highlights.start.description')
    },
    {
      icon: <Target className="w-6 h-6 text-red-500" />,
      title: t('highlights.unlimited.title'),
      description: t('highlights.unlimited.description')
    }
  ];

  const benefits = [
    {
      title: t('benefits.commission.title'),
      points: [
        t('benefits.commission.points.first'),
        t('benefits.commission.points.recurring'),
        t('benefits.commission.points.bonus')
      ]
    },
    {
      title: t('benefits.tools.title'),
      points: [
        t('benefits.tools.points.dashboard'),
        t('benefits.tools.points.links'),
        t('benefits.tools.points.reports')
      ]
    },
    {
      title: t('benefits.support.title'),
      points: [
        t('benefits.support.points.team'),
        t('benefits.support.points.guides'),
        t('benefits.support.points.community')
      ]
    }
  ];


  // Update loading state when translations are ready
  useEffect(() => {
    setIsLoading(!ready);
  }, [ready]);

  // Show loading state
  if (isLoading) {
    return <div className="max-w-[1200px] mx-auto p-4">Loading...</div>;
  }




  return (
    <div className="max-w-[1200px] mx-auto p-4">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 mb-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t('hero.title')}<br />
            <span className="text-blue-600">{t('hero.programName')}</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              {t('hero.buttons.register')}
            </button>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium border border-blue-600 hover:bg-blue-50 transition-colors">
              {t('hero.buttons.details')}
            </button>
          </div>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {highlights.map((highlight, index) => (
          <div key={index} className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              {highlight.icon}
              <h3 className="font-semibold text-lg">{highlight.title}</h3>
            </div>
            <p className="text-gray-600">{highlight.description}</p>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="bg-white border rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-8">{t('benefits.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <ul className="space-y-3">
                {benefit.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 bg-gray-50 rounded-lg p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{t('stats.commission.value')}</div>
            <div className="text-sm text-gray-600">{t('stats.commission.label')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{t('stats.recurring.value')}</div>
            <div className="text-sm text-gray-600">{t('stats.recurring.label')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{t('stats.bonus.value')}</div>
            <div className="text-sm text-gray-600">{t('stats.bonus.label')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{t('stats.support.value')}</div>
            <div className="text-sm text-gray-600">{t('stats.support.label')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateHero;