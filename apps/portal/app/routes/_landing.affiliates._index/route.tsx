import React from 'react';
import AffiliateTiers from './_components/AffiliateTiers';
import AffiliateHero from './_components/AffiliateHero';
import AffiliateFaqPayment from './_components/AffiliateFaqPayment';
import AffiliateIncomeCalculator from './_components/AffiliateIncomeCalculator';

interface routeProps {

}

const route: React.FC<routeProps> = () => {
  return (
    <>
      <AffiliateHero />
      <AffiliateTiers />
      <AffiliateIncomeCalculator />
      <AffiliateFaqPayment />
    </>
  );
};

export default route;