import React from 'react';
import CTASection from './_components/CTASection';
import FeaturesSection from './_components/FeaturesSection';
import HeroSection from './_components/HeroSection';
import StatisticsSection from './_components/StatisticsSection';
import Layout from './_components/Layout';


export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <StatisticsSection />
      <FeaturesSection />
      <CTASection />
    </Layout>
  );
}