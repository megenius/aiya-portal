import React from 'react';
import AffiliateTiers from './_components/AffiliateTiers';
import AffiliateHero from './_components/AffiliateHero';
import AffiliateFaqPayment from './_components/AffiliateFaqPayment';
import AffiliateIncomeCalculator from './_components/AffiliateIncomeCalculator';
import Container from '../_landing/_components/Container';

interface routeProps {

}

const route: React.FC<routeProps> = () => {
  return (
    <>
      <Container>
        <AffiliateHero />
        <AffiliateTiers />
        <AffiliateIncomeCalculator />
        <AffiliateFaqPayment />
      </Container>
    </>
  );
};

export default route;